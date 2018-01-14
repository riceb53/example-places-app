Rails.application.routes.draw do
  get '/places' => 'places#index'

  post '/places' => 'places#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
