import {gql} from 'apollo-server'

export const typeDefs = gql`

type Device {
    id: ID!
    name: String!
    type: String!
    visible: Boolean!
    project: Project!
  }
  
  extend type Query {
    devices(projectId: ID!): [Device!]!
  }
  
  input DeviceInput {
    name: String!
    type: String!
    visible: Boolean!
  }
  
  extend type Mutation {
    createDevice(projectId: ID!, deviceInput: DeviceInput!): Device!
    updateDevice(id: ID!, deviceInput: DeviceInput!): Device!
    deleteDevice(id: ID!): Boolean!
  }
  `