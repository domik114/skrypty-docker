// Dodać seans do kina
const DodajSeans = (nazwaKina, tytul, data, godzina) => {
  use("filmoteka");
  const kino = db.kina.findOne({ nazwa: nazwaKina });

  if (!kino) {
    print(`Kino o nazwie "${nazwaKina}" nie istnieje.`);
    return;
  }

  db.kina.updateOne(
    { _id: kino._id },
    {
      $push: {
        seans: { tytul: tytul, godzina: new Date(`${data}T${godzina}:00Z`) },
      },
    }
  );

  print(`Dodano ${tytul} seans do kina "${nazwaKina}".`);
};

const _nazwaKina =
  typeof nazwaKina !== "undefined" ? nazwaKina : "Silver Screen Poznan";
const _tytul = typeof tytul !== "undefined" ? tytul : "Film-niewypełnione";
const _data = typeof data !== "undefined" ? data : "2020-01-01";
const _godzina = typeof godzina !== "undefined" ? godzina : "20:00";

DodajSeans(_nazwaKina, _tytul, _data, _godzina);

// docker exec -it mongo1 mongosh --eval "const nazwaKina='Silver Screen Poznan', tytul='Avatar', data='2023-01-01', godzina='12:15'" /data/db/scripts/skrypt1.js

// docker exec -it mongo1 mongosh /data/db/scripts/skrypt1.js
