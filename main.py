from pymongo import MongoClient

client = MongoClient('localhost', 27017)

db = client['filmoteka']

if db.command("ping")["ok"] == 1.0:
    print("działa")
else:
    print("nie działa")


collection_name = "asd52"

if collection_name not in db.list_collection_names():
    db.create_collection(collection_name)
    print(f"Utworzono kolekcję: {collection_name}")
else:
    print(f"Kolekcja {collection_name} już istnieje")

client.close()

# 127.0.0.1
# 49470