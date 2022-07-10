class Article < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :area1, :area2, :escape, :help, :jujury

  validates :area1_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :area2_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :escape_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :help_id, numericality: { other_than: 1, message: "can't be blank"}
  validates :injury_id, numericality: { other_than: 1, message: "can't be blank"} 
end
