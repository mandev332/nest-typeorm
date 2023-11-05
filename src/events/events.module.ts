import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './entities/event.entity';
import { EventsController } from './events.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Events])],
  providers: [EventsResolver, EventsService, JwtService],
  controllers: [EventsController],
})
export class EventsModule {}
