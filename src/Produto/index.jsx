import React, { useState } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ListarProdutos from "../componentes/ListarProdutos";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css';

export default function Produto(){
    const [listaCarros, setCarros] = useState([
        {id: 1, nome: "Onix", preço: "R$: 90000,00", imagem: "/Onixn.jpeg", cor: "branco", especificações: [" modelo: Onix 2025 ", " motor: Turbo ", " combustivel: gasolina "]},
        {id: 2, nome: "Onix Plus", preço: "R$: 101000,00", imagem: "/OnixPlusn.jpg", cor: "vermelho", especificações: [" modelo: Onix Plus 2025 ", " motor: Turbo 1.0 12V Flex  ", " combustivel: Flex (Gasolina/Etanol) "] },
        {id: 3, nome: "Montana", preço: "R$: 130000,00", imagem: "/Montana.jpeg", cor: "vermelho", especificações: [" modelo: Montana 2025 ", " motor: Turbo ", " combustivel: gasolina "]},
        {id: 4, nome: "Spin", preço: "R$: 122000,00", imagem: "/Spin.jpeg", cor: "azul", especificações: [" modelo: Spin 2025 ", " motor: 1.0 ", " combustivel: Gasolina e álcool"] },
        {id: 5, nome: "Tracker", preço: "R$: 119000,00", imagem: "/Tracker.jpeg", cor: "cinza", especificações: [" modelo: Tracker 2025 ", " motor: 1.0 ", " combustivel: Gasolina e álcool"] },
        {id: 6, nome: "S10", preço: "R$: 250000,00", imagem: "/S10.jpeg", cor: "verde", especificações: [" modelo: S10 2025 ", " motor: 2.8 Turbo Diesel ", " combustivel: diesel"] },
        {id: 7, nome: "Equinox", preço: "R$: 227000,00", imagem: "/Equinox.jpeg", cor: "preto", especificações: [" modelo: Equinox 2025", " motor: 1.5 Turbo ", " combustivel: gasolina"] },
        {id: 8, nome: "Silverado", preço: "R$: 500000,00", imagem: "/Silverado.jpeg", cor: "branco", especificações: ["modelo: Silverado 2025", "motor: 6.2L V8", "combustivel: Gasolina"]},
        {id: 9, nome: "Camaro", preço: "R$: 532000,00", imagem: "/Camaro.jpeg", cor: "preto", especificações: ["modelo: Camaro 2024", "motor: 6.2L V8", "combustivel: gasolina"]},
        {id: 10, nome: "Blazer", preço: "R$: 285000,00", imagem: "/Blazer.jpeg", cor: "prata", especificações: ["modelo: Blazer 2025", "motor: 3.6 V6", "combustivel: Gasolina"]},
        {id: 11, nome: "Fusca(Em Oferta)", preço: "De R$: 50000,00, Por R$: 40000,00", imagem: "/fusca.jpeg", cor: "branco", especificações: [" modelo: Fusca 1300 ", " motor: 1300 ", " combustivel: gasolina "]},
        {id: 12, nome: "Del Rey(Em Oferta)", preço: "De R$: 60000,00, Por R$: 50000,00", imagem: "/imgdelrey.jpeg", cor: "vermelho", especificações: [" modelo: Delrey guia ", " motor: AP 1.8 ", " combustivel: gasolina "] },
        {id: 13, nome: "Opala(Em Oferta)", preço: "De R$: 54000,00, Por R$: 44000,00", imagem: "/opala.jpeg", cor: "branco", especificações: [" modelo: Opala Diplomata 4.1 ", " motor: 8 por 1 ", " combustivel: gasolina "]},
        {id: 14, nome: "Uno Duas Portas(Em Oferta)", preço: "De R$: 100000,00, Por R$: 90000,00", imagem: "/unod.jpeg", cor: "branco", especificações: [" modelo: Uno Mille ", " motor: 1.0 ", " combustivel: gasolina e álcoo "] },
        {id: 15, nome: "Brasilia Amarela(Em Oferta)", preço: "De R$: 35000,00, Por R$: 25000,00", imagem: "/brasilia.jpeg", cor: "amarelo", especificações: [" modelo: Volkswagen Brasilia ", " motor: 1.6L ", " combustivel: gasolina "] }
      ]);
      const [listadosCarros, setListadosCarros] = useState([]);

      const adicionarCarro = (carro) => {
        setListadosCarros([...listadosCarros, carro]);
        alert("você adicionou um carro!")
      };
    
   
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
   {listaCarros.map((carro) => (
     <ListarProdutos
       key={carro.id}
       imagem={carro.imagem}
       nome={carro.nome}
       preço={carro.preço}
       adicionarCarro={() => adicionarCarro(carro)}
     />
   ))}
 </div>
</div>
<Footer/>
</>
    );
}