export interface BaseRepository<T> {
  find(): Promise<T[]>;
}