import { Link } from "react-router";
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 0;

    li {
        padding: 0 1rem;
        text-decoration: none;
        font-style: bold;
        cursor: pointer;
    }
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
`


const HeaderComp = () => {


    return ( 
        <Header>
            <Link to="/*"><img src="" alt="Meals logo" /></Link>

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