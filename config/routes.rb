Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      get 'resume', to: 'resume#show'
    end
  end
end
