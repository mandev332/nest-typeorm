import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Events } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private eventsRepository: Repository<Events>,
  ) {}
 async create(createEventInput: CreateEventInput) {
    return await this.eventsRepository.create(createEventInput);
  }
  
async  findAll() {
  return await this.eventsRepository.find();
}

async findOne(id: number) {
  return await this.eventsRepository.findOne({where:{id}});
}

async update(id: number, updateEventInput: UpdateEventInput) {
    return await this.eventsRepository.update(id,updateEventInput);
  }
  
 async remove(id: number) {
    return await this.eventsRepository.delete(id);
  }
}
