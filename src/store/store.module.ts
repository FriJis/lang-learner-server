import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { RedisModule } from 'src/common/redis/redis.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [RedisModule, ConfigModule],
})
export class StoreModule {}
