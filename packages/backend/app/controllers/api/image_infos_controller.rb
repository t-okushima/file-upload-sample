class Api::ImageInfosController < ApplicationController
    def index
        imageInfos = ImageInfo.order(created_at: :desc)
        render json: imageInfos
    end

    def create
        imageInfo = ImageInfo.new(image_info_params)
        
        if imageInfo.save
            render json: { title: imageInfo.title, images: imageInfo.images}
        else
            render json: { message: 'save error'}
        end
    end

    def image_info_params
        params.require(:imageInfo).permit(
            :title,
            images_attributes: [:order, :file]
        )
    end
end
