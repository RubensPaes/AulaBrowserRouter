import Header from "../componentes/Header";
import ListarProdutos from "../componentes/ListarProdutos";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css'

export default function Home(){

  const [listaCarros, setCarros] = useState([
    {id: 1, nome: "Fusca", preço: "R$: 50000,00", cor: "preto", imagem: "/fusca.jpeg", especificações: ["modelo: Fusca 1300", "motor: 1300", "combustivel: gasolina"]},
    {id: 2, nome: "Del Rey", preço: "R$: 60000,00", cor: "vermelho", imagem: "/fusca.jpeg", especificações: ["modelo: Delrey guia", "motor: AP 1.8", "combustivel: gasolina"] },
    {id: 3, nome: "Opala", preço: "R$: 54000,00", cor: "branco", imagem: "/fusca.jpeg", especificações: ["modelo: Opala Diplomata 4.1", "motor: 8 por 1", "combustivel: gasolina"]},
    {id: 4, nome: "uno duas portas", preço: "R$: 100000,00", imagem: "/fusca.jpeg", ano: 2009, especificações: ["modelo: Uno Mille", "motor: 1.0", "combustivel: gasolina e álcoo"] },
    {id: 5, nome: "Brasilia Amarela", preço: "R$: 35000,00", imagem: "/fusca.jpeg", ano: 1979, especificações: ["modelo: Volkswagen Brasilia", "motor: 1.6L", "combustivel: gasolina"] }
    ])


    return(
        <>
           <Header/>
        <Carousel
        infiniteLoop
        useKeyboardArrows
        interval={3000}
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >
             <div>
        <img src='/carroparacarousel3.jpeg' alt="imagem 1"/>
        </div>
      <div>
      <img src='/carroparacarousel2.jpeg' alt="imagem 2"/>
      </div>
      <div>
      <img src='/carroparacarousel4.jpeg' alt="imagem 3"/>
      </div>
        </Carousel>
        <div className="carroprincipal">
        <div className="carrodosprodutos">
            {listaCarros.map((Carros) => (
                <ListarProdutos
                    imagem={Carros.imagem}
                    nome={Carros.nome}
                    preço={Carros.preço}
                />
            ))}
        </div>
    </div>

        </>
    )
}