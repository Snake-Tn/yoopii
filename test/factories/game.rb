FactoryBot.define do
  factory :game do
    location_url { "https://example.com/my_game#{rand(1000..9999)}" }
    name { "my_game #{rand(0..9999)}" }
  end
end

