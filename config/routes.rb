Rails.application.routes.draw do
  devise_for :users
  resources :posts, only: [:index, :show, :create,] do
   resources :comments, only: [:new, :edit, :delete]
  end

end
