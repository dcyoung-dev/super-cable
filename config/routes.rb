Rails.application.routes.draw do
  resources :superheros

  root to: 'superheros#index'
end
