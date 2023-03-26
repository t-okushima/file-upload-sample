class ImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :order, :url

  def url
    object.file.attached? ? url_for(object.file) : nil
  end
end
