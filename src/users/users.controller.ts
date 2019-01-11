import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { IdeaDto } from 'src/ideas/idea.dto';

@Controller()
export class UsersController {
  constructor(
    private userService: UsersService,
  ) {}

  @Get('users')
  showAll() {
    return this.userService.showAll();
  }

  @Post('login')
  login(@Body() data: IdeaDto) {
    return this.userService.login(data);
  }

  @Post('register')
  register(@Body() data: IdeaDto) {
    return this.userService.create(data);
  }
}
