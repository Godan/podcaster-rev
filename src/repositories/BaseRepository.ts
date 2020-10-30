import sqlite3, { Database } from 'sqlite3';
const DB_PATH = 'database/podcaster.db'

export default class BaseRepository {
  db: Database;

  constructor() {
    this.db = new sqlite3.Database(DB_PATH);
  }
}
