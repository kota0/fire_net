FactoryBot.define do
  factory :user do
    name                  { 'テスト' }
    email                 {Faker::Internet.free_email}
    password              {Faker::Internet.password(min_length: 6)}
    password_confirmation {password}
    user_type             { 1 }
  end
end 