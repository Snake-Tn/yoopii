FactoryBot.define do
  factory :player, aliases: %i[host guest] do
    username { "username #{rand(1000..9999)}" }
  end
end
