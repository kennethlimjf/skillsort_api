module Api
  class SkillsController < ApplicationController
    def index
      render json: { test: "test123" }
    end
  end
end