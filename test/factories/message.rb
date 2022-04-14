FactoryBot.define do
  factory :message do
    content { 'hello there :)' }
    sender
    receiver
  end
end

