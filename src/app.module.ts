import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntityModule } from './entity/entity.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapModule } from './map/map.module';

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
      database: 'eve_data'
    }),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'lost',
      database: 'lost'
    }),
    HttpModule,
    EntityModule,
    MapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
