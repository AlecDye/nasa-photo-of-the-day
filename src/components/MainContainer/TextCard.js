import React, { useState } from "react";
import styled from "styled-components";

const TextCardContainer = styled.div`
    width: 40%;
    height: auto;
    backdrop-filter: blur(1px);
    border-radius: 25px;
    position: absolute;
    bottom: 10rem; right 10rem;
`;

const ImageTitle = styled.h2`
    font-size: 2rem;
`;

const TextDescription = styled.p`
    font-size: 1rem;
    line-spacing: 1.6px;
`;

const TextCard = props => {
    // console.log(props);
    return (
        <TextCardContainer className="text-card">
            <ImageTitle>{props.title}</ImageTitle>
            <TextDescription>{props.explanation}</TextDescription>
            <p>Courtesy of {props.copyright}</p>
        </TextCardContainer>
    );
}

export default TextCard;