import { Link } from "react-router-dom";
import '../global.css'
export default function Header(){
return(
    <header>
        <div  className="divabar">
        <nav className="navbar">
       <ul>
        <li className="listinhas"><Link to="/produto">Produtos</Link></li>
        <li><Link to="/oferta">Ofertas</Link></li>
       </ul>
       </nav>
       </div>
    </header>
)
}

// <Link to="/">
//<p>Home</p>
//</Link>
//<Link to="/produto">
//<p>produto</p>
//</Link>
//<Link to="/oferta">
    //<p>Ofertas</p>
//</Link>