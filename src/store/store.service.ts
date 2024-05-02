import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { RedisService } from 'src/common/redis/redis.service';

@Injectable()
export class StoreService {
  constructor(private RedisService: RedisService) {}

  setValue = <T>(key: string, value: T) => {
    return this.RedisService.setJson(key, value);
  };

  getValue = async (key: string) => {
    const value = await this.RedisService.getJson(key);
    if (_.isNull(value))
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return value;
  };
}
