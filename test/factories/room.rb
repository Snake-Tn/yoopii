FactoryBot.define do
  factory :room do
    title { "title #{rand(1000..9999)}" }
    description { 'desc' }
    host
    game
  end
end
