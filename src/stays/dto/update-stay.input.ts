import { CreateStayInput } from './create-stay.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStayInput extends PartialType(CreateStayInput) {
  id: number;
}
