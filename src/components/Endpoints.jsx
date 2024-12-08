import styled from "styled-components";
export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1rem;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledHeaderRow = styled.tr`
    background-color: #f4f4f4;
    border-bottom: 2px solid #ddd;
`;

export const StyledHeaderCell = styled.th`
    padding: 12px 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
`;

export const StyledRow = styled.tr`
    border-bottom: 1px solid #ddd;

    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;

export const StyledCell = styled.td`
    padding: 12px 15px;
    color: #555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;