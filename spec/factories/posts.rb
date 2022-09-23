FactoryBot.define do
  factory :post do
    state                {'1'}
    area                 {'1'}
    escape               {'1'}
    help                 {'1'}
    injury               {'1'}
    
    association :user 

    after(:build) do |post|
      item.images.attach(io: File.open('spec/fixtures/test_image.jpg'), filename: 'test_image.jpg', content_type: 'image/jpg')
    end
  end
end 