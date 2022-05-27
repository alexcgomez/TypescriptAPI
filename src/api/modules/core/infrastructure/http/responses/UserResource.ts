import { User } from '../../../domain/entities/User';

export class UserResource {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public age: number,
  ) {
  }

  public static fromEntity(user: User): UserResource {
    return new UserResource(
      user.id,
      user.firstName,
      user.lastName,
      user.age,
    );
  }
}