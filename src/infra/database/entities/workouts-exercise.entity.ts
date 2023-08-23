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

import { Training } from './training.entity';
import { Exercise } from './exercise.entity';

@Entity({ name: 'workouts_exercises' })
export class WorkoutsExercise {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'training-id' })
    trainingId: string;

    @ManyToOne(() => Training)
    @JoinColumn({ name: "training-id"})
    training: Training;

    @Column({ name: 'exercise-id' })
    exerciseId: string;

    @ManyToOne(() => Exercise)
    @JoinColumn({ name: "exercise-id"})
    exercise: Exercise;

    @Column()
    series: number;

    @Column()
    repetitions: number;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
