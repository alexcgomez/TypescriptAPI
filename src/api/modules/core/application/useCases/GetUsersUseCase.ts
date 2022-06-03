import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';

export class GetUsersUseCase {
  constructor(
    private userRepository: UserRepository,
  ) {}

  execute(): Promise<User[]> {
    return this.userRepository.find();
  }
}