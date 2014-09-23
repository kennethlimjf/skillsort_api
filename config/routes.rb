Rails.application.routes.draw do
  root to: redirect("/")
  namespace :api do
    get 'skills', to: 'skills#index'
    get 'axes', to: 'axes#index'
  end
end
