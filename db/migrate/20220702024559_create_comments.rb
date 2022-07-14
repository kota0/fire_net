class CreateComments < ActiveRecord::Migration[6.1]
  def change
      create_table :comments do |t|
        t.integer  :user_id
        t.integer  :post_id
        t.text     :comment
        t.boolean  :cheak_box
        # t.bigint   :post_id
        t.timestamps
      end        
 end
end
