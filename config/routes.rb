Rails.application.routes.draw do
  devise_for :users
  root to: 'posts#index'

  resources :posts, only: [:index, :new, :create, :show, :update, :destroy] do
    resources :comments, only: [:create,]
    end
   end
