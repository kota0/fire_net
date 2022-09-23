class Post < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user 
  belongs_to :state
  belongs_to :area
  belongs_to :escape
  belongs_to :help
  belongs_to :injury
  has_many   :Comments

  belongs_to :user
  has_many :comments
  has_many_attached :images
  has_one_attached :video

#  投稿画面のバリデーション
  with_options presence: true, numericality: { other_than: 0, message: "が入力されていません"} do
    validates :state_id
    validates :area_id
    validates :escape_id
    validates :help_id
    validates :injury_id
  end
    


 

   validates :images,  presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..(5.megabytes) }
   validate :images_length

  #  validates :video, presence: true, blob: { content_type: ['video/mp4']},
  # validates :image, required_either_image_or_video ]

  private

  def images_length
    if images.length > 4
      images.purge
      errors.add(:images, "は4枚以内にしてください")
    end
  end
  
end



  #  def required_either_image_or_video
  #   return if image.present? ^ video.present?
  #   errors.add(:base, '画像または動画のどちらか一方で投稿可能です')
  #  end
  

