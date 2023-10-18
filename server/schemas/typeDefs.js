const { gql } = require('apollo-server');




const typeDefs = gql`
    
    type Users {
        email: String
        password: String
        token: String
    }

    input RegisterInput {
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
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
       
        users(_id: String): [Users]
    }

    type Mutation {
        registerUser(registerInput: RegisterInput): Users
        loginUser(loginInput: LoginInput): Users
    }
`

module.exports = typeDefs;