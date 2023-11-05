import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(readonly service: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUser() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getUserId(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  putUser(@Param('id') id: number, @Body() user: User) {
    return this.service.update(id, user);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
