-- docker exec -it redis-master redis-cli -- eval /home/skrypt1.lua

-- pobiera wartości tytul i rezyser dla filmu o id film1
-- dodaje te wartosc do listy filmy
-- dodaje wartosc do zbioru rezyserzy

local film_id = "film2"
local tytul = redis.call('HGET', 'filmoteka:filmy:' .. film_id, 'tytul')

local lista_filmow_key = 'filmy'
redis.call('RPUSH', lista_filmow_key, tytul)

-- jak sprawdzić
-- lrange filmy 0 -1
-- smembers rezyserzy
