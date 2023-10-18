const { Users, Tech } = require('../models');

const { ApolloError } = require('apollo-server-errors');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');






const resolvers = {
    Query: {
        tech: async () => {
            return Tech.find({});
        },
        users: async (parents, { _id }) => {
            const params = _id ? { _id } : {};
            return Users.find(params)
        }
    },
    Mutation: {
        async registerUser(_, {registerInput: {email, password}}) {
            const oldUser = await Users.findOne({ email });
            if (oldUser) {
                throw new ApolloError('A user is already registered with the email' = email, 'USER_ALREADY_EXISTS');
            }
            const encryptedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                email: email.toLowerCase(),
                password: encryptedPassword
            })

            const token = jwt.sign(
                { user_id: newUser._id, email },
                '',
                {
                    expiresIn: '7h'
                }
            );

            newUser.token = token; 

            const res = await newUser.save();

            return {
                id: res.id,
                ...res._doc
            };
        },
        async loginUser(_, {loginInput: {email, password}}) {
            const User = await Users.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {

                const token = jwt.sign(
                    { user_id: newUser._id, email },
                    'UNSAFE_STRING',
                    {
                        expiresIn: '7h'
                    }
                );

                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
            } else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
        }
    }
}

module.exports = resolvers;