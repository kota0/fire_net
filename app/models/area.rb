class Area < ActiveHash::Base
 self.data = [
 { id: 1, name: '___'},
 { id: 2, name: '街'},
 { id: 3, name: '町'},
 { id: 4, name: '村'},
 { id: 5, name: '郡'}


 ]






include ActiveHash::Associations
  has_many :posts

end