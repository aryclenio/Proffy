import React from "react";

import whastappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.scss";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/31252524?s=460&u=b6f6cd13a76ffeb22f8af139e2e113f34bf4d023&v=4"
          alt="Aryclenio Barros"
        />
        <div>
          <strong>Aryclenio Barros</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de programação avançada.
        <br />
        <br />
        Apaixonado por programar quando o código roda normalmente,
        e hater da programação quando ele não roda por causa de um ponto e vírgula.
        Me contrata por favor, a crise tá grande!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;