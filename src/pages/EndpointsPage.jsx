import HeaderComp from "../components/Header";
import { Title,Subtitle,Middletitle } from "../components/AboutPageContainer";
import { StyledTable, StyledCell, StyledRow ,StyledHeaderCell ,StyledHeaderRow } from "../components/Endpoints";


const EndpointsPage = () => {
    return ( 
        <>
        <HeaderComp />
        <Title>API Endpoints</Title>

        <Middletitle>Meals Endpoints</Middletitle>
        <StyledTable>
            <thead>
                <StyledHeaderRow>
                    <StyledHeaderCell>Method</StyledHeaderCell>
                    <StyledHeaderCell>URL</StyledHeaderCell>
                    <StyledHeaderCell>Request Body</StyledHeaderCell>
                    <StyledHeaderCell>Response</StyledHeaderCell>
                    <StyledHeaderCell>Errors</StyledHeaderCell>
                </StyledHeaderRow>
            </thead>
            <tbody>
                <StyledRow>
                    <StyledCell>GET</StyledCell>
                    <StyledCell>api/meals</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>meals1, meals2, ...</StyledCell>
                    <StyledCell>2, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>GET</StyledCell>
                    <StyledCell>api/meals/id</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>meal(id)</StyledCell>
                    <StyledCell>1, 2, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>GET</StyledCell>
                    <StyledCell>api/meals/under25</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>All meals with under 25 min prep time</StyledCell>
                    <StyledCell>2, 5 </StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>GET</StyledCell>
                    <StyledCell>api/meals/over25</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>All meals with over 25 min prep time</StyledCell>
                    <StyledCell>2, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>POST</StyledCell>
                    <StyledCell>api/meals</StyledCell>
                    <StyledCell>title: String, prepTime: int</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>1, 3, 4, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>PUT</StyledCell>
                    <StyledCell>api/meals/id</StyledCell>
                    <StyledCell>title: String</StyledCell>
                    <StyledCell>meals(id)</StyledCell>
                    <StyledCell>1, 2, 3, 4, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>DELETE</StyledCell>
                    <StyledCell>api/meals/id</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>1, 2, 3, 5</StyledCell>
                </StyledRow>
                
            </tbody>
        </StyledTable>

        <Middletitle>Ingredients Endpoints</Middletitle>
        <StyledTable>
            <thead>
                <StyledHeaderRow>
                    <StyledHeaderCell>Method</StyledHeaderCell>
                    <StyledHeaderCell>URL</StyledHeaderCell>
                    <StyledHeaderCell>Request Body</StyledHeaderCell>
                    <StyledHeaderCell>Response</StyledHeaderCell>
                    <StyledHeaderCell>Errors</StyledHeaderCell>
                </StyledHeaderRow>
            </thead>
            <tbody>
                <StyledRow>
                    <StyledCell>GET</StyledCell>
                    <StyledCell>api/ingredients</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>ingredients1, ingredients2, ...</StyledCell>
                    <StyledCell>2, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>GET</StyledCell>
                    <StyledCell>api/ingredients/id</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>ingredients(id)</StyledCell>
                    <StyledCell>1, 2, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>POST</StyledCell>
                    <StyledCell>api/ingredients</StyledCell>
                    <StyledCell>title: String</StyledCell>
                    <StyledCell></StyledCell>
                    <StyledCell>1, 3, 4, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>PUT</StyledCell>
                    <StyledCell>api/ingredients/id</StyledCell>
                    <StyledCell>title: String</StyledCell>
                    <StyledCell></StyledCell>
                    <StyledCell>1, 2, 3, 4, 5</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>DELETE</StyledCell>
                    <StyledCell>api/ingredients/id</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>-</StyledCell>
                    <StyledCell>1, 2, 3, 5</StyledCell>
                </StyledRow>
                
            </tbody>
        </StyledTable>

        <Middletitle>Error Codes</Middletitle>
        <StyledTable>
            <thead>
                <StyledHeaderRow>
                    <StyledHeaderCell>Error Code</StyledHeaderCell>
                    <StyledHeaderCell>Description</StyledHeaderCell>
                </StyledHeaderRow>
            </thead>
            <tbody>
            <StyledRow>
                    <StyledCell>1. 400 Bad request</StyledCell>
                    <StyledCell>The request was malformed or contained invalid parameters.</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>2. 404 Not Found</StyledCell>
                    <StyledCell>The requested resource could not be found.</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>3. 401 Unauthorized</StyledCell>
                    <StyledCell>The request requires user authentication and the user has not provided valid credentials.</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>4. 409 Already exists</StyledCell>
                    <StyledCell>A resource with the provided details already exists (e.g., username, email, or meal name).</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>5. 500 Server error</StyledCell>
                    <StyledCell>An unexpected error occurred on the server, which may be due to issues in the backend processing.</StyledCell>
                </StyledRow>
                
            </tbody>
        </StyledTable>

        <Subtitle>MEALS FORMAT</Subtitle>
        <p>id: Long</p>
        <p>title: String</p>
        <p>description: String</p>
        <p>instructions: String</p>
        <p>Preptime: Double</p>
        <p>Rating: Double</p>
    </>
     );
}
 
export default EndpointsPage;