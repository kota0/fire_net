class Injury < ActiveHash::Base
  extend ActiveHash::Associations::ActiveRecordExtensions
 self.data = [
 { id: 0, name: '___'},
 { id: 1, name: 'あり'},
 { id: 2, name: 'なし'}


 ]








include ActiveHash::Associations
  has_many :posts

end