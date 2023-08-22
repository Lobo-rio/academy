import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'workouts_exercises' })
export class WorkoutsExercise {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    trainingId: string;

    @Column()
    exercisesId: string;

    @Column()
    series: number;

    @Column()
    repetitions: number;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
