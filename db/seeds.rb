# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comic.destroy_all
# will delete both comics and cahpters since the destroy is linked


## here i make a bunch of random comics with semi realistic data

5.times do
    hero = Faker::DcComics.hero
    heroine = Faker::DcComics.heroine
    villain = Faker::DcComics.villain
    summary = "#{hero} is a hero who battles #{villain}"
    synopsis = "The hero, #{hero}, and the heroine, #{heroine}, battle evil and crime. what will the evil #{villain} come up with this time! More detailed synopsis of the story will go here..."
    new_comic = Comic.create(
        title: Faker::DcComics.title,
        author: Faker::Name.name,
        sum: summary,
        syn: synopsis,
    )
    3.times do
        hero2 = Faker::Superhero.name
        power = Faker::Superhero.power
        desc = Faker::Superhero.descriptor
        title = "#{hero} vs. #{hero2}"
        chap_sum = "#{hero} takes on the #{desc} #{hero2} with his #{power} powers"
        new_comic.chaps.create(
            title: title,
            sum: chap_sum,
        )
    end
end