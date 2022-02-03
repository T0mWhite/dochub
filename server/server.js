// ======= REQUIREMENTS =======

const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// ========== APOLLO AND GQL ========
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

// ========= AUTH ==========
const { authMiddleware } = require('./utils/auth');

// ========= EXPRESS ========
const app = express();
const PORT = process.env.PORT || 3001;

// =========== ApolloServer ===========
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//  =========== MIDDLEWARE ===========
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// apply midlleware to ApolloServer
server.applyMiddleware({ app });


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

// =========== GET ALL ===========

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// ========== OPEN DATABASE ==========

db.once('open', () => {
  app.listen(PORT, () => {

    console.log(`🌍 Now listening on localhost:${PORT}`);

     // log where we can go to test our GQL API
     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

  }
)});
