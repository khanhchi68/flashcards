import React from "react";
import { useState } from "react";

const Card = ({ word, translation}) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
            <div className="card-inner">
                <div className="card-front">
                    <p>{word}</p>
                    <p>Click to reveal answer</p>
                </div>
                <div className="card-back">
                    <p>{translation}</p>
                    <p>Click to see question</p>
                </div>
            </div>
        </div>
    );
}

export default Card;