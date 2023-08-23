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
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ name: 'date-of-birth' })
    dateOfBirth: Date;

    @Column()
    phone: string;

    @Column({ name: 'is-active' })
    isActive: boolean;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
