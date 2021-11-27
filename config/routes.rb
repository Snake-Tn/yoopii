Rails.application.routes.draw do

  namespace :api do
    resources :rooms, only: %i[index create show destroy] do
      resources :guests, only: %i[index create destroy]
    end
    resources :players, only: [:create]

    resources :games, only: [:index]
    resources :tokens, only: [:create]
  end

  get '*any', '/', to: 'application#show'

end
