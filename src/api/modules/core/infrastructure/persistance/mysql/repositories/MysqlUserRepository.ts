import { MysqlRepository } from './MysqlRepository';
import { User } from '../../../../domain/entities/User';
import { UserRepository } from '../../../../domain/repositories/UserRepository';

export class MysqlUserRepository extends MysqlRepository<User> implements UserRepository {

  findByFirstName(firstName: string): Promise<User[]> {
    return this.repository.findBy({ firstName });
  }
}