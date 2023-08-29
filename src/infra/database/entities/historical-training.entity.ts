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

    @Column({ name: 'member_id'})
    memberId: string;

    @ManyToOne(() => Member)
    @JoinColumn({ name: "member_id"})
    member: Member;

    @Column({ name: 'training_id' })
    trainingId: string;

    @ManyToOne(() => Training)
    @JoinColumn({ name: "training_id"})
    training: Training;

    @Column({ name: 'realization_date'})
    realizationDate: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
