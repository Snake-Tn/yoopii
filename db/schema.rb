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

ActiveRecord::Schema.define(version: 2021_11_12_135542) do

  create_table "games", force: :cascade do |t|
    t.string "location_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "username"
    t.string "password_hash"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "host_id"
    t.integer "game_id"
    t.index ["game_id"], name: "index_rooms_on_game_id"
    t.index ["host_id"], name: "index_rooms_on_host_id"
  end

  create_table "rooms_guests", force: :cascade do |t|
    t.integer "room_id"
    t.integer "guest_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["guest_id"], name: "index_rooms_guests_on_guest_id"
    t.index ["room_id"], name: "index_rooms_guests_on_room_id"
  end

  add_foreign_key "rooms", "games"
  add_foreign_key "rooms", "players", column: "host_id"
  add_foreign_key "rooms_guests", "players", column: "guest_id"
  add_foreign_key "rooms_guests", "rooms"
end
