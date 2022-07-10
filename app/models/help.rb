class Help < ActiveHash::Base
 self.data = [
 { id: 1, name: '___'},
 { id: 2, name: 'あり'},
 { id: 3, name: 'なし'}


 ]







include ActiveHash::Associations
  has_many :posts

end