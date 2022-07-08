class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.integer    :area1_id,   null: false
      t.integer    :area2_id,   null: false
      t.integer    :injury_id,  null: false
      t.integer    :escape_id,  null: false
      t.integer    :help_id,    null: false 
      t.timestamps
    end
  end
end
