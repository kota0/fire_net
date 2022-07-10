class Post < ApplicationRecord
  
  
  belongs_to :comments
  belongs_to :user
  has_one_attached :image
end
