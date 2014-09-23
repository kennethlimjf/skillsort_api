# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

`mongoimport --db skillsort --collection skills --type csv --headerline --file db/csv_seed/skill_data.csv`
`mongoimport --db skillsort --collection axes --type csv --headerline --file db/csv_seed/axis_data.csv`
