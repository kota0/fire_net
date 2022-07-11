class Area2 < ActiveHash::Base
 self.data = [
 { id: 1, name: '___'},
 { id: 2, name: '街'}


 ]






include ActiveHash::Associations
  has_many :posts

end