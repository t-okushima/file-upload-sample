class ImageInfo < ApplicationRecord
    has_many :images
    accepts_nested_attributes_for :images
end
