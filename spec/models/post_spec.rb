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
        expect(@post.errors.full_messages).to include("画像または動画のどちらか一方を入力してください")
      end

      it '画像か動画どちらも添付されていると投稿できない' do
        @post.valid?
        expect(@post.errors.full_messages).to include("画像または動画のどちらか一方を入力してください")
      end

      it '画像は４枚までしか投稿できない' do
        @post.images.length > 4
        @post.valid?
        
      end

      it '画像のtypeは「image/png, image/jpg, image/jpeg」しか投稿できない' do
      end

      it '画像は2megabytes以上は投稿できない' do
        @post.images == 'public/3mb_test.jpg'
        @post.valid?
        binding.pry
        expect(@post.errors.full_messages).to include("")
      end

      it 'ユーザーが紐付いていなければ投稿できない' do
        @post.user = nil
        @post.valid?
        expect(@post.errors.full_messages).to include("User must exist")
      end
    end
  end
end
