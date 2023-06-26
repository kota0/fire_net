class Injury < ActiveHash::Base
  extend ActiveHash::Associations::ActiveRecordExtensions
 self.data = [
 { id: 0, name: '___'},
 { id: 1, name: '必要'},
 { id: 2, name: '不要'}

 ]








include ActiveHash::Associations
  has_many :posts

end