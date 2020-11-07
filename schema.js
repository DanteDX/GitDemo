const graphql = require('graphql');
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt} = graphql;


//this is dummy data
const dummyData = [
    {id:'1',name:'Programming in JavaScript',genre:'Coding'},
    {id:'2',name:'Data Structure and Algorithms',genre:'Algorithms'},
    {id:'3',name:'Operating Systems',genre:'Computer Architecture'}
];

// this is author data
const author = [
    {id:'1',name:'Shadman',profession:'developer',age:20},
    {id:'2',name:'Priyo',profession:'ubisoft forever intern',age:21},
    {id:'3',name:'Mahin',profession:'body builder',age:24}
]

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:() =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        profession:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{
                id:{type:GraphQLID}
            },
            resolve(parent,args){
                let result = dummyData.filter(eachBook => eachBook.id === args.id);
                return result[0];
            }
        },
        author:{
            type:AuthorType,
            args:{
                id:{type:GraphQLID}
            },
            resolve(parent,args){
                let result = author.filter(eachAuthor => eachAuthor.id === args.id);
                return result[0]
            }
        }
    }
})


module.exports = new GraphQLSchema({query:RootQuery});