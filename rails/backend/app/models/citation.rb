class Citation < ApplicationRecord
  #空欄防止
  validates :count, presence: true
end
