const typeDefs = `#graphql
    type Tech {
        _id: ID!
        name: String!
    }

    type Users {
        _id: ID!
        tech1: String!
        tech2: String!
        tech1_votes: Int
        tech2_votes: Int
    }

    type Query {
        tech: [Tech]
        users(_id: String): [Users]
    }

    type Mutation {
        createUsers(tech1: String!, tech2: String!): Users
        createVote(_id: String!, techNum: Int!): Users
    }
`

module.exports = typeDefs;