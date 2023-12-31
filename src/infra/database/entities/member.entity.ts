import { ApiProperty } from '@nestjs/swagger';
import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'members' })
export class Member {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;
    
    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    email: string;

    @Column({ name: 'date_of_birth' })
    @ApiProperty()
    dateOfBirth: Date;

    @Column()
    @ApiProperty()
    phone: string;

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
