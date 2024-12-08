import Header from "../components/Header";
import styled from 'styled-components'

import {
    PageContainer,
    Title,
    Subtitle,
    Paragraph,
    Highlight,
} from "../components/AboutPageContainer";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        
        img{
            margin: auto;
        }
    }
    
    img{
        width: 200px;
        height: auto;
        border-radius: 10px;
        
        margin-top: 2rem;
        margin-bottom: 2rem;
    }


    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        
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

            <Container>
                <img src="/mealsLogo.png" alt="" />

                <div>
                    <a href="https://meals.nerdshub.dk/api/meals" target="_blank">Link to API </a>
                    <a href="https://github.com/sanderMarcusChristensen/SP2-Meals" target="_blank">Link to github</a>
                </div>
            </Container>    
        </>
     );
}
 
export default Homepage;