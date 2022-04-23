import React from 'react';
import style from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = (props) => {
  return (
    <section className={style.contato + ' animeLeft'}>
      <Head title='Ranek | Contato' description='Entre em contato.'/>
      <img src={foto} alt="maquina de escrever" />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={style.dados}>
          <li>contato@contato.com</li>
          <li>81 99999-9999</li>
          <li>Rua Ali Perto, 000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
