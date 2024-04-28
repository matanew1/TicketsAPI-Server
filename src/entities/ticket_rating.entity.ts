import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ticket } from './tickets.entity'; // Assuming the Ticket entity is in the same directory

@Entity()
export class TicketRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  rating: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.ratings, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  ticket: Ticket;
}
