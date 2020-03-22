import { Injectable, HttpService } from '@nestjs/common';
import { stringify } from 'qs';
import { map } from 'rxjs/operators';
import { InjectRepository } from '@nestjs/typeorm';
import { System } from './entity/data/system.db';
import { Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  getESIAuth = (code: string) =>
    this.http
      .post(
        'https://login.eveonline.com/v2/oauth/token',
        stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          grant_type: 'authorization_code',
          code: code,
        }),
        {
          headers: {
            'Authorization': `Basic ${Buffer.from(
              '88f6459ddde5474f99feda81918307e1:dZLJrBJP2B6XWo1kGms2aWI8PgCnRGmGfxUkFpzw',
            ).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'login.eveonline.com',
          },
        },
      )
      .pipe(map(val => val.data));


  refreshESIToken = (token: string) => this.http.post(
    'https://login.eveonline.com/v2/oauth/token',
    stringify({
      // eslint-disable-next-line @typescript-eslint/camelcase
      grant_type: 'refresh_token',
      // eslint-disable-next-line @typescript-eslint/camelcase
      refresh_token: token
    }),
    {
      headers: {
        'Authorization': `Basic ${Buffer.from(
          '88f6459ddde5474f99feda81918307e1:dZLJrBJP2B6XWo1kGms2aWI8PgCnRGmGfxUkFpzw',
        ).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'login.eveonline.com',
      },
    },
  )
  .pipe(map(val => val.data));
}
