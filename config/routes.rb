Rails.application.routes.draw do
  devise_for :users
  root to: 'posts#index'

  resources :posts, only: [:index, :new, :create, :show] do
    resources :comments, only: [:show, :new, :create, :edit, :delete]
    end
   end
