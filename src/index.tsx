import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './theme/ThemeProvider';
import { App } from './App';

const rootElem = document.getElementById('root');
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  );
}
