export interface BaseRepository<T> {
  find(): T[];
}