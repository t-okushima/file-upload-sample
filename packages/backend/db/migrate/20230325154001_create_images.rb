class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.integer :order
      t.references :image_info, null: false, foreign_key: true

      t.timestamps
    end
  end
end
