class Post < ApplicationRecord
  belongs_to :comments
  belongs_to :users
end
