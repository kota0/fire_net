class Post < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user 
  belongs_to :state
  belongs_to :area
  belongs_to :escape
  belongs_to :help
  belongs_to :injury
  belongs_to :direction
  has_many   :Comments

  belongs_to :user
  has_many :comments
  has_one_attached :image
  has_one_attached :video

  with_options presence: true, numericality: { other_than: 1, message: "can't be blank"} do
    validates :state_id
    validates :area_id
    validates :escape_id
    validates :help_id
    validates :injury_id
  end


 
  # validates :image, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..5.megabytes }, on: create_image
  
  # validates :video, presence: true, blob: { content_type: ['video/mp4']}
  validate :required_either_image_or_video

  


  def required_either_image_or_video
    return if image.present? ^ video.present?
    errors.add(:base, '画像または動画のどちらか一方で投稿可能です')
  end
  
end
