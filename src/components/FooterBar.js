import React from "react";
import styled from "styled-components";

const SpaceFooter = styled.footer`
    position: absolute;
    bottom: 0;
    padding-top: 0.6rem;
    padding-bottom: 1.4rem;
    font-size: 0.8rem;
`;

const FooterBar = props => {
    return (
        <SpaceFooter>
            <p>All images provided by NASA. Images belong to original copyright holders.</p>
        </SpaceFooter>
    );
}

export default FooterBar;