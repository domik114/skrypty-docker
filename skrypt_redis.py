# import redis

# r = redis.StrictRedis(host='localhost', port=6379, decode_responses=True)

# for i in range(1, 11):
#     film1_info = r.hgetall(f"filmoteka:filmy:film{i}")
#     print(f"Informacje o Film {i}:", film1_info)

# print()

# for i in range(1, 11):
#     film1_info = r.hgetall(f"filmoteka:rezyserzy:rez{i}")
#     print(f"Informacje o reżyser {i}:", film1_info)

# import redis

# # Połączenie z Redis
# r = redis.StrictRedis(host='localhost', port=6379, decode_responses=True)

# # Klucz dla filmu
# klucz_filmu = "filmoteka:filmy:film1"

# # Pobranie wszystkich pól i wartości dla danego klucza
# informacje_o_filmie = r.hgetall(klucz_filmu)

# # Wyświetlenie informacji o filmie
# print(f"Informacje o filmie ({klucz_filmu}):")
# for pole, wartość in informacje_o_filmie.items():
#     print(f"{pole}: {wartość}")


import redis

def filmy():
    i = 0
    filmy = r.keys("filmoteka:filmy:*")
    print("Filmy:")
    for klucz_filmu in filmy:
        i = i + 1
        informacje_o_filmie = r.hgetall(klucz_filmu)
        print(f"{i} {klucz_filmu}: {informacje_o_filmie}")

def rez():
    rezyserzy = r.keys("filmoteka:rezyserzy:*")
    print("\nReżyserzy:")
    for klucz_rezysera in rezyserzy:
        informacje_o_rezyserze = r.hgetall(klucz_rezysera)
        print(f"{klucz_rezysera}: {informacje_o_rezyserze}")

# Połączenie z Redis
r = redis.StrictRedis(host='localhost', port=6379, decode_responses=True)

# usuwanie rekordu
r.delete("filmoteka:filmy:film1")

# dodanie nowego rekordu
r.hset("filmoteka:filmy:film1", "tytul", "Nowy Film")
r.hset("filmoteka:filmy:film1", "rezyser", "Nowy Rezyser")
r.hset("filmoteka:filmy:film1", "premiera", "2022")

# edycja istniejącego rekordu
r.hset("filmoteka:filmy:film1", "tytul", "asdasdasd")
r.hset("filmoteka:filmy:film1", "rezyser", "rrrrrr")
r.hset("filmoteka:filmy:film1", "premiera", "22222")

# dodanie nowej kolumny do istniejącego rekordu
r.hset("filmoteka:filmy:film1", "nowe", "awd343g3g")

r.hset("filmoteka:filmy:film5", "ocena", 9.2)

r.hdel("filmoteka:filmy:film3", "premiera")

# rpush filmoteka:lista:rok:1994 "Skazani na Shawshank" "Dumb and Dumber"
# LRANGE filmoteka:lista:rok:1994 0 -1

r.lpush("filmy", "Nowy film")
print(r.lrange("filmy", 0, -1))
print(r.lrange("filmoteka:lista:rok:1994", 0, -1))

# lista
r.lrem("filmy", 0, "Nowy film")
print(r.lrange("filmy", 0, -1))

# zbiór - dodanie i usunięcie
r.sadd("rezyserzy", "Nowy Rezyser")
print(r.smembers("rezyserzy"))
r.srem("rezyserzy", "Nowy Rezyser")
print(r.smembers("rezyserzy"))

# zbiór posortowany wg premier
# ZADD filmoteka:zbiorsortowany:premiery 1972 "Ojciec chrzestny" 1977 "Gwiezdne wojny: Nowa nadzieja" 1993 "Lista Schindlera" 1994 "Skazani na Shawshank" 1994 "Dumb and Dumber" 1994 "Forrest Gump" 1998 "The Truman Show" 1999 "The Ninth Gate" 2010 "Black Swan" 2010 "Incepcja"
# wyswietlenie ZSCAN filmoteka:zbiorsortowany:premiery 0
print("\nZbiór posortowany 'filmoteka:zbiorsortowany:premiery':")
print(r.zscan("filmoteka:zbiorsortowany:premiery", 0))

# lista asocjacyjna
# KEYS filmoteka:filmy:*
# HMSET filmoteka:filmy:shawshank tytul "Skazani na Shawshank" rezyser "Frank Darabont" premiera "1994"
# HMSET filmoteka:filmy:chrzestny tytul "Ojciec chrzestny" rezyser "Francis Ford Coppola" premiera "1972"
# HMSET filmoteka:filmy:schindlera tytul "Lista Schindlera" rezyser "Steven Spielberg" premiera "1993"
# HMSET filmoteka:filmy:gump tytul "Forrest Gump" rezyser "Robert Zemeckis" premiera "1994"
# HMSET filmoteka:filmy:swan tytul "Black Swan" rezyser "Darren Aronofsky" premiera "2010"
# HMSET filmoteka:filmy:gwojny tytul "Gwiezdne wojny: Nowa nadzieja" rezyser "George Lucas" premiera "1977"
# HMSET filmoteka:filmy:incepcja tytul "Incepcja" rezyser "Christopher Nolan" premiera "2010"
# HMSET filmoteka:filmy:truman tytul "The Truman Show" rezyser "Peter Weir" premiera "1998"
# HMSET filmoteka:filmy:ngate tytul "The Ninth Gate" rezyser "Roman Polanski" premiera "1999"
# HMSET filmoteka:filmy:dumber tytul "Dumb and Dumber" rezyser " Petera Farrelly" premiera "1994"

filmy_info = {
    "shawshank": {"tytul": "Skazani na Shawshank", "rezyser": "Frank Darabont", "premiera": "1994"},
    "chrzestny": {"tytul": "Ojciec chrzestny", "rezyser": "Francis Ford Coppola", "premiera": "1972"},
    "schindlera": {"tytul": "Lista Schindlera", "rezyser": "Steven Spielberg", "premiera": "1993"},
    "gump": {"tytul": "Forrest Gump", "rezyser": "Robert Zemeckis", "premiera": "1994"},
    "swan": {"tytul": "Black Swan", "rezyser": "Darren Aronofsky", "premiera": "2010"},
    "gwojny": {"tytul": "Gwiezdne wojny: Nowa nadzieja", "rezyser": "George Lucas", "premiera": "1977"},
    "incepcja": {"tytul": "Incepcja", "rezyser": "Christopher Nolan", "premiera": "2010"},
    "truman": {"tytul": "The Truman Show", "rezyser": "Peter Weir", "premiera": "1998"},
    "ngate": {"tytul": "The Ninth Gate", "rezyser": "Roman Polanski", "premiera": "1999"},
    "dumber": {"tytul": "Dumb and Dumber", "rezyser": "Petera Farrelly", "premiera": "1994"}
}

print("\nLista asocjacyjna 'filmoteka:filmy':")
for film_id, info in filmy_info.items():
    print(f"{film_id}: {r.hgetall(f'filmoteka:filmy:{film_id}')}")

filmy()
rez()