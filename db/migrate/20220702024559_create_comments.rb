class CreateComments < ActiveRecord::Migration[6.1]
  def change
      create_table :comments do |t|
        # t.references  :user,       foreign_key: true
        t.text        :comment
        t.boolean     :cheak_box
        t.bigint      :post_id
        t.timestamps
      end        
 end
end
