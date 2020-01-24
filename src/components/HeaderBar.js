import React from "react";
import styled from "styled-components";

const SpaceHeader = styled.header`
    position: absolute;
    top: 0;
    padding-top: 1rem;
    padding-bottom: 0.4rem;
    font-size: 1.3rem;
`;

const HeaderBar = () => {
    return (
        <SpaceHeader>
            <h1>NASA's Photo of the Day</h1>
        </SpaceHeader >
    );
}

export default HeaderBar;