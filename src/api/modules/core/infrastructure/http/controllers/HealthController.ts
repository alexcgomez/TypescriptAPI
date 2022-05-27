import { HTTPResponse } from '../responses/HttpStandardResponses/HTTPResponse';
import { SuccessResponse } from '../responses/HttpStandardResponses/SuccessResponse';
import { HealthResource } from '../responses/HealthResource';

class HealthController {

  getHealth(): HTTPResponse {
    return new SuccessResponse(new HealthResource(true));
  }
}

export default new HealthController();