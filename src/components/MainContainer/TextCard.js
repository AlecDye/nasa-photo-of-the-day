import React from "react";
import styled from "styled-components";



const TextCard = props => {
    // console.log(props);
    return (
        <div className="text-card">
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            <p>Courtesy of {props.copyright}</p>
        </div>
    );
}

export default TextCard;