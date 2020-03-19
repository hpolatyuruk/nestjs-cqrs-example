import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { AggregateRoot } from '@nestjs/cqrs';

@Entity()
export class Endpoint extends AggregateRoot {
  private _computerName: string;

  @ObjectIdColumn()
  _id: string;

  @Column()
  computerName: string;
}
