import { useState } from 'react';

const AffirmationButton = () => {
    const quotes = [
        "You are more than enough",
        "You're getting there!",
        "Look how far you've come",
        "Be proud of yourself",
        "I can't wait to see how good your life will be when you are as confident as you should be."
    ];

    const [count, setCount] = useState(0)
    const [quote, setQuote] = useState(quotes[0]);

    const handleClick = () => {
        if (count < quotes.length) {
            setCount(count + 1)
            setQuote(quotes[count])
        } else {
        setCount(0)}
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
             {quote}
            </button>
        </div>
    );
};

export default AffirmationButton;