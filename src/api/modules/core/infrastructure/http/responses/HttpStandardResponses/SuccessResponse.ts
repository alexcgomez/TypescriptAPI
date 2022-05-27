import { HTTPResponse } from './HTTPResponse';

export class SuccessResponse implements HTTPResponse{

  constructor(public data: unknown = {},
              public message: string = 'Success',
              public status: number = 200) {

  }
}