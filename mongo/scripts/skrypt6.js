// dodaje kontrahenta, jeżeli nie istnieje, jeśli tablica to dodaje wszystkich kontrahentów z tablicy
const DodajKontrahenta = (nowaNazwa) => {
  use("filmoteka");

  if (!nowaNazwa) {
    print("Nie podano nazwy kontrahenta.");
    return;
  }

  const kolekcjaKontrahentow = db.kontrahenci;

  if (Array.isArray(nowaNazwa)) {
    const iloscKontrahentow = kolekcjaKontrahentow.countDocuments({});
    let nowyId = iloscKontrahentow + 1;

    nowaNazwa.forEach((nazwa) => {
      kolekcjaKontrahentow.insertOne({
        _id: nowyId++,
        nazwa: nazwa,
      });
      print(`Dodano kontrahenta "${nazwa}" z _id ${nowyId - 1}.`);
    });
  } else {
    const iloscKontrahentow = kolekcjaKontrahentow.countDocuments({});
    let nowyId = iloscKontrahentow + 1;

    kolekcjaKontrahentow.insertOne({
      _id: nowyId,
      nazwa: nowaNazwa,
    });

    print(`Dodano kontrahenta "${nowaNazwa}" z _id ${nowyId}.`);
  }
};

// Przykłady użycia
const _nowaNazwa =
  typeof nowaNazwa !== "undefined" ? nowaNazwa : "KontrahentTESTOWY";

DodajKontrahenta(_nowaNazwa);

// docker exec -it mongo1 mongosh --eval "const nowaNazwa='KontrahentTESTOWY'" /data/db/scripts/skrypt6.js
// docker exec -it mongo1 mongosh --eval "const nowaNazwa=['KontrahentTESTOWY', 'KontrahentTESTOWY2']" /data/db/scripts/skrypt6.js
// docker exec -it mongo1 mongosh /data/db/scripts/skrypt6.js
