import React, { useEffect } from 'react';

import challengesQuery from "./query/challengesQuery";
import './App.css';

function App() {
    useEffect(() => {
        fetch('https://graph.brokee.io/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(challengesQuery.getChllenges),
        })
            .then(response => response.json())
            .then(data => console.log(data.data.tests))
    },[]);

    return (
        <div className="App">
            Hello
        </div>
    );
}

export default App;
