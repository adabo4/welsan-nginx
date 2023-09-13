// ImageHighlight.js
import React, { useState } from 'react';

function ImageHighlight() {
    const [highlightStyle, setHighlightStyle] = useState({ display: 'none' });

    const handleLinkClick = (targetOffset) => {
        setHighlightStyle({
            position: 'absolute',
            top: targetOffset.top - 20 + 'px', // Adjust the positioning as needed
            left: '0',
            display: 'block',
            transition: '0.3s ease-in-out',
            border: '1px solid orange',
        });
    };

    return (
        <img
            id="highlight"
            src="bubble3.png"
            alt="Highlight Image"
            style={highlightStyle}
        />
    );
}

export default ImageHighlight;