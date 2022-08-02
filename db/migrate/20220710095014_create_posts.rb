class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user,       foreign_key: true
      t.integer    :state_id,   null: false
      t.integer    :area_id,   null: false 
      t.text       :mark
      t.integer    :injury_id,  null: false
      t.integer    :escape_id,  null: false
      t.integer    :help_id,    null: false
      t.text       :content,    null: false
      t.timestamps
    end
  end
end

