import { Link } from "react-router-dom"

function Navbar() {
 
    return (
        <>
            <nav>

                    <Link to="/">Home</Link>  
                    <Link to="/contacto">Contacto</Link>
                    <p>Happy Cake</p>
            </nav>
        </>
    )
  }
  
  export default Navbar
  