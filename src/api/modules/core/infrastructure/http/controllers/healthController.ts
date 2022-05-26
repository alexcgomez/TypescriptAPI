import { HealthResponse } from '../responses/HealthResponse';

class HealthController {

  getHealth(): HealthResponse {
    return new HealthResponse(200, 'The API is up and running.');
  }
}

export default new HealthController();