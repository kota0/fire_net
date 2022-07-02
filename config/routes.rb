Rails.application.routes.draw do
  devise_for :users
  root to: 'users#index'
  resources :posts, only: [:index, :new] do
    resources :comments, only: [:show, :new, :edit, :delete]
  end
end
