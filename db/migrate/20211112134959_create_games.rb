class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :location_url
      t.string :name
      t.timestamps
    end
  end
end
