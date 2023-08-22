import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'payments' })
export class Payment {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'member-id' })
    memberId: string;

    @Column({ precision: 10.2 })
    valor: number;

    @Column({ name: 'data-pagamento' })
    dataPagamento: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
