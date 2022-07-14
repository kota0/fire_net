class Post < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user 
  belongs_to :state
  belongs_to :area
  belongs_to :escape
  belongs_to :help
  belongs_to :injury
  has_many   :Comments


  validates :state_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :area_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :escape_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :help_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :injury_id, numericality: { other_than: 1, message: "can't be blank"} 





  
  # belongs_to :comments
  belongs_to :user
  has_many :comments
  has_one_attached :image
end
