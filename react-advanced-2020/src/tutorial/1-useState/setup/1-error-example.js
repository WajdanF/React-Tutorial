import React, { useState } from "react";

const ErrorExample = () => {
      [title, setTitle] = useState("Random Title");

    const handleClick = () => {
        setTitle("LOL");
    };
    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>
                Change Title
            </button>
        </>
    );
};

export default ErrorExample;
