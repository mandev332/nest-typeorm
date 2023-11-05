import { Events } from 'src/events/entities/event.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity()
export class Stays {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  place: number;

  // @ManyToOne(() => User, (user) => user.id, { cascade: true })
  // @JoinTable()
  @Column({ nullable: false })
  user_id: number;

  // @ManyToOne(() => Events, (event) => event.id, { cascade: true })
  // @JoinTable()
  @Column({ nullable: false })
  event_id: number;

  @Column({ name: 'created_at', type: 'timestamp', default: new Date() })
  create_at: Date;
}
