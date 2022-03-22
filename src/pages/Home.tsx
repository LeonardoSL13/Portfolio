import { NavButton } from "../components/NavButton";

export function Home(){
  return (
    <div className="grid">

    <nav className="menu">         
    <NavButton text="Skills" img="../img/icons8-código-64.png" page="skills"/>
    <NavButton text="formação" img="../img/icons8-documento-64.png" page="formacao"/>
    <NavButton text="Contato" img="../img/icons8-contatos-64.png" page="contato"/>
    </nav>

    <div className="foto">
      <img className="img-profile" src="img/imagen3.jpg" />
    </div>
    <div className="nome">
      <h1>Leonardo Lopes</h1>
    </div>
    <div className="idade">
      <h3>22 Anos</h3>
      <h5>Desenvolvedor full stack</h5>
    </div>
  </div>
);
}
