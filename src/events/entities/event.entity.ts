import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Events {
  @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  start_time: string;
  @Column()
  end_time: string;
  @Column({ default: 0 })
  check_price: number;
  @Column({ default: 100 })
  all_stay: number;
  @Column({ name: 'created_at', type: 'timestamp', default: new Date() })
  create_at: Date;
}

// export class Users implements IUsers {
//   @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
//   id!: number

//   @Column({ name: 'last_name', type: 'varchar', nullable: false })
//   name!: string

//   @Column({ type: 'varchar', unique: true, nullable: false })
//   email!: string

//   @Column({ type: 'varchar', unique: true, unsigned: true, nullable: false })
//   phone!: string

//   @Column({ type: 'varchar', nullable: false })
//   password!: string

//   @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: new Date() })
//   createdAt?: Date

//   @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: new Date() })
//   updatedAt?: Date

//   @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
//   deletedAt?: Date

//   @BeforeInsert()
//   protected beforeInserthashPassword() {
//     this.password = Bcrypt.hashPassword(this.password)
//   }

//   @BeforeUpdate()
//   protected beforeUpdateHashPassword() {
//     this.password = Bcrypt.hashPassword(this.password)
//   }

//   @ManyToOne(() => Roles, (relation) => relation.users, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'role_id' })
//   role: Roles
// }

// class DatabaseRelations {
//   @ManyToOne(() => Roles, (relation) => relation.users, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'role_id' })
//   role: Roles
// }

// class DatabaseSchema extends DatabaseRelations {
//   @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
//   id!: number

//   @Column({ name: 'last_name', type: 'varchar', nullable: false })
//   name!: string

//   @Column({ type: 'varchar', unique: true, nullable: false })
//   email!: string

//   @Column({ type: 'varchar', unique: true, unsigned: true, nullable: false })
//   phone!: string

//   @Column({ type: 'varchar', nullable: false })
//   password!: string

//   @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: new Date() })
//   createdAt?: Date

//   @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: new Date() })
//   updatedAt?: Date

//   @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
//   deletedAt?: Date
// }

// class DatabaseHooks extends DatabaseSchema {
//   @BeforeInsert()
//   protected beforeInserthashPassword() {
//     this.password = Bcrypt.hashPassword(this.password)
//   }

//   @BeforeUpdate()
//   protected beforeUpdateHashPassword() {
//     this.password = Bcrypt.hashPassword(this.password)
//   }
// }

// @Entity()
// export class Users extends DatabaseHooks implements IUsers {}
