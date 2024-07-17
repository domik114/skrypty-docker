
const database = 'filmoteka';

use(database);

db.createCollection('filmy');
db.createCollection('aktorzy');
db.createCollection('rezyserzy');
db.createCollection('kontrahenci');
db.createCollection('kina');
db.createCollection('uzytkownicy');

db.getCollection("filmy").insertMany([
    {
      tytul: "Incepcja",
      rezyser: "Christopher Nolan",
      rok: "2010",
      gatunek: ["Sci-Fi", "Akcja", "Thriller"],
      aktor: [
        {
          imie: "Leonardo",
          nazwisko: "DiCaprio",
          wiek: "47",
          narodowosc: "USA",
          rola: { imie: "Dominic", nazwisko: "Cobb" },
        },
        {
          imie: "Tom",
          nazwisko: "Hardy",
          wiek: "44",
          narodowosc: "Wielka Brytania",
          rola: { imie: "Eames", nazwisko: "" },
        },
      ],
    },
    {
      tytul: "Skazani na Shawshank",
      rezyser: "Frank Darabont",
      rok: "1994",
      gatunek: ["Dramat", "Kryminał"],
      aktor: [
        {
          imie: "Tim",
          nazwisko: "Robbins",
          wiek: "62",
          narodowosc: "USA",
          rola: { imie: "Andy", nazwisko: "Dufresne" },
        },
        {
          imie: "Morgan",
          nazwisko: "Freeman",
          wiek: "85",
          narodowosc: "USA",
          rola: { imie: "Ellis", nazwisko: "Boyd" },
        },
        {
          imie: "Bob",
          nazwisko: "Gunton",
          wiek: "76",
          narodowosc: "USA",
          rola: { imie: "Samuel", nazwisko: "Norton" },
        },
      ],
    },
    {
      tytul: "Matrix",
      rezyser: "Lana i Lilly Wachowski",
      rok: "1999",
      gatunek: ["Akcja", "Sci-Fi"],
      aktor: [
        {
          imie: "Keanu",
          nazwisko: "Reeves",
          wiek: "58",
          narodowosc: "Kanada",
          rola: { imie: "Neo", nazwisko: "Anderson" },
        },
        {
          imie: "Carrie-Anne",
          nazwisko: "Moss",
          wiek: "54",
          narodowosc: "Kanada",
          rola: { imie: "Trinity", nazwisko: "" },
        },
        {
          imie: "Laurence",
          nazwisko: "Fishburne",
          wiek: "60",
          narodowosc: "USA",
          rola: { imie: "Morpheus", nazwisko: "" },
        },
        {
          imie: "Hugo",
          nazwisko: "Weaving",
          wiek: "61",
          narodowosc: "Nigeria",
          rola: { imie: "Agent", nazwisko: "Smith" },
        },
      ],
    },
    {
      tytul: "Złodziejka książek",
      rezyser: "Brian Percival",
      rok: "2013",
      gatunek: ["Dramat", "Wojenny"],
      aktor: [
        {
          imie: "Sophie",
          nazwisko: "Nélisse",
          wiek: "22",
          narodowosc: "Kanada",
          rola: { imie: "Liesel", nazwisko: "Meminger" },
        },
      ],
    },
    {
      tytul: "Pianista",
      rezyser: "Roman Polański",
      rok: "2002",
      gatunek: ["Biograficzny", "Dramat"],
      aktor: [
        {
          imie: "Adrien",
          nazwisko: "Brody",
          wiek: "49",
          narodowosc: "USA",
          rola: { imie: "Władysław", nazwisko: "Szpilman" },
        },
        {
          imie: "Thomas",
          nazwisko: "Kretschmann",
          wiek: "60",
          narodowosc: "Niemcy",
          rola: { imie: "Kapitan", nazwisko: "Wilm Hosenfeld" },
        },
      ],
    },
    {
      tytul: "Avengers: Endgame",
      rezyser: "Anthony i Joe Russo",
      rok: "2019",
      gatunek: ["Akcja"],
      aktor: [
        {
          imie: "Robert",
          nazwisko: "Downey Jr.",
          wiek: "57",
          narodowosc: "USA",
          rola: { imie: "Tony", nazwisko: "Stark" },
        },
        {
          imie: "Chris",
          nazwisko: "Evans",
          wiek: "41",
          narodowosc: "USA",
          rola: { imie: "Steve", nazwisko: "Rogers" },
        },
      ],
    },
    {
      tytul: "The Silence of the Lambs",
      rezyser: "Jonathan Demme",
      rok: "1991",
      gatunek: ["Thriller", "Kryminał"],
      aktor: [
        {
          imie: "Jodie",
          nazwisko: "Foster",
          wiek: "59",
          narodowosc: "USA",
          rola: { imie: "Clarice", nazwisko: "Starling" },
        },
        {
          imie: "Anthony",
          nazwisko: "Hopkins",
          wiek: "85",
          narodowosc: "Walia",
          rola: { imie: "Hannibal", nazwisko: "Lecter" },
        },
      ],
    },
    {
      tytul: "Blade Runner",
      rezyser: "Ridley Scott",
      rok: "1982",
      gatunek: ["Sci-Fi", "Thriller"],
      aktor: [
        {
          imie: "Harrison",
          nazwisko: "Ford",
          wiek: "80",
          narodowosc: "USA",
          rola: { imie: "Rick", nazwisko: "Deckard" },
        },
        {
          imie: "Rutger",
          nazwisko: "Hauer",
          wiek: "†75",
          narodowosc: "Holandia",
          rola: { imie: "Roy", nazwisko: "Batty" },
        },
      ],
    },
    {
      tytul: "Pulp Fiction",
      rezyser: "Quentin Tarantino",
      rok: "1994",
      gatunek: ["Kryminał", "Dramat"],
      aktor: [
        {
          imie: "John",
          nazwisko: "Travolta",
          wiek: "68",
          narodowosc: "USA",
          rola: { imie: "Vincent", nazwisko: "Vega" },
        },
        {
          imie: "Samuel L.",
          nazwisko: "Jackson",
          wiek: "73",
          narodowosc: "USA",
          rola: { imie: "Jules", nazwisko: "Winnfield" },
        },
      ],
    },
    {
      tytul: "The Shining",
      rezyser: "Stanley Kubrick",
      rok: "1980",
      gatunek: ["Horror", "Dramat"],
      aktor: [
        {
          imie: "Jack",
          nazwisko: "Nicholson",
          wiek: "85",
          narodowosc: "USA",
          rola: { imie: "Jack", nazwisko: "Torrence" },
        },
        {
          imie: "Shelley",
          nazwisko: "Duvall",
          wiek: "73",
          narodowosc: "USA",
          rola: { imie: "Wendy", nazwisko: "Torrence" },
        },
      ],
    },
]);

db.getCollection("kina").insertMany([
    {
      nazwa: "Multikino Warszawa",
      seans: [
        { tytul: "Titanic", godzina: new Date("2020-01-01T10:00:00.000Z") },
        {
          tytul: "The Silence of the Lambs",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
        { tytul: "Pianista", godzina: new Date("2020-01-01T10:00:00.000Z") },
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Cinema City Krakow",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Helios Gdansk",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Silver Screen Poznan",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Kino Muranow Warszawa",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Cinema3D Wroclaw",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Kino Atlantic Gdynia",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    {
      nazwa: "Cineworld Łodz",
      seans: [
        {
          tytul: "Avengers: Endgame",
          godzina: new Date("2020-01-01T10:00:00.000Z"),
        },
      ],
    },
    { nazwa: "Empire Cinemas Katowice", seans: [] },
    { nazwa: "Kino Nowe Horyzonty Wrocław", seans: [] },
]);

db.getCollection('kontrahenci').insertMany([
    { _id: 1, nazwa: "Warner Bros." },
    { _id: 2, nazwa: "Paramount Pictures" },
    { _id: 3, nazwa: "Universal Pictures" },
    { _id: 4, nazwa: "20th Century Studios" },
    { _id: 5, nazwa: "Sony Pictures" },
    { _id: 6, nazwa: "Lionsgate" },
    { _id: 7, nazwa: "Walt Disney Studios" },
    { _id: 8, nazwa: "DreamWorks Pictures" },
    { _id: 9, nazwa: "Miramax Films" },
    { _id: 10, nazwa: "Metro-Goldwyn-Mayer (MGM)" }
]);

db.getCollection("rezyserzy").insertMany([
    {
      nazwa: [
        "Christopher Nolan",
        "Frank Darabont",
        "Lana i Lilly Wachowski",
        "Brian Percival",
        "Roman Polanski",
        "Anthony i Joe Russo",
        "Damien Chazelle",
        "Todd Phillips",
        "Quentin Tarantino",
        "Martin Scorsese",
      ],
    },
]);

  db.getCollection("uzytkownicy").insertMany([
    {
      imie: "Jan",
      nazwisko: "Kowalski",
      email: "j.kowalski@gmail.com",
      opinie: [
        {
          film: "Joker",
          ocena: 5,
          komentarz: "Bardzo dobry film",
        },
        {
          film: "Ojciec chrzestny",
          ocena: 5,
          komentarz: "Kultowy film",
        },
      ],
    },
]);
// docker exec -it mongo1 mongosh /data/db/scripts/stworz.js

// docker exec -it mongo1 mongosh /data/db/scripts/insertFilmy.js
// docker exec -it mongo1 mongosh /data/db/scripts/insertKina.js
// docker exec -it mongo1 mongosh /data/db/scripts/insertKontrahenci.js
// docker exec -it mongo1 mongosh /data/db/scripts/insertRezyserzy.js
// docker exec -it mongo1 mongosh /data/db/scripts/insertUzytkownicy.js