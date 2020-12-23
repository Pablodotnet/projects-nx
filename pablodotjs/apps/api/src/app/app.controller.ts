import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('')
  getWelcome() {
    return 'Hello there!';
  }

  @Get('apps')
  getAllApps() {
    return this.appService.getAllApps();
  }

  @Post('createApp')
  createApp(payload) {
    return this.appService.createApp(payload);
  }
}
