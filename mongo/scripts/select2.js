// Zliczanie aktorów w filmach

use("filmoteka");

print("-------START-------");
let sumaAktorow = 0;

db.getCollection("filmy")
  .aggregate([
    {
      $project: {
        _id: 0,
        tytul: 1,
        liczbaAktorow: { $size: "$aktor" },
      },
    },
  ])
  .forEach((film) => {
    print("Tytuł: " + film.tytul);
    print("Liczba aktorów: " + film.liczbaAktorow);
    print("------------------------------");
    sumaAktorow += film.liczbaAktorow;
  });
print("Całkowita liczba aktorów: " + sumaAktorow);
print("------END--------");


// docker exec -it mongo1 mongosh /data/db/scripts/select2.js