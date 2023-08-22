import {
  BeforeInsert,
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hashSync } from "bcryptjs";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted-at' })
  deletedAt: string;

  @BeforeInsert()
  hashPassword() {
        this.password = hashSync(this.password, 10);
  }

  constructor(user?: Partial<User>) {
      this.id = user?.id;
      this.name = user?.name;
      this.email = user?.email;
      this.password = user?.password;
      this. isActive = user?. isActive;
      this.isAdmin = user?.isAdmin;
      this.createdAt = user?.createdAt;
      this.deletedAt = user?.deletedAt;
  }
}
