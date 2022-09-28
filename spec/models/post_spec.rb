require 'rails_helper'

RSpec.describe Post, type: :model do
    before do
      @post = FactoryBot.build(:post)
    end

describe '新規投稿' do
    context '新規投稿できるとき' do
      it '画像のみが添付されていて、state,area,escape,help,injuryが指定されていれば投稿できる' do
        @post.video = nil
        expect(@post).to be_valid
      end

      it '動画のみが添付されていて、state,area,escape,help,injuryが指定されていれば投稿できる' do
        @post.images = nil
        expect(@post).to be_valid
      end
    end

    context '新規登録できないとき' do
      it 'stateが未指定では投稿できない' do
        @post.state_id = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("State can't be blank")
      end

      it 'areaが未指定では投稿できない' do
        @post.area_id = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("Area can't be blank")
      end

      it 'escapeが未指定では投稿できない' do
        @post.escape_id = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("Escape can't be blank")
      end

      it 'helpが未指定では投稿できない' do
        @post.help_id = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("Help can't be blank")
      end

      it 'injuryが未指定では投稿できない' do
        @post.injury_id = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("Injury can't be blank")
      end

      it '画像か動画どちらかが添付されていないと投稿できない' do
        @post.images = nil
        @post.video = nil
        @post.valid?
        expect(@post.errors.full_messages).to include('画像または動画のどちらか一方を入力してください')
      end

      it '画像か動画どちらも添付されていると投稿できない' do
        @post.valid?
        expect(@post.errors.full_messages).to include('画像または動画のどちらか一方を入力してください')
      end

      it '画像は４枚までしか投稿できない' do
        (1..4).each do
          @post.images.attach(io: File.open('public/test_image.png'), filename: 'test_image.png')
        end
        @post.valid?
        expect(@post.errors.full_messages).to include('Images は4枚以内にしてください')
      end

      it '画像のtypeは「image/png, image/jpg, image/jpeg」しか投稿できない' do
        @post.images.attach(io: File.open('public/404.html'), filename: 'test.html')
        @post.valid?
        expect(@post.errors.full_messages).to include('Images はjpeg,jpg,png形式でアップロードしてください')
      end

      it '画像は5megabytes以上は投稿できない' do
        @post.images.first.byte_size = 5 * 1024 * 1024 + 1
        @post.valid?
        expect(@post.errors.full_messages).to include('Images は1つのファイル5MB以内にしてください')
      end

      it '動画のtypeは「video/mp4」しか投稿できない' do
        @post.video.attach(io: File.open('public/404.html'), filename: 'test.html')
        @post.valid?
        expect(@post.errors.full_messages).to include('Video はmp4形式でアップロードしてください')
      end

      it 'ユーザーが紐付いていなければ投稿できない' do
        @post.user = nil
        @post.valid?
        expect(@post.errors.full_messages).to include('User must exist')
      end

    end
  end
end
