class Post < ApplicationRecord
  
  mount_uploader :video, VideoUploader
  belongs_to :comments
  belongs_to :users
  has_one_attached :image
end
