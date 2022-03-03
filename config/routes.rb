Rails.application.routes.draw do
  root 'static#index'
  namespace :api, defaults: { format: 'json' } do
    get 'grettings', to: 'grettings#index'
  end
end
