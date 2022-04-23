import React from 'react';
import { Link } from 'react-router-dom';
import style from './Produtos.module.css';

const Produtos = (props) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  // console.log(produtos);

  if (produtos === null) return null;
  return (
    <section className={`${style.produto} animeLeft`}>
      {produtos.map((item) => (
        <Link to={`produto/${item.id}`} key={item.id}>
          <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
          <h1 className={style.nome}>{item.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
