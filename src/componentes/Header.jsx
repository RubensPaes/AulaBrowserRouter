import { Link } from "react-router-dom";
import '../global.css'
export default function Header(){
return(
    <header className="cabeça">
        <nav className="navbar">
       <ul className="listinhas">
       <li>
            <div className="divdoheader"></div>
            </li>
       <li className="lin"><Link to="/" className="linhinha">Jadson Carros</Link></li>
       <li className="lin"><Link to="/" className="linhinha">Home</Link></li>
        <li className="lin"><Link to="/produto" className="linhinha">Produtos</Link></li>
        <li className="lin"><Link to="/oferta" className="linhinha">Ofertas</Link></li>
       </ul>
       </nav>
    </header>
)
}

