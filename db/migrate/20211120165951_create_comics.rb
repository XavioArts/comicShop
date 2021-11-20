class CreateComics < ActiveRecord::Migration[6.1]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :author
      t.text :sum
      t.text :syn

      t.timestamps
    end
  end
end
