import React from "react";

// setting up structure
const ContentItem = props => {
    console.log(props);
    return (
        <div className="image-warpper">
            <img
                alt=""
                className="image-of-space"
                src={props.url}
            />
            <div className="image-text">
                <h2>{props.title}</h2>
                <p>Courtesy: {props.copyright}</p>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default ContentItem;