-- pobiera informacje o id film5

local film_id = "film5"
local film_info = redis.call('HGETALL', 'filmoteka:filmy:' .. film_id)

local lista_filmow_key = 'filmy'
redis.call('RPUSH', lista_filmow_key, film_info[2])

local zbior_rezyserow_key = 'rezyserzy'
redis.call('SADD', zbior_rezyserow_key, film_info[4])

local zbiorsortowany_key = 'filmoteka:zbiorsortowany:premiery'
redis.call('ZADD', zbiorsortowany_key, 2010, film_info[2])

-- jak sprawdzić
-- LRANGE filmy 0 -1
-- SMEMBERS rezyserzy
-- ZRANGE filmoteka:zbiorsortowany:premiery 0 -1 WITHSCORES
