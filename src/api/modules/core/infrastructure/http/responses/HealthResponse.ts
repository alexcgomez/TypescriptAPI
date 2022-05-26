import { BaseResponse } from './BaseResponse';

export class HealthResponse implements BaseResponse {
  public status: number;
  public message: string;
  public data: Record<string, unknown>;

  constructor( status: number, message: string, data: Record<string, unknown> = {}) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}