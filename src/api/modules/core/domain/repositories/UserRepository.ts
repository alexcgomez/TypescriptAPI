import { BaseRepository } from './BaseRepository';
import { User } from '../entities/User';

export interface UserRepository extends BaseRepository<User>{
  findByFirstName(firstName: string): Promise<User[]>;
}