import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EveModule } from './eve/eve.module';
import { LostModule } from './lost/lost.module';
import { EsiModule } from './esi/esi.module';
import { AuthModule } from './auth/auth.module';

const defaultOptions: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  autoLoadEntities: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'eve',
      database: 'lost_eve'
    }),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'data',
      database: 'lost_data'
    }),
    HttpModule,
    EveModule,
    LostModule,
    EsiModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
