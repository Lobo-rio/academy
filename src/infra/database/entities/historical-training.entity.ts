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

    @Column()
    membersId: string;

    @Column()
    trainingId: string;

    @Column()
    realizationDate: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
