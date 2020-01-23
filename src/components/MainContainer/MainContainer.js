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
                console.log(response)
                setPhoto(response.data)
            })
            .catch(error => {
                console.log("Data not returning", error)
            })
    }, []);
    //TODO: pass data into TextCard
    return (
        <div className="image-wrapper">
            <TextCard />
        </div>
    );
}
