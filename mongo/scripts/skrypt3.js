// Zmiana nazwy reżysera, jeśli nie istnieje stara to dodanie nowego reżysera
const ZmienRezyser = (staraNazwa, nowaNazwa) => {
  use("filmoteka");

  if (nowaNazwa === undefined) {
    print("Nie podano nazwy reżysera.");
    return;
  }
  if (staraNazwa === undefined) {
    const result = db.rezyserzy.findOneAndUpdate(
      {},
      { $push: { nazwa: nowaNazwa } },
      { returnDocument: "after" }
    );
    print(`Dodano nowego reżysera "${nowaNazwa}".`);
  } else {
    const query = { nazwa: staraNazwa };
    const update = { $set: { "nazwa.$": nowaNazwa } };

    const result = db.rezyserzy.updateOne(query, update);

    if (result.modifiedCount === 0) {
      print(`Reżyser o nazwie "${staraNazwa}" nie istnieje.`);
    } else {
      print(`Zmieniono nazwę reżysera "${staraNazwa}" na "${nowaNazwa}".`);
    }
  }
};

const _staraNazwa = typeof staraNazwa !== "undefined" ? staraNazwa : undefined;
const _nowaNazwa = typeof nowaNazwa !== "undefined" ? nowaNazwa : undefined;

ZmienRezyser(_staraNazwa, _nowaNazwa);

// docker exec -it mongo1 mongosh --eval "const staraNazwa='Christopher Nolan', nowaNazwa='Christopher Nolan EDITED'" /data/db/scripts/skrypt3.js

// docker exec -it mongo1 mongosh /data/db/scripts/skrypt3.js

// docker exec -it mongo1 mongosh --eval "const nowaNazwa='Christopher Nolan EDITED'" /data/db/scripts/skrypt3.js
