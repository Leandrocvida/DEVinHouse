import './Botao.css';

export const Botao = () => {
  const handleClick = () => {
    const teste = prompt('Ola');
    console.log('Clicou', teste);
  };

  return (
    <button className='minhaClasse' onClick={handleClick}>
      Meu botão
    </button>
  );
};
