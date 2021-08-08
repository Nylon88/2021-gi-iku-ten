module V1
  class Users < Grape::API
    resources :users do
      desc '新規登録時のレスポンス'
      params do
        requires :username, type: String
      end
      post '/' do
        @user = User.create(username: params[:username])
      end
    end
  end
end