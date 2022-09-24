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

# プルダウンのバリデーション
  with_options presence: true, numericality: { other_than: 0, message: "が入力されていません"} do
    validates :state_id
    validates :area_id
    validates :escape_id
    validates :help_id
    validates :injury_id
  end

# 画像選択のバリデーション
    validate :images, :image_type, :image_size, :image_length

   private

    def image_type
      images.each do |image|
        if !image.blob.content_type.in?(%('image/jpeg image/png'))
          image.purge
          errors.add(:images, 'はjpegまたはpng形式でアップロードしてください')
        end
      end
    end
  
    def image_size
      images.each do |image|
        if image.blob.byte_size > 5.megabytes
          image.purge
          errors.add(:images, "は1つのファイル5MB以内にしてください")
        end
      end
    end
  
    def image_length
      if images.length > 4
        images.purge
        errors.add(:images, "は4枚以内にしてください")
      end
    end
  end
  











    # validates :images,  presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 1..(5.megabytes) }
    # validate :images_length

  #  validates :video, presence: true, blob: { content_type: ['video/mp4']},
  # validates :image, required_either_image_or_video ]


  # def images_length
  #   if images.length > 4
  #     images.purge
  #     errors.add(:images, "は4枚以内にしてください")
  #   end
  # end
  




  #  def required_either_image_or_video
  #   return if image.present? ^ video.present?
  #   errors.add(:base, '画像または動画のどちらか一方で投稿可能です')
  #  end
