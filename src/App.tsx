import React, { useEffect, useState } from 'react';

import challengesQuery from "./query/challengesQuery";
import TestCard from "./components/TestCard";
import { TestType } from "./type/test";
import './App.scss';

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
            <div className="feature-describe">
                <h1>Use AI Assessments summary,</h1>
                <h1>For FAST & BETTER hiring <span className="brokee-color">in BROKEE</span></h1>

                <p className="brokee-dedscription">
                    <span className="brokee-color">BROKEE</span> now uses AI for evaluating candidate performance. <br />
                    Traditional methods may be complex for non-technical team members, so AI generates concise summaries of candidate actions during tests.
                    These summaries highlight tools used and serve as performance reports for the team, aiding in identifying skilled problem solvers for IT infrastructure issues.
                </p>
            </div>

            <h2>Available Assessments 🎯</h2>
            <div className="available-tests-section">
                {tests.map(item => <TestCard {...item} />)}
            </div>
        </div>
    );
}

export default App;
