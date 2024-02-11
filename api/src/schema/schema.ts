import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: ()=> ({
        id: {type: GraphQLString},
        book: {type: GraphQLString},
        gener: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields: {
        book: {
            type: BookType,
            args:{id: {type:GraphQLString}},
            resolve(parent, args) {
                //query
            }
        }
    }
})

export let Schema = new GraphQLSchema({
    query:RootQuery
})