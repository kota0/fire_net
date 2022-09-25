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

# 画像か動画どちらか一方のみ保存のバリデーション
   validate :required_either_images_or_video


# 画像選択のバリデーション
    validate :images, :image_type, :image_length


# 動画のバリデーション
    validate :video_type


   private

    def image_type
      images.each do |image|
        if !image.blob.content_type.in?(%('image/jpeg image/jpg image/png'))
          image.attachments.clear
          errors.add(:images, 'はjpeg,jpg,png形式でアップロードしてください')
        end
      end
    end
  
    def image_size
      images.each do |image|
        if image.blob.byte_size > 2.megabytes
          images.attachments.clear
          errors.add(:images, "は1つのファイル2MB以内にしてください")
        end
      end
    end
  
    def image_length
      if images.length > 4
        images.attachments.clear
        errors.add(:images, "は4枚以内にしてください")
      end
    end

    def video_type
      if video.attached?
        if !video.blob.content_type.in?(%('video/mp4'))
          video.attachments.clear
          errors.add(:images, 'はmp4形式でアップロードしてください')
        end
      end
    end
  


  def required_either_images_or_video
    return if images.present? ^ video.present?
    errors.add(:base, '画像または動画のどちらか一方を入力してください')
   end
  end

