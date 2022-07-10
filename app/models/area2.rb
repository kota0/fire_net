class Area2 < ActiveHash::Base
 self.data = [
 { id: 1, name: '___'}


 ]






include ActiveHash::Associations
  has_many :posts

end