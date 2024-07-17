local film_id = "film8"
local film_info = redis.call('HGETALL', 'filmoteka:filmy:' .. film_id)

local lista_filmow_key = 'filmy'
redis.call('RPUSH', lista_filmow_key, film_info[2])

local zbior_rezyserow_key = 'rezyserzy'
redis.call('SADD', zbior_rezyserow_key, film_info[4])

local zbiorsortowany_oceny_key = 'filmoteka:zbiorsortowany:oceny'
redis.call('ZADD', zbiorsortowany_oceny_key, 9.0, film_info[2])
