import { Events } from 'src/events/entities/event.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateStayInput {
  id: number;
  user_id: number;
  event_id: number;
  create_at: Date;
}
