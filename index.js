import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  // resolvers만 써도 모던자바스크립트에서는 동작함
  resolvers: resolvers,
});

server.start(() => console.log("GraphQL Server Running..."));
