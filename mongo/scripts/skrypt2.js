// usuwanie seansu z kina
const UsunSeans = (nazwaKina, tytul) => {
  use("filmoteka");
  const kino = db.kina.findOne({ nazwa: nazwaKina });

  if (!kino) {
    print(`Kino o nazwie "${nazwaKina}" nie istnieje.`);
    return;
  }

  let query = { _id: kino._id };

  if (tytul) {
    query["seans.tytul"] = tytul;
  } else {
    query["seans"] = { $exists: true, $ne: [] }; // Usuwanie ostatniego seansu, jeśli tytuł nie jest podany
  }

  const result = db.kina.updateOne(query, { $pop: { seans: 1 } });

  if (result.modifiedCount > 0) {
    if (tytul) {
      print(`Usunięto seans "${tytul}" z kina "${nazwaKina}".`);
    } else {
      print(`Usunięto ostatni seans z kina "${nazwaKina}".`);
    }
  } else {
    if (tytul) {
      print(`Seans "${tytul}" nie został znaleziony w kinie "${nazwaKina}".`);
    } else {
      print(`Kino "${nazwaKina}" nie ma żadnych seansów do usunięcia.`);
    }
  }
};

const _nazwaKina =
  typeof nazwaKina !== "undefined" ? nazwaKina : "Silver Screen Poznan";
const _tytul = typeof tytul !== "undefined" ? tytul : null;

UsunSeans(_nazwaKina, _tytul);

// docker exec -it mongo1 mongosh --eval "const nazwaKina='Silver Screen Poznan', tytul='Avatar'" /data/db/scripts/script2.js
// docker exec -it mongo1 mongosh /data/db/scripts/script2.js
