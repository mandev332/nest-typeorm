import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StaysService } from './stays.service';
import { CreateStayInput } from './dto/create-stay.input';
import { UpdateStayInput } from './dto/update-stay.input';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import { EventsService } from 'src/events/events.service';

@Resolver('Stay')
export class StaysResolver {
  constructor(
    private readonly userService: UserService,
    private readonly eventService: EventsService,
    private readonly staysService: StaysService,
  ) {}

  @Mutation('createStay')
  create(@Args('createStayInput') createStayInput: CreateStayInput) {
    return this.staysService.create(createStayInput);
  }
  @Query('stay')
  findOne(@Args('id') id: number) {
    return this.staysService.findOne(id);
  }

  @Query('stays')
  async findAll() {
    return await this.staysService.findAll();
  }

  @ResolveField('user')
  user(@Parent() user) {
    const { user_id } = user;
    return this.userService.findOne(user_id);
  }
  @ResolveField('event')
  event(@Parent() event) {
    const { event_id } = event;
    return this.eventService.findOne(event_id);
  }

  @Mutation('updateStay')
  update(@Args('updateStayInput') updateStayInput: UpdateStayInput) {
    return this.staysService.update(updateStayInput.id, updateStayInput);
  }

  @Mutation('removeStay')
  remove(@Args('id') id: number) {
    return this.staysService.remove(id);
  }
}
