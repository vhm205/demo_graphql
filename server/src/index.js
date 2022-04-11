const { ApolloServer } = require('apollo-server');
// const { mocks } = require('./mocks');
const TrackAPI = require('./datasources/track-api');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        trackAPI: new TrackAPI()
    })
})

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev
    `);
});