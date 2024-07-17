const DodajDoUsera = (email, film, komentarz, ocena) => {
  use("filmoteka");
  const uzytkownik = db.uzytkownicy.findOne({ email: email });
  if (!uzytkownik) {
    print(`Uzytkownik o emailu "${email}" nie istnieje, dodaj go najpierw.`);
    db.uzytkownicy.insertOne({
      imie: "Nieznane",
      nazwisko: "Nieznane",
      email: email,
      opinie: [
        {
          film: film,
          komentarz: komentarz,
          ocena: ocena,
        },
      ],
    });
    print(`Dodano opinie do nowego usera uzytkownika "${email}".`);
  } else {
    db.uzytkownicy.updateOne(
      { _id: uzytkownik._id },
      {
        $push: {
          opinie: { film: film, komentarz: komentarz, ocena: ocena },
        },
      }
    );
    print(`Dodano opinie do uzytkownika "${email}".`);
  }
};

const _email = typeof email !== "undefined" ? email : "j.kowalski@gmail.com";
const _film = typeof film !== "undefined" ? film : "Joker";
const _komentarz = typeof komentarz !== "undefined" ? komentarz : "Joker";
const _ocena = typeof ocena !== "undefined" ? ocena : 5;
DodajDoUsera(_email, _film, _komentarz, _ocena);

// docker exec -it mongo1 mongosh --eval "const email='j.kowalski@gmail.com', film ='Joker', komentarz='Joker', ocena=5" /data/db/scripts/skrypt8.js
// docker exec -it mongo1 mongosh --eval "const email='nowymail@xd.pl', film ='Jackass', komentarz='Głupie', ocena=2" /data/db/scripts/skrypt8.js
