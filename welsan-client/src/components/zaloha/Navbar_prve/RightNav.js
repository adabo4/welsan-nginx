import { Link } from 'react-router-dom' ;
import styled from 'styled-components';


const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
align-items: center;

li{
    margin: 0 1rem;
}
 
/* --- toto je modra vec co sa vysunie --- */
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    min-height: 100vh;
    min-width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    

    li {
    margin: 1rem;
    font-size: 1em;    
}
    
  }

  
`;

const RightNav = ({ open }) =>{

    const style = {
        textDecoration: "none",

    }

    return(
        <div>
            <Ul open={ open }>
                    <li className="home"><Link to="/" style={style}>Domov</Link></li>
                    <li><Link to="/o-kurzoch" style={style}>O Kurzoch</Link></li>
                    <li><Link to="/firemne-kurzy" style={style}>Firemné kurzy</Link></li>
                    <li><Link to="/kde" style={style}>Kde nás nájdete</Link></li>
                    <li><Link to="/tlmocenie" style={style}>Tlmočenie a preklady</Link></li>
                    <li><Link to="/blog" style={style}>Blog</Link></li>
                </Ul>


        </div>
    )
}

export default RightNav;