import { Injectable } from '@nestjs/common';
import { Strategy, InternalOAuthError } from 'passport-oauth2';
import { PassportStrategy } from '@nestjs/passport';
import { Repository } from 'typeorm';
import { Character } from './entity/character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IEveRawProfile } from 'src/models/esi.model';
import { of, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class SSOStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Character, 'data')
    private charRepo: Repository<Character>,
  ) {
    super({
      authorizationURL: 'https://login.eveonline.com/oauth/authorize',
      tokenURL: 'https://login.eveonline.com/oauth/token',
      clientID: '88f6459ddde5474f99feda81918307e1',
      clientSecret: 'dZLJrBJP2B6XWo1kGms2aWI8PgCnRGmGfxUkFpzw',
      scope:
        'esi-location.read_location.v1 esi-location.read_ship_type.v1 esi-ui.write_waypoint.v1 esi-location.read_online.v1',
      callbackURL: 'http://localhost:3000/callback/',
    });
  }

  validate = (
    accessToken: string,
    refreshToken: string,
    profile: IEveRawProfile,
    done: (err: any, result?: any, response?: any) => any,
  ) =>
    from(this.charRepo.findOne({ characterId: profile.CharacterID }))
      .pipe(
        mergeMap(val =>
          from(
            this.charRepo.save({
              id: val.id || undefined,
              ownerHash: profile.CharacterOwnerHash,
              esiAccessToken: accessToken,
              esiAccessTokenExpires: profile.ExpiresOn,
              esiRefreshToken: refreshToken,
              esiScopes: profile.Scopes,
              characterId: profile.CharacterID,
              lastLogin: new Date(),
            } as Character),
          ),
        ),
        mergeMap(val => of(done(null, val))),
      )
      .toPromise();

  userProfile = (
    accessToken: string,
    done: (err: any, result?: any, response?: any) => any,
  ) => {
    this._oauth2.useAuthorizationHeaderforGET(true);
    this._oauth2.get(
      'https://login.eveonline.com/oauth/verify',
      accessToken,
      (err, body: string) => {
        if (err) {
          return done(
            new InternalOAuthError('Failed to parse character profile.', err),
          );
        }
        const profile = JSON.parse(body) as IEveRawProfile;
        done(null, profile);
      },
    );
  };
}
