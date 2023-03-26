class CreateImageInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :image_infos do |t|
      t.string :title

      t.timestamps
    end
  end
end
