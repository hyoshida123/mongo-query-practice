# mongo-query-practice
# データセットの説明
## Movies Metadata

- movieId (int): 映画のID
- title (string): 映画のタイトル
- overview (string): 映画の要約
- tagline (string): タグ
- release_date (int): 映画公開日 (UNIX Timestamp)
- budget (inconsistent): 映画の制作費 (USD)
- vote_average (number): 平均レート (0 to 10)
- vote_count (int): つけられたレートの総数
- revenue (int): 映画の収益 (USD)
- runtime (int): 映画の長さ (分)
- genres (array):
    - name (string): 映画のジャンルの名前
    - id (int): ジャンルのID

例:
```
{
    "budget" : 30000000,
    "genres" : [
        { "id" : 16, "name" : "Animation" },
        { "id" : 35, "name" : "Comedy" },
        { "id" : 10751, "name" : "Family" }
    ],
    "overview" : "Led by Woody, Andy's toys live happily...",
    "release_date" : 815040000,
    "revenue" : 373554033,
    "runtime" : 81,
    "status" : "Released",
    "title" : "Toy Story",
    "vote_average" : 7.7,
    "vote_count" : 5415,
    "movieId" : 862,
    "tagline" : ""
}
```

## Keywords

- movieId (int): 映画のID
- keywords (array):
	- id (int): キーワードID
	- name (string): A keyword associated with the movie (例 "based on novel", "pirate", "murder")

例:
```
{
    "keywords" : [
        { "id" : 3633, "name" : "dracula" },
        { "id" : 11931, "name" : "spoof" }
    ],
    "movieId" : 12110
}
```

## Ratings

- userId (int): レートをつけたユーザーのID
- movieId (int): 映画のID
- rating (number): ユーザーがつけたレート, from 0 to 5.
- timestamp (int): レートがつけられた時間 (UNIX timestamp)

例:
```
{
    "userId" : 1,
    "movieId" : 9909,
    "rating" : 2.5,
    "timestamp" : 1260759144
}
```

## Credits

- movieId (int): 映画のID
- cast (array):
	- id (int): キャラクターを演じた俳優のID
	- character (string): 映画内のキャラクターの名前
	- name (string): 俳優の名前
- crew (array):
	- id (int): クルーメンバーのID
	- department (string): クルーメンバーの部門
	- job (string): クルーメンバーの肩書 (例 "Audio Technician", "Director")
	- name (string): クルーメンバーの名前

例:
```
{
    "cast" : [
        {
            "character" : "Max Goldman",
            "id" : 6837,
            "name" : "Walter Matthau"
        },
        ... // Other cast members
    ],
    "crew" : [
        {
            "department" : "Directing",
            "id" : 26502,
            "job" : "Director",
            "name" : "Howard Deutch",
        },
        ... // Other crew members
    ],
    "movieId" : 15602
}
```