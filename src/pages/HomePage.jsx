import Header from "../components/Header";
import styled from 'styled-components'

import {
    PageContainer,
    Title,
    Subtitle,
    Paragraph,
    Highlight,
} from "../components/AboutPageContainer";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    a {
        padding: 0.5rem 1rem;
        background: linear-gradient(
        150deg,
        #f6bed9 0%,
        #ff69b4 100%
    );

        border-radius: 5px;
        margin-top: 1rem;
        text-decoration: none;
        color: black;
    }

    a:hover {
        transition: all 0.1s ease-in-out;
        scale: 1.1;
    }
`

const Homepage = () => {
    return ( 
        <>
            <Header/>

            <Title>HomePage</Title>
            
            <Subtitle>
                Welcome to MealsAPI - Come Out and Savor the Flavor!
            </Subtitle>


            <Div>
                <a href="https://meals.nerdshub.dk/api/meals" target="_blank">Link to API </a>
                <a href="https://github.com/sanderMarcusChristensen/SP2-Meals" target="_blank">Link to github</a>
            </Div>
        </>
     );
}
 
export default Homepage;