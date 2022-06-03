import { HTTPResponse } from '../responses/HttpStandardResponses/HTTPResponse';
import { SuccessResponse } from '../responses/HttpStandardResponses/SuccessResponse';
import { UserResource } from '../responses/UserResource';
import { GetUsersUseCase } from '../../../application/useCases/GetUsersUseCase';
import { MysqlUserRepository } from '../../persistance/mysql/repositories/MysqlUserRepository';

class UserController {

  constructor(private getUsersUseCase: GetUsersUseCase) {
  }

  async getUsers(): Promise<HTTPResponse> {
    const users = await this.getUsersUseCase.execute();
    return new SuccessResponse(users.map(UserResource.fromEntity));
  }
}

export const userController = new UserController(new GetUsersUseCase(new MysqlUserRepository()));