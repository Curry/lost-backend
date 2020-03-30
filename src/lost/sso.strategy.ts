import { Injectable } from '@nestjs/common';
import { Strategy, IVerifyOptions, IEveProfile } from 'passport-eveonline-sso';
import { PassportStrategy } from '@nestjs/passport';


@Injectable()
export class SSOStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super( {
            clientID: '88f6459ddde5474f99feda81918307e1',
            clientSecret: 'dZLJrBJP2B6XWo1kGms2aWI8PgCnRGmGfxUkFpzw',
            scope: 'esi-location.read_location.v1 esi-location.read_ship_type.v1 esi-ui.write_waypoint.v1 esi-location.read_online.v1',
            callbackURL: 'http://localhost:3000/callback/'
          });
    }

    async validate(accessToken: string, refreshToken: string, profile: IEveProfile, done: (error: any, user?: any, options?: IVerifyOptions) => void) {
        delete profile['_json'];
        delete profile['_raw'];
        console.log('=== New Login ===');
        console.log('accessToken:', accessToken);
        console.log('refreshToken:', refreshToken);
        console.log('profile:', profile);
        done(null, profile);
    }
}