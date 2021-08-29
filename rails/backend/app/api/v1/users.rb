module V1
  class Users < Grape::API
    resources :users do
      desc '新規登録時のレスポンス'
      params do
        requires :uid, type: String
      end
      post '/' do
        @user = User.create(uid: params[:uid])
      end
    end
  end
end