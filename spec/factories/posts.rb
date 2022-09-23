FactoryBot.define do
  factory :post do
    state                {}
    area                 {}
    escape               {}
    help                 {}
    injury               {}
    association :user 
  end
end 