class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :title
      t.string :description
      t.timestamps
      t.references :host, foreign_key: { to_table: :players }
    end
  end
end
