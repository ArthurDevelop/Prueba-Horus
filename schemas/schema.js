import {gql} from 'apollo-server'
import {typeDefs as Proyecto} from '../typeDefs/02-proyecto.js'
import { projectResolvers as resolveproy } from '../resolvers/02-proyectoC.js'
import { typeDefs as Dispositivo } from '../typeDefs/03-dispositivos.js'
import { DispoResolver as resolvedispo } from '../resolvers/03-dispositivos.js'
import { usuResolv as ResolvUsu} from '../resolvers/01-usuario.js'

const rootTypeDefs = gql`
    type Query {
        _: String
    }

type Mutation {
    _: String
}

`
export const resolvers = [resolveproy, resolvedispo, ResolvUsu]

export const typeDefs = [rootTypeDefs, Proyecto, Dispositivo]