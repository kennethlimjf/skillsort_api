Rails.application.routes.draw do
  root to: redirect("/")
  get 'api', to: 'api/skills#index'
end
