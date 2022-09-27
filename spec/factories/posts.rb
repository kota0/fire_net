FactoryBot.define do
  factory :post do
    state_id                { 2 }  
    area_id                 { 2 } 
    escape_id               { 2 }
    help_id                 { 2 }
    injury_id               { 2 }
   
    association :user 

    after(:build) do |post|
      post.images.attach(io: File.open('public/test_image.png'), filename: 'test_image.png')
    end

    after(:build) do |post|
      post.video.attach(io: File.open('public/test_video.mp4'), filename: 'test_video.mp4')
    end

  end
end 