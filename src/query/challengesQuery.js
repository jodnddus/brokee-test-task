const challengesQuery = {
    getChllenges: {
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
    }
}

export default challengesQuery;