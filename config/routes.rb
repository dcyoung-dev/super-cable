Rails.application.routes.draw do
  resources :superheros do
    collection do
      get :clear
    end
  end

  root to: 'superheros#index'
end
