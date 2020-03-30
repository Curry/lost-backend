import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LostModule } from 'src/lost/lost.module';
import { PassportModule } from '@nestjs/passport';
import { SSOStrategy } from './sso.strategy';

@Module({
  imports: [LostModule, PassportModule],
  exports: [AuthService, SSOStrategy],
  providers: [AuthService, SSOStrategy]
})
export class AuthModule {}
