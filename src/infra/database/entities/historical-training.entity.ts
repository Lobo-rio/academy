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
import { Training } from './training.entity';

@Entity({ name: 'historical_training' })
export class HistoricalTraining {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'member-id'})
    memberId: string;

    @ManyToOne(() => Member)
    @JoinColumn({ name: "member-id"})
    member: Member;

    @Column({ name: 'training-id' })
    trainingId: string;

    @ManyToOne(() => Training)
    @JoinColumn({ name: "training-id"})
    training: Training;

    @Column({ name: 'realization-date'})
    realizationDate: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
