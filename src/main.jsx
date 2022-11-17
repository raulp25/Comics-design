import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp';
import './normalize.css'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HashRouter>
      <HeroesApp />
    </HashRouter>
    
  </React.StrictMode>
);
