class User < ApplicationRecord
  validates :uid, presence: true

  has_many :picks
end
