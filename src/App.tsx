import React, { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        fetch('https://graph.brokee.io/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                operationName: "GetChallenges",
                query: `
                    query GetChallenges @cached(ttl: 300, refresh: true) {
                        tests(order_by: {name: asc}) {
                            name
                            brokee_id
                            category
                            description_short
                            difficulty
                            featured_image
                            roles
                            type
                            status
                            tech_stack
                            requires_payment
                            __typename
                        }
                    }
                `,
            }),
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
