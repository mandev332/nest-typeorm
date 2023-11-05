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
import { CreateStayInput } from './dto/create-stay.input';
import { UpdateStayInput } from './dto/update-stay.input';
import { StaysService } from './stays.service';

@ApiBearerAuth()
@ApiTags('Events')
@Controller('events')
export class StaysController {
  constructor(readonly service: StaysService) {}

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
  @ApiBody({ type: CreateStayInput })
  post(@Body() stay: CreateStayInput) {
    return this.service.create(stay);
  }

  @Put(':_id')
  putUser(@Param() id: number, @Body() stay: UpdateStayInput) {
    return this.service.update(id, stay);
  }
  @Delete(':_id')
  deleteUser(@Param() id: number) {
    return this.service.remove(id);
  }
}
