import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndpointModule } from './endpoint/endpoint.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TaskModule } from './task/task.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EndpointModule, TypeOrmModule.forRoot(typeOrmConfig), TaskModule],
})
export class AppModule {}
