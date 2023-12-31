import { ApiProperty } from '@nestjs/swagger';
import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'exercises' })
export class Exercise {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    title: string;

    @Column()
    @ApiProperty()
    description: string;

    @Column({ name: 'is_active' })
    @ApiProperty()
    isActive: boolean;

    @CreateDateColumn({ name: 'created_at' })
    @ApiProperty()
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    @ApiProperty()
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
