require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = FactoryBot.build(:user)
end

describe 'ユーザー新規登録' do
  context '新規登録できるとき' do
    it '全ての項目が入力されていれば登録できる' do
      expect(@user).to be_valid
    end
  end

  context '新規登録できないとき' do
    it '名前が空では登録できない' do
      @user.name = ''
      @user.valid?
      expect(@user.errors.full_messages).to include("Name can't be blank")
    end

    it '名前は全角（漢字・ひらがな・カタカナ）でないと登録できない' do
      @user.name = '111'
      @user.valid?
      expect(@user.errors.full_messages).to include('Name は全角ひらがな、全角カタカナ、漢字で入力して下さい')
    end

    it 'emailが空では登録できない' do
      @user.email = ''
      @user.valid?
      expect(@user.errors.full_messages).to include("Email can't be blank")
    end

    it '同じemailアドレスは登録できないこと' do
      @user.save
      another_user = FactoryBot.build(:user)
      another_user.email = @user.email
      another_user.valid?
      expect(another_user.errors.full_messages).to include('Email has already been taken')
    end

    it 'emailアドレスが@を含まないと登録できない' do
      @user.email = 'test'
      @user.valid?
      expect(@user.errors.full_messages).to include('Email is invalid')
    end

    it 'passwordが空では登録できない' do
      @user.password = ''
      @user.valid?
      expect(@user.errors.full_messages).to include("Password can't be blank")
    end

    it 'passwordは6文字未満では登録できない' do
      @user.password = 'a1234'
      @user.valid?
      expect(@user.errors.full_messages).to include('Password is too short (minimum is 6 characters)')
    end

    it 'passwordは英字のみのパスワードでは登録できない' do
      @user.password = 'abc'
      @user.valid?
      expect(@user.errors.full_messages).to include('Password は半角英数を両方含む必要があります')
    end

    it 'passwordは数字のみのパスワードでは登録できない' do
      @user.password = '123'
      @user.valid?
      expect(@user.errors.full_messages).to include('Password は半角英数を両方含む必要があります')
    end

    it 'passwordは全角文字を含むパスワードでは登録できない' do
      @user.password = 'ABC'
      @user.valid?
      expect(@user.errors.full_messages).to include('Password は半角英数を両方含む必要があります')
    end

    it 'passwordとpassword（確認）は値が一致しないと登録できない' do
      @user.password_confirmation = ''
      @user.valid?
      expect(@user.errors.full_messages).to include("Password confirmation doesn't match Password")
    end

    it 'user_typeが空では登録できない' do
      @user.user_type = ''
      @user.valid?
      expect(@user.errors.full_messages).to include("User type can't be blank")
    end

    it 'user_typeは1か2でないと登録できない(3より小さい必要がある)' do
      @user.user_type = 3
      @user.valid?
      expect(@user.errors.full_messages).to include('User type must be less than 3')
    end

    it 'user_typeは1か2でないと登録できない(0より大きい必要がある)' do
      @user.user_type = 0
      @user.valid?
      expect(@user.errors.full_messages).to include('User type must be greater than 0')
    end

  end
 end
end
