import { Link } from "react-router-dom";

export default function Header(){
return(
    <header>
        <nav>
       <ul>
        <li><Link to="/produto">Produtos</Link></li>
        <li><Link to="/oferta">Ofertas</Link></li>
       </ul>
       </nav>
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