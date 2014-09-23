module Api
  class AxesController < ApplicationController
    def index
      render json: Api::Axis.only(:name).all
    end
  end
end