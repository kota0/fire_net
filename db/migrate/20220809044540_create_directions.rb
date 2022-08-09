class CreateDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :directions do |t|

      t.timestamps
      t.references :post,       foreign_key: true
    end
  end
end
