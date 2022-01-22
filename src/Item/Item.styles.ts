import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    width:100%;
    height: 100%;
    border: none;
    border-radius:10px;
    word-wrap:break-word;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    button {
        border-radius: 0 0  10px 10px;
    };
    .more {
        color: #b5643f;
        border:none;
        background:none;
        :hover {
            color:#e89975;
        };
    };
    img {
        margin: 50px;
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