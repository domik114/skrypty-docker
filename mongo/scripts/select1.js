// Wyświetl filmy z gatunku "Dramat" lub "Wojenny" z lat 1999-2016, w których grał Leonardo DiCaprio, Tim Robbins, Thomas Kretschmann lub Geoffrey Rush jako Hubermann
use("filmoteka");

print("-------START-------");

db.getCollection("filmy")
  .find({
    $and: [
      { rok: { $gte: "1999", $lte: "2016" } },
      { gatunek: { $in: ["Dramat", "Wojenny"] } },
      {
        $or: [
          { "aktor.nazwisko": "DiCaprio" },
          { "aktor.nazwisko": "Robbins" },
          { "aktor.nazwisko": "Kretschmann" },
          { "aktor.rola.nazwisko": "Hubermann" },
        ],
      },
    ],
  })
  .forEach(printjson);

print("------END--------");

// docker exec -it mongo1 mongosh /data/db/scripts/select1.js
