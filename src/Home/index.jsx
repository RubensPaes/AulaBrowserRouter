import Header from "../componentes/Header";
import { Carousel } from "react-responsive-carousel";
export default function Home(){
    return(
        <>
        <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >
        <div>
            <img src=""/>
        </div>

        </Carousel>
        <Header/>
        </>
    )
}