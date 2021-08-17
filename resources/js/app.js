import React from 'react';
import ReactDOM from 'react-dom';
import Router from '.';
import '../css/app.css';

function App() {
    return (
        <div>
            <Router/>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
