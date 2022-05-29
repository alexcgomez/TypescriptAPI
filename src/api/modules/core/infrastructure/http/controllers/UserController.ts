import { HTTPResponse } from '../responses/HttpStandardResponses/HTTPResponse';
import { SuccessResponse } from '../responses/HttpStandardResponses/SuccessResponse';
import { UserResource } from '../responses/UserResource';
import { GetUsersUseCase } from '../../../application/useCases/GetUsersUseCase';

class UserController {

  constructor(private getUsersUseCase: GetUsersUseCase) {
  }

  getUsers(): HTTPResponse {
    const users = this.getUsersUseCase.execute();
    return new SuccessResponse(users.map(UserResource.fromEntity));
  }
}

export const userController = new UserController();