const typeDefs = `#graphql
    type Tech {
        _id: ID!
        name: String!
    }

    type Users {
        email: String
        password: String
        token: String
    }

    type RegisterInput {
        email: String
        password: String
    }

    type LoginInput {
        email: String
        password: String
    }

    type Animal {
        name: String
        description: String

    }

    type Plant {
        name: String
        description: String
    }

    type Landmark {
        name: String
        description: String
    }

    type Query {
        tech: [Tech]
        users(_id: String): [Users]
    }

    type Mutation {
        registerUser(RegisterInput: RegisterInput): Users
        loginUser(loginInput: loginInput): User
    }
`

module.exports = typeDefs;