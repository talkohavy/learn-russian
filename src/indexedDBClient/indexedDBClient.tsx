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
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve(this.db);
      };

      request.onerror = (event: Event) => {
        reject(`Failed to open database: ${(event.target as IDBOpenDBRequest).error}`);
      };
    });
  }

  // RESTful Create (POST)
  async create(data: IDBData): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
        return;
      }

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      const request = store.add(data);

      request.onsuccess = () => {
        resolve(request.result as number); // Return the ID of the new entry
      };

      request.onerror = (event: Event) => {
        reject(`Create failed: ${(event.target as IDBRequest).error}`);
      };
    });
  }

  // RESTful Read (GET)
  async read(id: number): Promise<IDBData> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
        return;
      }

      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);

      const request = store.get(id);

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result as IDBData);
        } else {
          reject(`Item with id ${id} not found.`);
        }
      };

      request.onerror = (event: Event) => {
        reject(`Read failed: ${(event.target as IDBRequest).error}`);
      };
    });
  }

  // RESTful Read All (GET)
  async readAll(): Promise<IDBData[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
        return;
      }

      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);

      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result as IDBData[]);
      };

      request.onerror = (event: Event) => {
        reject(`Read all failed: ${(event.target as IDBRequest).error}`);
      };
    });
  }

  // RESTful Update (PUT)
  async update(id: number, updatedData: IDBData): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
        return;
      }

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      const request = store.put({ ...updatedData, id });

      request.onsuccess = () => {
        resolve(`Item with id ${id} updated.`);
      };

      request.onerror = (event: Event) => {
        reject(`Update failed: ${(event.target as IDBRequest).error}`);
      };
    });
  }

  // RESTful Delete (DELETE)
  async delete(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
        return;
      }

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      const request = store.delete(id);

      request.onsuccess = () => {
        resolve(`Item with id ${id} deleted.`);
      };

      request.onerror = (event: Event) => {
        reject(`Delete failed: ${(event.target as IDBRequest).error}`);
      };
    });
  }
}
