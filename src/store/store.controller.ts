import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('api/store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('/')
  setState(@Body() body: { key: string; value: any }) {
    return this.storeService.setValue(body.key, body.value);
  }

  @Get('/:key')
  getState(@Param('key') key: string) {
    try {
      return this.storeService.getValue(key);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
