## テーブル設計

## usersテーブル

|Column | Type | Options |
| --- | --- | --- |
| name | string | null: false |
| email | string | null: false, unique :true |
| encrypted_password | string | null: false |
| user_type | boolean | 


### Association
- has_many :posts
- has_many :comments

## postsテーブル

| Column | Type | Options |
| --- | --- | --- |
| users | references | null: false ,foreign_key: true |
| state_id | string | null: false |
| area_id | integer | null: false |
| mark | integer | null: false |
| injury_id | integer | null: false |
| escape_id | integer | null: false |
| help_id | integer | null: false |
| content | text | null: false |
| status | integer | 


### Association
- belongs_to :user
- has_many :comments
- has_many_attached :images
- has_one_attached :video 

## commentsテーブル
| Column | Type | Options | 
| --- | --- | --- |
| user | references | null: false,foreign_key: true |
| post | references | null: false ,foreign_key: true |
| text | comment |


### Association
- belongs_to :user
- belongs_to :post