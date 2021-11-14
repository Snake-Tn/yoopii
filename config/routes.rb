Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "application#home"

  post '/api/authenticate', to: 'api/auth#authenticate'


  post '/api/rooms', to: 'api/rooms#create'
  post '/api/rooms/:id/guests', to: 'api/rooms#join'

  get '/api/games', to: 'api/games#index'

  post '/api/players', to: 'api/players#create'
end
