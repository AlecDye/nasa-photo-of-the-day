import React from "react";
import styled from "styled-components";

const SpaceHeader = styled.header`
    max-width: 100%;
    padding-top: 1.6rem;
    padding-bottom: 0.4rem;
    background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
    color: white;
    opacity: 0.8;
`;

const HeaderBar = () => {
    return (
        <SpaceHeader>
            <h1>NASA's Photo of the Day</h1>
        </SpaceHeader>
    );
}

export default HeaderBar;