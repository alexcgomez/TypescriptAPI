import { Repository } from './Repository';
import { User } from '../entities/User';

export interface UserRepository extends Repository<User>{
  findByFirstName(firstName: string): Promise<User[]>;
}