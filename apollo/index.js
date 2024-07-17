import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js'
import dane from './dane.js'

const resolvers = {
    Query: {
        rezyserzy: () => dane.rezyserzy,
        kontrahenci: () => dane.kontrahenci,
        gatunki: () => dane.gatunki,
        kina: () => dane.kina,
        filmy: () => dane.filmy,

        film(_, args){
          return dane.filmy.find((film) => film.nazwa === args.nazwa)
        },

        rezyser(_, args) {
          //console.log(args.rok_ur, args.rok_ur1);
          return dane.rezyserzy.filter((r) => r.rok_ur >= args.rok_ur && r.rok_ur <= args.rok_ur1);
        },

        gatunkiPoNazwie(_, args) {
          for (let i = 0; i < dane.gatunki.length; i++) {
            if (dane.gatunki[i].nazwa === args.nazwa) {
              return dane.filmy.filter((f) => f.gatunekid === dane.gatunki[i].id);
            }
          }
        },

        filmyWKinach(_, args) {
          console.log(args.lokalizacja);
          for (let i = 0; i < dane.kina.length; i++) {
            if (dane.kina[i].lokalizacja === args.lokalizacja) {
              return dane.filmy.filter((f) => f.kinoid === dane.kina[i].id);
            }
          }
        },
    },

    Film: {
        rezyser: (parent) => {
            return dane.rezyserzy.find(rezyser => rezyser.id === parent.rezyserid);
        },

        gatunek: (parent) => {
            return dane.gatunki.find(gatunek => gatunek.id === parent.gatunekid);
        },

        kino: (parent) => {
          return dane.kina.find(kino => kino.id === parent.kinoid);
      },
    },

    Kino: {
      kontrahent: (parent) => {
        return dane.kontrahenci.find(kontrahent => kontrahent.id === parent.kontrahentid);
      },

      filmy: (kino) => dane.filmy.filter((film) => film.kinoid === kino.id)
    },

    Rezyser: {
      filmy: (rezyser) => dane.filmy.filter((film) => film.rezyserid === rezyser.id)
    },

    Mutation: {
      deleteFilm(_, args) {
        dane.filmy = dane.filmy.filter((film) => film.id !== args.id);

        return dane.filmy;
      },

      addFilm(_, args) {
        let film = {
          ...args.film,
          id: Math.floor(Math.random() * 10000).toString(),
        };

        dane.filmy.push(film);

        return film;
      },

      updateFilm(_, args) {
        dane.filmy = dane.filmy.map((f)=>{
          if (f.id === args.id){
              return {...f, ...args.edits};
          }
          return f;
        });
        return dane.filmy.find((f) => f.id === args.id)
      },
    },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);