class area2 < ActiveHash::Base
 self.date = [
 { id: 1, name: '___'}


 ]
end





include ActiveHash::Associations
  has_many :articles