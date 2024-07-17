let rezyserzy = [
    {id: '1', imie: 'Frank', nazwisko: 'Darabont', rok_ur: 1959},
    {id: '2', imie: 'Francis Ford', nazwisko: 'Coppola', rok_ur: 1939},
    {id: '4', imie: 'Steven', nazwisko: 'Spielberg', rok_ur: 1946},
    {id: '5', imie: 'Robert', nazwisko: 'Zemeckis', rok_ur: 1952},
    {id: '6', imie: 'Darren', nazwisko: 'Aronofsky', rok_ur: 1969},
    {id: '9', imie: 'George', nazwisko: 'Lucas', rok_ur: 1944},
    {id: '7', imie: 'Christopher', nazwisko: 'Nolan', rok_ur: 1970},
    {id: '8', imie: 'Peter', nazwisko: 'Weir', rok_ur: 1944},
    {id: '3', imie: 'Roman', nazwisko: 'Polanski', rok_ur: 1933},
    {id: '10', imie: 'Petera', nazwisko: 'Farrelly', rok_ur: 1956},

];

let filmy = [
    {id: '1', nazwa: 'Ojciec chrzestny', premiera: 1972, rezyserid: '2', gatunekid: '1', kinoid: '1'},
    {id: '2', nazwa: 'Skazani na Shawshank', premiera: 1994, rezyserid: '1', gatunekid: '1', kinoid: '1'},
    {id: '3', nazwa: 'Lista Schindlera', premiera: 1993, rezyserid: '3', gatunekid: '1', kinoid: '3'},
    {id: '4', nazwa: 'Forrest Gump', premiera: 1994, rezyserid: '4', gatunekid: '3', kinoid: '5'},
    {id: '5', nazwa: 'Incepcja', premiera: 2010, rezyserid: '7', gatunekid: '5', kinoid: '4'},
    {id: '6', nazwa: 'Black Swan', premiera: 2010, rezyserid: '5', gatunekid: '5', kinoid: '2'},
    {id: '7', nazwa: 'The Ninth Gate', premiera: 1999, rezyserid: '9', gatunekid: '4', kinoid: '5'},
    {id: '8', nazwa: 'The Truman Show', premiera: 1998, rezyserid: '8', gatunekid: '3', kinoid: '1'},
    {id: '9', nazwa: 'Dumb and Dumber', premiera: 1994, rezyserid: '10', gatunekid: '3', kinoid: '2'},
    {id: '10', nazwa: 'Gwiezdne wojny: Nowa nadzieja', premiera: 1977, rezyserid: '6', gatunekid: '4', kinoid: '5'},
];

let kontrahenci = [
    {id: '1', nazwa: 'Super firma', kontakt: 'super.firma@gmail.com'},
    {id: '2', nazwa: 'Aventa', kontakt: 'aventa@gmail.com'},
    {id: '3', nazwa: 'Aryl', kontakt: 'aryl@gmail.com'},
    {id: '4', nazwa: 'Asdww', kontakt: 'asdww@gmail.com'},
    {id: '5', nazwa: 'Firma XYZ', kontakt: 'firma.xyz@gmail.com'},
];

let kina = [
    {id: '1', nazwa: 'Kino 1', lokalizacja: 'Rybnik', kontrahentid: '4'},
    {id: '2', nazwa: 'Kino 2', lokalizacja: 'Wodzisław Śląski', kontrahentid: '3'},
    {id: '3', nazwa: 'Kino 3', lokalizacja: 'Katowice', kontrahentid: '2'},
    {id: '4', nazwa: 'Kino 4', lokalizacja: 'Wrocław', kontrahentid: '1'},
    {id: '5', nazwa: 'Kino 5', lokalizacja: 'Opole', kontrahentid: '5'},
];

let gatunki = [
    {id: '1', nazwa: 'Dramat'},
    {id: '2', nazwa: 'Akcja'},
    {id: '3', nazwa: 'Komedia'},
    {id: '4', nazwa: 'Fantastyka'},
    {id: '5', nazwa: 'Thriller'},
];

export default { rezyserzy, filmy, kontrahenci, kina, gatunki }