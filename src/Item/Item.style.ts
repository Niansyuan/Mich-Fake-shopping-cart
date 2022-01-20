import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    width:100%;
    height: 100%;
    border: 1px solid gray;
    border-radius:10px;
    word-wrap:break-word;
    button {
        border-radius: 0 0  10px 10px;
    };
    img {
        max-height: 250px;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
    };
    div {
        font-family:Georgia, Times, 'Times New Roman', serif;
        height: 100%;
        padding: 1rem;
    };
`;