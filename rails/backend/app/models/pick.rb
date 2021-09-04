class Pick < ApplicationRecord
    validates :paper_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :paper
end
