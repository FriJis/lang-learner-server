import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StoreModule } from './store/store.module';

@Module({
  imports: [StoreModule],
  controllers: [AppController],
})
export class AppModule {}
