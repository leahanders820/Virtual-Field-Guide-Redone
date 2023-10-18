const { Users, Tech } = require('../models');

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
        createUsers: async (parents, args) => {
            const users = await Users.create(args);
            return users;
        },
        createVote: async (parent, { _id, techNum }) => {
            const vote = await Users.findOneAndUpdate(
                { _id },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            );
            return vote;
        }
    }
};

module.exports = resolvers;