# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_06_084721) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string "location_url"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "sender_id"
    t.bigint "receiver_id"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["receiver_id"], name: "index_messages_on_receiver_id"
    t.index ["sender_id"], name: "index_messages_on_sender_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "username"
    t.string "password_hash"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "room_guests", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "room_id", null: false
    t.index ["player_id"], name: "index_room_guests_on_player_id"
    t.index ["room_id"], name: "index_room_guests_on_room_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "host_id"
    t.bigint "game_id"
    t.index ["game_id"], name: "index_rooms_on_game_id"
    t.index ["host_id"], name: "index_rooms_on_host_id"
  end

  add_foreign_key "messages", "players", column: "sender_id"
  add_foreign_key "messages", "rooms", column: "receiver_id"
  add_foreign_key "room_guests", "players"
  add_foreign_key "room_guests", "rooms"
  add_foreign_key "rooms", "games"
  add_foreign_key "rooms", "players", column: "host_id"
end
