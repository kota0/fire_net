class Escape < ActiveHash::Base
  extend ActiveHash::Associations::ActiveRecordExtensions
 self.data = [
 { id: 0, name: '___'},
 { id: 1, name: 'なし'},
 { id: 2, name: '1人'},
 { id: 3, name: '2人'},
 { id: 4, name: '3人'},
 { id: 5, name: '4人'},
 { id: 6, name: '5人以上'},
 { id: 7, name: '10人以上'}

 ]





include ActiveHash::Associations
  has_many :posts

end