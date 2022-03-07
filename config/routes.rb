Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get 'grettings', to: 'grettings#index'
  end

  root 'static#index'
end
