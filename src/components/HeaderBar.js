import React from "react";
import styled from "styled-components";

const SpaceHeader = styled.header`
    max-width: 100%;
    padding-top: 1.6rem;
    padding-bottom: 0.4rem;
    position: absolute;
    top: 0;
`;

const HeaderBar = () => {
    return (
        <SpaceHeader>
            <h1>NASA's Photo of the Day</h1>
        </SpaceHeader>
    );
}

export default HeaderBar;