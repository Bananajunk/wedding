Rails.application.routes.draw do
  root 'root#index'
  resources :root, only: [:index]
end
