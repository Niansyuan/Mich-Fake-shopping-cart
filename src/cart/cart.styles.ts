import styled from "styled-components";

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width:500px;
    padding:20px;
    .cartItemList {
        margin-bottom: 50px;
    };
    .totalPrice {
        position: fixed;
        bottom: 0;
        z-index: 100;
        background-color: white;
        width: 100%;
    };
`;