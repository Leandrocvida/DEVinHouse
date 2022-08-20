import { Footer, Header, Secao, FiltroSecao } from '@components';
import produtos from '@services/produtos.json';
import styles from './App.module.css';

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  
  
  const arraySecoes = [{ nome:'Entradas',
    produtos:produtos.entradas,
    subSecoes:subSecoesEntradas,
    },{
      nome:'Principais',
      produtos:produtos.principais,
      subSecoes:subSecoesPrincipais,
    },{
      nome:'Sobremesas',
      produtos:produtos.sobremesas,
    },
  ]
 const handleSelecionarSecao = (titSecao) => console.log(titSecao) 
  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao arraySecoes = {arraySecoes} onSelecionarSecao = {handleSelecionarSecao} />
      <main className={styles.main}>
     {arraySecoes.map((secao)=> { 
      return(
        <Secao key = {secao.nome} nome = {secao.nome} produtos = {secao.produtos} subSecoes = {secao.subSecoes? (Array.from(secao.subSecoes)) : null }/>
      )})

     }
      </main>
      <Footer />
    </div>
  );
}

export default App;
