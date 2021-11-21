Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "application#home"
  namespace :api do

    post '/token', to: 'token#create'

    resources :rooms, only: [:index, :create, :show, :destroy] do
      resources :guests, only: [:index, :create, :destroy]
    end
    resources :players, only: [:create]

    resources :games, only: [:index]


    # get '/api/games', to: 'api/games#index'

  end

end
