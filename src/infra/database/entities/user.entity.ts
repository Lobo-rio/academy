import {
  BeforeInsert,
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hashSync } from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column({ name: 'is_active' })
  @ApiProperty()
  isActive: boolean;

  @Column({ name: 'is_admin' })
  @ApiProperty()
  isAdmin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted-at' })
  @ApiProperty()
  deletedAt: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
