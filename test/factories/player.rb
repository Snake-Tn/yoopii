FactoryBot.define do
  factory :player, aliases: %i[host guest sender] do
    username { "username #{rand(1000..9999)}" }
    password { "password #{rand(1000..9999)}" }
  end
end
