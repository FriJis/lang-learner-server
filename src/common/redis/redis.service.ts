import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis';
import json from '@redis/json';

const client = createClient({ modules: { json }, socket: { host: 'redis' } });

@Injectable()
export class RedisService implements OnModuleInit {
  client = client;

  onModuleInit = async () => {
    await this.client.connect();
  };

  setJson = <T extends Record<string, any>>(key: string, value: T) => {
    return this.client.json.set(key, '$', value);
  };

  getJson = <T>(key: string) => {
    return this.client.json.get(key) as Promise<T>;
  };
}
