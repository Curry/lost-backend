import { Injectable } from '@nestjs/common';
import { requestNewAccessToken } from 'passport-oauth2-refresh';
import { defer, of, iif, throwError, from } from 'rxjs';
import { LostService } from 'src/lost/lost.service';
import { IEveRawProfile } from 'src/models/esi.model';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private lostService: LostService) {}

  saveUser = (
    accessToken: string,
    refreshToken: string,
    profile: IEveRawProfile,
  ) =>
    from(this.lostService.findCharacter(profile.CharacterID)).pipe(
      mergeMap(val =>
        from(
          this.lostService.saveCharacter(
            (val && val.id) || undefined,
            accessToken,
            refreshToken,
            profile,
          ),
        ),
      ),
    );

  refreshToken = (refreshToken: string) =>
    defer(() =>
      of(
        requestNewAccessToken(
          'oauth2',
          refreshToken,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (err, accessToken, refreshToken, _result) =>
            iif(
              () => !err,
              this.lostService.updateCharAccessToken(refreshToken, accessToken),
              throwError(err),
            ),
        ),
      ),
    );
}
