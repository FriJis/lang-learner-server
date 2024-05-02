import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { PasswordGuard } from 'src/common/guards/password/password.guard';
import { ConfigService } from '@nestjs/config';

@Controller('api/store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('/')
  @UseGuards(PasswordGuard)
  setState(@Body() body: { key: string; value: any }) {
    return this.storeService.setValue(body.key, body.value);
  }

  @Get('/:key')
  @UseGuards(PasswordGuard)
  getState(@Param('key') key: string) {
    try {
      return this.storeService.getValue(key);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
