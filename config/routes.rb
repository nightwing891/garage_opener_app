Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  get '*other', to: 'static#index'
end
