import React, { useEffect, useState } from 'react';

import challengesQuery from "./query/challengesQuery";
import { TestType } from "./type/test";
import './App.css';

function App() {
    const [tests, setTests] = useState<TestType[] | null>(null);

    useEffect(() => {
        fetch('https://graph.brokee.io/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(challengesQuery.getChllenges),
        })
            .then(response => response.json())
            .then(data => setTests(data.data.tests))
    },[]);

    if (!tests) return null;

    return (
        <div className="App">
            <h1>Hello, Brokee!</h1>

            <h2>Available Tests</h2>
            <div className="available-tests-section">
                {tests.map(item => item.name)}
            </div>
        </div>
    );
}

export default App;
