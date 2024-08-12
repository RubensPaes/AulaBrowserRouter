import Header from "../componentes/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../global.css'
export default function Home(){
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
        <img src='/um.gif' alt="imagem 1"/>
        </div>
      <div>
      <img src='/carouselum.jpeg' alt="imagem 2"/>
      </div>
      <div>
      <img src='/carouseltres.jpeg' alt="imagem 3"/>
      </div>
        </Carousel>
        </>
    )
}