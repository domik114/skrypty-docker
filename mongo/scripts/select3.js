// Wyświetl nazwy kin, które nie mają seansów
use("filmoteka");
print("-------START-------");

db.getCollection("kina")
  .find(
    {
      $or: [{ seans: { $exists: false } }, { seans: { $size: 0 } }],
    },
    { _id: 0, nazwa: 1 }
  )
  .forEach(function (kino) {
    print("Kino bez seansów: " + kino.nazwa);
  });

print("------END--------");

// docker exec -it mongo1 mongosh /data/db/scripts/select3.js
