class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.timestamps
      t.integer    :user_id
      t.blob       :image
      t.blob       :video
      t.integer    :area1_id,   null: false
      t.integer    :area2_id,   null: false 
      t.text       :mark
      t.integer    :injury_id,  null: false
      t.integer    :escape_id,  null: false
      t.integer    :help_id,    null: false
      t.text       :content,    null: false
    end
  end
end
