export const typeDefs = `#graphql

  type Rezyser {
    id: ID,
    imie: String,
    nazwisko: String,
    rok_ur: Int,
    filmy: [Film],
  }

  type Film {
    id: ID,
    nazwa: String,
    premiera: Int,
    rezyser: Rezyser,
    gatunek: Gatunek,
    kino: Kino,
  }

  type Gatunek {
    id: ID,
    nazwa: String,
  }

  type Kontrahent {
    id: ID,
    nazwa: String,
    kontakt: String,
  }

  type Kino {
    id: ID,
    nazwa: String,
    lokalizacja: String,
    kontrahent: Kontrahent,
    filmy: [Film]
  }

  type Query {
    filmy: [Film]
    rezyserzy: [Rezyser]
    kontrahenci: [Kontrahent]
    gatunki: [Gatunek]
    kina: [Kino]

    film(nazwa: String!): Film
    #kino(id: ID!): Kino
    rezyser(rok_ur: Int, rok_ur1: Int): [Rezyser]
    #gatunek(id: ID!): Gatunek
    #kontrahent(id: ID!): Kontrahent
    gatunkiPoNazwie(nazwa: String): [Film]
    filmyWKinach(lokalizacja: String): [Film]
  }

  type Mutation {
    deleteFilm(id: ID): [Film]
    addFilm(film: AddFilmInput): Film
    updateFilm(id: ID, edits: EditFilmInput): Film
  }

  input EditFilmInput {
    nazwa: String,
    premiera: Int,
  }
 
  input AddFilmInput {
    nazwa: String,
    premiera: Int,
  }
`;