module Api
  class Skill
    include Mongoid::Document

    store_in collection: "skills", database: "skillsort"

    field "Number", as: :number
    field "Name", as: :name
    field "Description", as: :description
  end
end