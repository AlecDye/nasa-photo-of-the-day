import React, { useState } from "react";
import styled from "styled-components";

const TextCardContainer = styled.div`
    border: 1px solid white;
    width: 35%;
    margin-top: 17%;
    margin-left: 60%;
`;

const ImageTitle = styled.h2`
    font-size: 2rem;
`;

const TextDescription = styled.p`
    font-size: 1.1rem;
    line-spacing: 1.6px;
`;

const Attribute = styled.p`
    font-size: 0.8rem;
    text-align: end;
    padding-right: 2rem;
`;

const TextCard = props => {
    // console.log(props);
    return (
        <TextCardContainer className="text-card">
            <ImageTitle>{props.title}</ImageTitle>
            <TextDescription>{props.explanation}</TextDescription>
            <Attribute>Photo courtesy of {props.copyright}</Attribute>
        </TextCardContainer>
    );
}

export default TextCard;