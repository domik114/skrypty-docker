const UsunKontrahenta = (nazwaDoUsuniecia) => {
  use("filmoteka");

  if (!nazwaDoUsuniecia) {
    print("Nie podano nazwy kontrahenta do usunięcia.");
    return;
  }

  const kolekcjaKontrahentow = db.kontrahenci;

  if (Array.isArray(nazwaDoUsuniecia)) {
    nazwaDoUsuniecia.forEach((nazwa) => {
      const result = kolekcjaKontrahentow.deleteOne({ nazwa: nazwa });

      if (result.deletedCount > 0) {
        print(`Usunięto kontrahenta "${nazwa}".`);
      } else {
        print(`Kontrahent "${nazwa}" nie istnieje.`);
      }
    });
  } else {
    const result = kolekcjaKontrahentow.deleteOne({ nazwa: nazwaDoUsuniecia });

    if (result.deletedCount > 0) {
      print(`Usunięto kontrahenta "${nazwaDoUsuniecia}".`);
    } else {
      print(`Kontrahent "${nazwaDoUsuniecia}" nie istnieje.`);
    }
  }
};

// Przykłady użycia
const _nazwaDoUsuniecia =
  typeof nazwaDoUsuniecia !== "undefined"
    ? nazwaDoUsuniecia
    : "KontrahentTESTOWY";

UsunKontrahenta(_nazwaDoUsuniecia);

// docker exec -it mongo1 mongosh --eval "const nazwaDoUsuniecia='KontrahentTESTOWY'" /data/db/scripts/skrypt7.js
// docker exec -it mongo1 mongosh --eval "const nazwaDoUsuniecia=['KontrahentTESTOWY', 'KontrahentTESTOWY2']" /data/db/scripts/skrypt7.js
// docker exec -it mongo1 mongosh /data/db/scripts/skrypt7.js
