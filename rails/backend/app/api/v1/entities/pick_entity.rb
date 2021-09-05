module V1
  module Entities
    class PickEntity < Grape::Entity
      expose :url, :title, :abstract, :writer, :year, :publisher, :citations
    end
  end
end