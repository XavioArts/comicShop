class Comic < ApplicationRecord
    has_many :chaps, dependent: :destroy
end
