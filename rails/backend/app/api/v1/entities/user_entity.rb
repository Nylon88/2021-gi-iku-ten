module V1
  module Entities
    class UserEntity < Grape::Entity
      expose :username
    end
  end
end