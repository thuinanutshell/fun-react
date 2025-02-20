import { useState } from 'react';

const AffirmationButton = () => {
    const [quote, setQuote] = useState('You are more than enough');
    const [theme, setTheme] = useState('default')

    const handleClick = () => {
        setQuote("Believe in yourself");
        setTheme('blue');
    };

    return (
        <div>
            <button color={theme} type="button" onClick={handleClick}>
                {quote}
            </button>
        </div>
    );
};

export default AffirmationButton;