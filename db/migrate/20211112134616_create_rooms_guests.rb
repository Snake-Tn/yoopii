class CreateRoomsGuests < ActiveRecord::Migration[6.1]
  def change
    create_join_table :rooms, :players, table_name: :guests
  end
end
