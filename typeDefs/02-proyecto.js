import {gql} from 'apollo-server'

export const typeDefs = gql`
 type Project {
  id: ID!
  name: String
  enabled: Boolean
  time_zone: String
}

type Query {
  projects: [Project]
  project(id: ID!): Project
}

type Mutation {
  createProject(name: String, enabled: Boolean, time_zone: String): Project
  updateProject(id: ID!, name: String, enabled: Boolean, time_zone: String): Project
  deleteProject(id: ID!): Boolean
}
  

  `

