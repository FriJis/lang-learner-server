import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class StoreService {
  constructor(private RedisService: RedisService) {}

  setValue = <T>(key: string, value: T) => {
    return this.RedisService.setJson(key, value);
  };

  getValue = (key: string) => {
    return this.RedisService.getJson(key);
  };
}
