// Usuwa kolekcje z bazy danych podając tablicę z nazwami kolekcji do usunięcia

const DropCollections = (toDropArray) => {
  use("filmoteka");

  if (toDropArray.length === 0) {
    print("Nie podano kolekcji do usunięcia.");
    return;
  }
  for (const elm of toDropArray) {
    const collectionNames = db.getCollectionNames();

    if (collectionNames.includes(elm)) {
      db.getCollection(elm).drop();
      print(`Usunięto kolekcję "${elm}".`);
    } else {
      print(`Kolekcja "${elm}" nie istnieje.`);
    }
  }
};

const _toDropArray = typeof toDropArray !== "undefined" ? toDropArray : [];

DropCollections(_toDropArray);

// docker exec -it mongo1 mongosh --eval "const toDropArray=['aktorzy']" /data/db/scripts/skrypt4.js
// docker exec -it mongo1 mongosh /data/db/scripts/skrypt4.js
