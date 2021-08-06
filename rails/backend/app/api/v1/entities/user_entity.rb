module V1
  module Entities
    class UserEntity < Grape::Entity
      expose :id, :username, :email, :password
    end
  end
end