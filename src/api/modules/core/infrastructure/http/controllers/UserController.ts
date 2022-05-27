import { HTTPResponse } from '../responses/HttpStandardResponses/HTTPResponse';
import { SuccessResponse } from '../responses/HttpStandardResponses/SuccessResponse';
import { User } from '../../../domain/entities/User';
import { database } from '../../persistance/mysql/data-source';
import { UserResource } from '../responses/UserResource';

class UserController {
   async getUsers(): Promise<HTTPResponse>  {
    const users = await database.getRepository(User).find();
    return new SuccessResponse(users.map(UserResource.fromEntity));
  }
}

export const userController = new UserController();