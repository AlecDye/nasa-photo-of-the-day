import React, { useState, useEffect } from "react";
// importing ContentItem
import ContentItem from "./ContentItem";
// importing API
import axios from "axios";

// defining useState within function
const ContentBox = () => {
    const [photos, setPhoto] = useState([]);

    // getting data from API via useEffect
    //! Once 
    useEffect(() => {
        axios.get(https://api.nasa.gov/planetary/apod)
    })
}