class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :release_year
      t.string :producer

      t.timestamps
    end
  end
end
