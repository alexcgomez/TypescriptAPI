import { BaseResponse } from '../BaseResponse';

export class SuccessResponse implements BaseResponse{

  public message: string;
  public status: number;
  public data: Record<string, unknown>;

  constructor(){
    this.status = 200;
    this.message = 'Success';
    this.data = {};
  }
}