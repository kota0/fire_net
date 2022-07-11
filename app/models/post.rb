class Post < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :state, :area, :escape, :help, :jujury

  validates :state_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :area_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :escape_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :help_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :injury_id, numericality: { other_than: 1, message: "can't be blank"} 





  
  # belongs_to :comments
  belongs_to :user
  has_one_attached :image
end
