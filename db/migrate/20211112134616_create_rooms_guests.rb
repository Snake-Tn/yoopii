class CreateRoomsGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms_guests do |t|
      t.references :room, foreign_key: { to_table: :rooms }
      t.references :guest, foreign_key: { to_table: :players }
      t.timestamps
    end
  end
end
