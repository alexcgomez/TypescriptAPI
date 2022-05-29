import { UserRepository } from '../../domain/repositories/UserRepository';

export class GetUsersUseCase {
  constructor(
    private userRepository: UserRepository,
  ) {}

  execute() {
    return this.userRepository.find();
  }
}