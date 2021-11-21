class CreateRoomsGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :room_guests do |t|
      t.references :player, :room, null: false, foreign_key: true
    end
  end
end
