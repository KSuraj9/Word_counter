import { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');

    function handleTextChange(event) {
        setText(event.target.value);
    };

    const getWordCount = () => {
        const words = text.trim().split(/\s+/).filter(Boolean);
        return words.length;
    };

    return (
        <div className='App'>
            <h3>Responsive Paragraph Word Counter</h3>
            <textarea
                value={text}
                onChange={handleTextChange}
            />
            <p>Word Count: {getWordCount()}</p>
        </div>
    );
}


export default App;
