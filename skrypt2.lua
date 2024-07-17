-- dodaje "Nowy film" do zbioru posortowanego

local zbiorsortowany_key = 'filmoteka:zbiorsortowany:premiery'
redis.call('ZADD', zbiorsortowany_key, 2022, 'Nowy Film')

local lista_filmow_key = 'filmy'
redis.call('RPUSH', lista_filmow_key, 'Nowy Film')

-- jak sprawdzić
-- ZRANGE filmoteka:zbiorsortowany:premiery 0 -1 WITHSCORES
-- LRANGE filmy 0 -1
