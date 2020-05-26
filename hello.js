var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    greeting: String
  }
`);

var root = { greeting: () => 'Hello World' };

graphql(schema, '{ greeting }', root)
  .then((response) => {
  console.log(response);
  });