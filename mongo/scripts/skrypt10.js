const EdytujOpiniePoKomentarzu = (email, staryKom, nowyKom) => {
  use("filmoteka");

  if (!email || !staryKom || !nowyKom) {
    print("Nie podano wymaganych danych.");
    return;
  }

  const uzytkownik = db.uzytkownicy.findOne({ email: email });

  if (!uzytkownik) {
    print(`Użytkownik o emailu "${email}" nie istnieje.`);
    return;
  }

  const opinieDoEdycji = uzytkownik.opinie.filter(
    (opinia) => opinia.komentarz === staryKom
  );

  if (opinieDoEdycji.length === 0) {
    print(`Brak opinii o komentarzu "${staryKom}" u użytkownika "${email}".`);
    return;
  }

  db.uzytkownicy.updateOne(
    { _id: uzytkownik._id, "opinie.komentarz": staryKom },
    {
      $set: {
        "opinie.$.komentarz": nowyKom,
      },
    }
  );
  print(
    `Zmieniono komentarz w opinii użytkownika "${email}" z "${staryKom}" na "${nowyKom}".`
  );
};

// Przykład użycia
const _email = typeof email !== "undefined" ? email : "j.kowalski@gmail.com";
const _staryKom =
  typeof staryKom !== "undefined" ? staryKom : "Stary komentarz";
const _nowyKom = typeof nowyKom !== "undefined" ? nowyKom : "Nowy komentarz";

EdytujOpiniePoKomentarzu(_email, _staryKom, _nowyKom);
// docker exec -it mongo1 mongosh --eval "const email='j.kowalski@gmail.com', staryKom='JokerXD', nowyKom='Nowy komentarz'" /data/db/scripts/skrypt10.js
// docker exec -it mongo1 mongosh /data/db/scripts/skrypt10.js
