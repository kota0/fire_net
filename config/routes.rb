Rails.application.routes.draw do
  devise_for :users

  root to: 'posts#new'
  resources :posts, only: [:index, :new, :create] do
    resources :articles, only: [:index]
    resources :comments, only: [:show, :new, :create, :edit, :delete]

  end
end
