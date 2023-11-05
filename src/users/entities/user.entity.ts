import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({ unique: true, nullable: false })
  contact: string;
  @Column({ nullable: false })
  password: string;
  @Column()
  role: string;
  @Column({ nullable: true, type: 'timestamp' })
  deleted_at: Date;
  @Column({ name: 'created_at', type: 'timestamp', default: new Date() })
  create_at: Date;
}
