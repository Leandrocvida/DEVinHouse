import { Footer, Header} from '@components';
import {BrowserRouter} from 'react-router-dom'
import { ProdSelecProvider } from '@contexts';
import styles from './App.module.css';
import { Router } from '@router';

function App() {

  return (
    <div className={styles.app}>
     <BrowserRouter>
        <ProdSelecProvider>
          <Header />
          <main className={styles.main}>
          <Router/>
          </main>
          <Footer />
        </ProdSelecProvider>     
     </BrowserRouter>
    </div>
  );
}

export default App;
