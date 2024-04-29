import { Injectable } from '@nestjs/common';
import { CollectionSchema } from 'schemas/collection.schema';

@Injectable()
export class AppService {
  getHello(): string {
    CollectionSchema;
    return 'Hello World!';
  }
}
