export interface BaseResponse {
  data: Record<string, unknown>;
  message: string;
  status: number;
}