import { HealthResponse } from '../responses/HealthResponse';

class HealthController {

  getHealth(): HealthResponse {
    return new HealthResponse();
  }
}

export default new HealthController();