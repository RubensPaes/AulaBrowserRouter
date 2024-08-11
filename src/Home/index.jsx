import Header from "../componentes/Header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselum from './images/carouselum.jpeg';
import carouseldois from './images/carouseldois.jpeg';
import carouseltres from './images/carouseltres.jpeg';
import um from './images/um.gif';
import doiss from './images/doiss.gif';
export default function Home(){
    return(
        <>
        <Carousel
        infiniteLoop
        useKeyboardArrows
        interval={3000}
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        >
             <div>
        <img src={um} alt="imagem 1" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/>
        </div>
      <div>
      <img src={doiss} alt="imagem 2" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/>
      </div>
      <div>
      <img src={carouseltres} alt="imagem 3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/>
      </div>
        </Carousel>
        <Header/>
        </>
    )
}