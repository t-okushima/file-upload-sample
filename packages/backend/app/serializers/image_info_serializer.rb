class ImageInfoSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :images
end
