import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class User extends BaseEntity {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}