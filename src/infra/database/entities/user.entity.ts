import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted-at' })
  deletedAt: string;
}
