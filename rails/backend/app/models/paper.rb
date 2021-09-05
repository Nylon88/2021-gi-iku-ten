class Paper < ApplicationRecord
  with_options presence: true do
    validates :url
    validates :title
    validates :abstract
    validates :writer
    validates :year
    validates :publisher
    validates :citations
  end

  has_many :picks
end
