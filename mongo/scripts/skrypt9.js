const UsunOpiniePokomentarze = (email, komentarzDoUsuniecia) => {
  use("filmoteka");
  if (!email || !komentarzDoUsuniecia) {
    print("Nie podano wymaganych danych.");
    return;
  }
  const uzytkownik = db.uzytkownicy.findOne({ email: email });
  if (!uzytkownik) {
    print(`Użytkownik o emailu "${email}" nie istnieje.`);
    return;
  }
  const opinieDoUsuniecia = uzytkownik.opinie.filter(
    (opinia) => opinia.komentarz === komentarzDoUsuniecia
  );
  if (opinieDoUsuniecia.length === 0) {
    print(
      `Brak opinii o komentarze "${komentarzDoUsuniecia}" u użytkownika "${email}".`
    );
    return;
  }
  db.uzytkownicy.updateOne(
    { _id: uzytkownik._id },
    {
      $pull: {
        opinie: { komentarz: komentarzDoUsuniecia },
      },
    }
  );

  print(
    `Usunięto opinie o komentarze "${komentarzDoUsuniecia}" u użytkownika "${email}".`
  );
};

const _email = typeof email !== "undefined" ? email : "j.kowalski@gmail.com";
const _komentarzDoUsuniecia =
  typeof komentarzDoUsuniecia !== "undefined" ? komentarzDoUsuniecia : "Joker";

UsunOpiniePokomentarze(_email, _komentarzDoUsuniecia);
// docker exec -it mongo1 mongosh --eval "const email='j.kowalski@gmail.com', komentarzDoUsuniecia='Joker'" /data/db/scripts/skrypt9.js
// docker exec -it mongo1 mongosh /data/db/scripts/skrypt9.js
