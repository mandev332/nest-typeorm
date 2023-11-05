import { Module } from '@nestjs/common';
import { StaysService } from './stays.service';
import { StaysResolver } from './stays.resolver';
import { Stays } from './entities/stay.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';
import { User } from 'src/users/entities/user.entity';
import { EventsService } from 'src/events/events.service';
import { EventsResolver } from 'src/events/events.resolver';
import { Events } from 'src/events/entities/event.entity';
import { StaysController } from './stays.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Stays, User, Events])],
  providers: [
    StaysResolver,
    StaysService,
    UserService,
    UsersResolver,
    EventsService,
    EventsResolver,
    JwtService,
  ],
  controllers: [StaysController],
})
export class StaysModule {}
