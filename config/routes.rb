Rails.application.routes.draw do
  root 'root#index'
  resources :root, only: [:index]
  get '/invites/:code' => 'invites#show'
  patch '/invites/:id' => 'invites#update'
end
