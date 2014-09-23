module Api
  class Axis
    include Mongoid::Document

    store_in collection: "axes", database: "skillsort"

    field "Number", as: :number
    field "Name", as: :name
  end
end