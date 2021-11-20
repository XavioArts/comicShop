class CreateChaps < ActiveRecord::Migration[6.1]
  def change
    create_table :chaps do |t|
      t.string :title
      t.text :sum
      t.belongs_to :comic, null: false, foreign_key: true

      t.timestamps
    end
  end
end
