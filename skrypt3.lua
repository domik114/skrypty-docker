-- tworzy nowy identyfikator filmu film1 oraz zestaw informacji w postaci tabeli film_info
-- dodaje tytuł filmu do listy o kluczu filmy 

local film_id = "film11"
local film_info = { tytul = "Nowy Film", rezyser = "Nowy Rezyser", premiera = "2022" }

local lista_filmow_key = 'filmy'
redis.call('RPUSH', lista_filmow_key, film_info.tytul)

local filmoteka_filmy_key = 'filmoteka:filmy:' .. film_id
redis.call('HMSET', filmoteka_filmy_key, 'tytul', film_info.tytul, 'rezyser', film_info.rezyser, 'premiera', film_info.premiera)

-- jak sprawdzić
-- lrange filmy 0 -1
-- hgetall filmoteka:filmy:film11