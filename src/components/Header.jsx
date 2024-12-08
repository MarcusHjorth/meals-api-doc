import { Link } from "react-router";
import styled from 'styled-components'

const Header = styled.header`
    height: 60px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    
    padding: 10px 20px;

    img {
        height: 100%;
        width: auto;
    }
    
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    
    list-style: none;
    margin: 0;

    li {
        padding: 0 1rem 0 0;
        text-decoration: none;
        font-style: bold;
        cursor: pointer;
    }
`


const HeaderComp = () => {


    return ( 
        <Header>
            <Link to="/"><img src="../../public/mealsLogo.png" alt="Meals logo" /></Link>

            <nav>
                <Ul>
                    <Link to="/"><li>HomePage</li></Link>
                    <Link to="/vision"><li>Vision</li></Link>
                    <Link to="/endpoints"><li>Endpoints</li></Link>
                </Ul>
            </nav>
        </Header>
     );
}
 
export default HeaderComp;