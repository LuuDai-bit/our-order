Rails.application.routes.draw do
  resources :users, only: %i(index show update create destroy)
end
