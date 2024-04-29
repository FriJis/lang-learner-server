import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [RedisModule],
})
export class StoreModule {}
