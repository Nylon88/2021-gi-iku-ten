module V1
  class Users < Grape::API
    resources :users do
      desc '新規登録時のレスポンス'
      params do
        requires :username, type: String
        requires :email, type: String
        requires :password, type: String
      end
      post '/' do
        @user = User.new(username: params[:username], email: params[:email], password: params[:password])
        if @user.save
          present @user, with: V1::Entities::UserEntity
        else
          present @user.errors.full_messages
        end
      end

      desc 'ログイン時のレスポンス'
      params do
        requires :email, type: String
        requires :password, type: String
      end
      get '/' do
        @user = User.find_by(email: email)
        if @user
          present @user, with: V1::Entities::UserEntity
        else
          present @user.errors.full_messages
        end
      end
    end
  end
end