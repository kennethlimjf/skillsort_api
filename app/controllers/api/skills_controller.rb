module Api
  class SkillsController < ApplicationController
    def index
      render json: Api::Skill.only(:name, :description).all
    end
  end
end