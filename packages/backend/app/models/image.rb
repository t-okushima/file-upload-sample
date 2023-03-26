class Image < ApplicationRecord
  belongs_to :image_info
  has_one_attached :file
end
