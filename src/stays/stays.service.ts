import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStayInput } from './dto/create-stay.input';
import { UpdateStayInput } from './dto/update-stay.input';
import { Stays } from './entities/stay.entity';

@Injectable()
export class StaysService {
  constructor(
    @InjectRepository(Stays)
    private stayRepository: Repository<Stays>,
  ) {}

  create(createStayInput: CreateStayInput) {
    return this.stayRepository.create(createStayInput);
  }

  async findAll() {
    return await this.stayRepository.find();
  }

  async findOne(id: number) {
    return await this.stayRepository.findOne({ where: { id } });
  }

  update(id: number, updateStayInput: UpdateStayInput) {
    return this.stayRepository.update(id, updateStayInput);
  }

  remove(id: number) {
    return this.stayRepository.delete(id);
  }
}
