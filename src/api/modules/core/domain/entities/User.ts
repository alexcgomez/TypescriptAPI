import { Column, Entity } from 'typeorm';
import { EntityBase } from './EntityBase';

@Entity()
export class User extends EntityBase {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}