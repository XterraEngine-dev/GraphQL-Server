const {
       GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull

} = require('graphql');

// HARDCODED DATA
const customers = [
    { id: '1', name: 'Denisse Barrera', email: 'denisse@xte.com', age: 20 },
    { id: '2', name: 'Fernando Cifuentes', email: 'cifuentes@xte.com', age: 20 },
    { id: '3', name: 'Terry', email: 'Terry@xte.com', age: 5 }
];


//customer type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

//ROOT QUERY

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type:GraphQLString }

            },
            resolve(parentValue, args) {
                for (let i = 0; i < customers.length; i++) {
                    if (customers[i].id == args.id) {
                        return customers[i];
                    }
                }
            }
        }
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery
});