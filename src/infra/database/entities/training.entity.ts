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

    @Column({ name: 'member-id', type: 'uuid' })
    memberId: string;

    @ManyToOne(() => Member)
    @JoinColumn({ name: "member-id"})
    members: Member;

    @Column({ name: 'realization-date' })
    realizationDate: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
