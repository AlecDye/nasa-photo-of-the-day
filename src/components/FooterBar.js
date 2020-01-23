import React from "react";
import styled from "styled-components";

const SpaceFooter = styled.footer`
    max-width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 1.6rem;
`;

const FooterBar = props => {
    return (
        <SpaceFooter>
            <p>All images provided by NASA. Images belong to original copyright holders.</p>
        </SpaceFooter>
    );
}

export default FooterBar;