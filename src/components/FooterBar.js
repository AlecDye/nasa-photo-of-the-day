import React from "react";
import styled from "styled-components";

const SpaceFooter = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-top: 0.6rem;
    padding-bottom: 1.4rem;
`;

const Disclaimer = styled.p`
    font-size: 0.8rem;
    padding-left: 3rem;
    text-align: left;
`;

const FooterBar = props => {
    return (
        <SpaceFooter>
            <Disclaimer>All images provided by NASA. Images belong to original copyright holders.</Disclaimer>
        </SpaceFooter>
    );
}

export default FooterBar;