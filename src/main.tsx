import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@src/App';
import SuspenseUntilReady from './components/SuspenseUntilReady';
import { IndexedDBClient } from './indexedDBClient';
import DarkThemeProvider from './providers/DarkThemeProvider';
import { dbName, tableName } from './utils/constants';
import './index.css';

export var indexDBClient: IndexedDBClient;

function Client() {
  return (
    <StrictMode>
      <SuspenseUntilReady
        asyncFn={async () => {
          indexDBClient = new IndexedDBClient(dbName, tableName);

          await indexDBClient.init();
        }}
      >
        <BrowserRouter>
          <DarkThemeProvider>
            <App />
          </DarkThemeProvider>
        </BrowserRouter>
      </SuspenseUntilReady>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(<Client />);
