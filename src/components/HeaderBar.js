import React from "react";
import styled from "styled-components";

const SpaceHeader = styled.header`
    position: absolute;
    top: 0;
    margin-left: 28%;
    font-size: 1.4rem;
    padding-top: 1rem;
`;

const HeaderBar = () => {
    return (
        <SpaceHeader>
            <h1>NASA's Photo of the Day</h1>
        </SpaceHeader >
    );
}

export default HeaderBar;