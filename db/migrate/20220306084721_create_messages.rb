class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :sender, foreign_key: { to_table: :players }
      t.references :receiver, foreign_key: { to_table: :rooms }
      t.string :content
      t.timestamps
    end
  end
end
