Rails.application.routes.draw do
  devise_for :users
  root to: 'posts#index'
  resources :posts, only: [:index, :new] do
    resources :articles, only: [:index]
    resources :comments, only: [:show, :new, :edit, :delete]
  end
end
