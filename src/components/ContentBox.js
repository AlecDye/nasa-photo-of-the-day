import React, { useState, useEffect } from "react";
// importing ContentItem
import ContentItem from "./ContentItem";
// importing API
import axios from "axios";

// defining useState within function
export default function ContentBox() {
    const [photo, setPhoto] = useState([]);

    // getting data from API via useEffect
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=rdr7WYjvlFpC9nENENEnOhGPPhA68JaPpIch5Q6l")
            .then(response => {
                // console.log(response)
                setPhoto(response.data);
            })
            .catch(error => {
                console.log("Data is not returning", error)
            });
    }, []);
    return (
        <div className="photo">
            <ContentItem
                url={photo.url}
                title={photo.title}
                explanation={photo.explanation}
                copyright={photo.copyright}
            />
        </div>
    );
}
