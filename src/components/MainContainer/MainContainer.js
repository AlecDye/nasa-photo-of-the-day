import React, { useState, useEffect } from "react";
import TextCard from "./TextCard";
import axios from "axios";
import styled from "styled-components";

// Thank you TL Dustin for this fix!
const SpaceImage = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.imgSrc !== undefined ? props.imgSrc : null});
    background-repeat: no repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
`;

export default function MainContainer(props) {
    const [photo, setPhoto] = useState([]);

    // API request
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=rdr7WYjvlFpC9nENENEnOhGPPhA68JaPpIch5Q6l")
            .then(response => {
                // console.log(response)
                setPhoto(response.data)
            })
            .catch(error => {
                console.log("Data not returning", error)
            })
    }, []);
    return (
        <div className="main-container">
            <SpaceImage
                alt="Distant stars in space"
                className="space-photo"
                imgSrc={photo.url}
            />
            <TextCard
                title={photo.title}
                explanation={photo.explanation}
                copyright={photo.copyright}
            />
        </div>
    );
}
