import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    justify-items: space-between;
    border-bottom: 1px solid grey;
    padding-bottom: 20px;
    div {
        flex: 1;
    };
    .ItemInfo,.cartItemButtons {
        display: flex;
        justify-content: space-between;
    };
    img {
        max-width: 100px;
        object-fit: cover;
        margin: 40px 0 0 40px;
    };
`;