import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StoreModule } from './store/store.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [StoreModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
