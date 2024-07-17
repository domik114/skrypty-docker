// Dodaje kolekcje z bazy danych podając tablicę z nazwami kolekcji do dodania

const AddCollections = (toDropArray) => {
  use("filmoteka");

  if (toDropArray.length === 0) {
    print("Nie podano kolekcji do dodania.");
    return;
  }
  for (const elm of toDropArray) {
    const collectionNames = db.getCollectionNames();

    if (collectionNames.includes(elm)) {
      print(`Kolekcja "${elm}" już istnieje.`);
    } else {
      db.createCollection(elm);
      print(`Dodano kolekcję "${elm}".`);
    }
  }
};

const _toDropArray = typeof toDropArray !== "undefined" ? toDropArray : [];

AddCollections(_toDropArray);

// docker exec -it mongo1 mongosh --eval "const toDropArray=['aktorzy', 'test1', 'test2', 'test5']" /data/db/scripts/skrypt5.js
// docker exec -it mongo1 mongosh /data/db/scripts/skrypt5.js
