FactoryBot.define do
  factory :room, aliases: %i[receiver] do
    title { "title #{rand(1000..9999)}" }
    description { 'desc' }
    host
    game
    guests { [] }
  end
end
