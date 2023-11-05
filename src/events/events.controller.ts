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
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { EventsService } from './events.service';

@ApiBearerAuth()
@ApiTags('Stays')
@Controller('stays')
export class EventsController {
  constructor(readonly service: EventsService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUser() {
    return this.service.findAll();
  }

  @Get(':_id')
  getUserId(@Param() id: number) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateEventInput })
  post(@Body() event: CreateEventInput) {
    return this.service.create(event);
  }

  @Put(':_id')
  putUser(@Param() id: number, @Body() event: UpdateEventInput) {
    return this.service.update(id, event);
  }
  @Delete(':_id')
  deleteUser(@Param() id: number) {
    return this.service.remove(id);
  }
}
