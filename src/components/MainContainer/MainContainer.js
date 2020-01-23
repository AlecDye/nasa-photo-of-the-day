import React, { useState, useEffect } from "react";
import TextCard from "./TextCard";
import axios from "axios";

export default function MainContainer() {
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
        <div className="image-wrapper">
            <img
                alt="Distant stars in space"
                className="space-photo"
                src={photo.url}
            />
            <TextCard
                title={photo.title}
                explanation={photo.explanation}
                copyright={photo.copyright}
            />
        </div>
    );
}
