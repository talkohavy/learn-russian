interface IDBData {
  id?: number; // id is optional since it will be auto-generated
  [key: string]: any; // Additional properties
}

export class IndexedDBClient {
  private dbName: string;
  private storeName: string;
  private version: number;
  private db: IDBDatabase | null;

  constructor(dbName: string, storeName: string, version = 1) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.version = version;
    this.db = null;
  }

  async init(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const createTableIfDoesntExist = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const isTableAlreadyExists = db.objectStoreNames.contains(this.storeName);

        if (isTableAlreadyExists) return;

        db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
      };

      const returnDbOnSuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve(this.db);
      };

      const handleInitError = (event: Event) => {
        const { error } = event.target as IDBOpenDBRequest;
        reject(`Failed to open database: ${error}`);
      };

      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = createTableIfDoesntExist;
      request.onsuccess = returnDbOnSuccess;
      request.onerror = handleInitError;
    });
  }

  async create(data: IDBData): Promise<number> {
    return new Promise((resolve, reject) => {
      const onCreateSuccess = () => resolve(request.result as number);
      const onCreateFailure = (event: Event) => reject(`Create failed: ${(event.target as IDBRequest).error}`);

      if (!this.db) return reject('Database not initialized');

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(data);

      // Return the ID of the new entry
      request.onsuccess = onCreateSuccess;
      request.onerror = onCreateFailure;
    });
  }

  async read(id: number): Promise<IDBData> {
    return new Promise((resolve, reject) => {
      const onReadSuccess = () => {
        if (request.result) return resolve(request.result as IDBData);

        return reject(`Item with id ${id} not found.`);
      };

      const onReadFailure = (event: Event) => reject(`Read failed: ${(event.target as IDBRequest).error}`);

      if (!this.db) return reject('Database not initialized');

      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(id);

      request.onsuccess = onReadSuccess;
      request.onerror = onReadFailure;
    });
  }

  async readAll(): Promise<IDBData[]> {
    return new Promise((resolve, reject) => {
      const onReadSuccess = () => resolve(request.result as IDBData[]);
      const onReadFailure = (event: Event) => {
        const { error } = event.target as IDBRequest;
        reject(`Read all failed: ${error}`);
      };

      if (!this.db) return reject('Database not initialized');

      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = onReadSuccess;
      request.onerror = onReadFailure;
    });
  }

  async update(id: number, updatedData: IDBData): Promise<string> {
    return new Promise((resolve, reject) => {
      const onUpdateSuccess = () => resolve(`Item with id ${id} updated.`);
      const onUpdateFailure = (event: Event) => {
        const { error } = event.target as IDBRequest;
        reject(`Update failed: ${error}`);
      };

      if (!this.db) return reject('Database not initialized');

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put({ ...updatedData, id });

      request.onsuccess = onUpdateSuccess;
      request.onerror = onUpdateFailure;
    });
  }

  async delete(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const onDeleteSuccess = () => resolve(`Item with id ${id} deleted.`);
      const onDeleteFailure = (event: Event) => {
        const { error } = event.target as IDBRequest;
        reject(`Delete failed: ${error}`);
      };

      if (!this.db) return reject('Database not initialized');

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onsuccess = onDeleteSuccess;
      request.onerror = onDeleteFailure;
    });
  }
}
