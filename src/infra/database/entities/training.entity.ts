import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Member } from './member.entity';

@Entity({ name: 'trainings' })
export class Training {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'member_id', type: 'uuid' })
    memberId: string;

    @ManyToOne(() => Member)
    @JoinColumn({ name: "member_id"})
    members: Member;

    @Column({ name: 'realization_date' })
    realizationDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
