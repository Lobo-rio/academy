import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'historical_training' })
export class HistoricalTraining {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'member-id'})
    memberId: string;

    @Column({ name: 'training-id' })
    trainingId: string;

    @Column({ name: 'realization-date'})
    realizationDate: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
