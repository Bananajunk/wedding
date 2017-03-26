# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Invite.create([
                { name: 'Francine John', guest: true, guest_name: 'Rob John' },
                { name: 'Brian John', guest: true, guest_name: 'Hope Dean' },
                { name: 'Mini Reid', guest: true, guest_name: 'Charles Reid' },
                { name: 'Christine Kubik', guest: false },
                { name: 'Cassandra Kubik', guest: true },
                { name: 'Guy Coulas', guest: false },
                { name: 'Dawn Coulas', guest: true, guest_name: 'Leonard Coulas' },
                { name: 'Evelyn John', guest: true, guest_name: 'Derek Betty' },
                { name: 'Norbert John', guest: false },
                { name: 'Sean Redmond', guest: false },
                { name: 'Connor Redmond', guest: false },
                { name: 'Paige Redmond', guest: false },
                { name: 'Daniel Redmond', guest: true, guest_name: 'Amy Redmond' },
                { name: 'Barbara Redmond', guest: true, guest_name: 'Donald Redmond' },
                { name: 'Eunice Reid', guest: false },
                { name: 'Mary Chiesa', guest: true, guest_name: 'Dino Chiesa' },
                { name: 'Karen Elliot', guest: true, guest_name: 'Joff Elliot' },
                { name: 'Greg Chiesa', guest: true, guest_name: 'Christina' },
                { name: 'Gary Nadon', guest: true, guest_name: 'Moreen Nadon' },
                { name: 'Jimmy Redmond', guest: false },
                { name: 'Ceryl Stencil', guest: true, guest_name: 'Beeb Nadon' },
                { name: 'Mike Albert', guest: true, guest_name: 'Teresa Albert' },
                { name: 'Megan Hannath', guest: true, guest_name: 'Mohammed Kahn' },
                { name: 'Kristie Somers', guest: false },
                { name: 'Kevin Lough', guest: false },
                { name: 'Kristina Magalhaes', guest: false },
                { name: 'Rajeev Sarvaria', guest: false },
                { name: 'Kyle Mundell', guest: true, guest_name: 'Cerys McGuinness' },
                { name: 'Filip Rangelov', guest: false },
                { name: 'Pablo Lleras', guest: true, guest_name: 'Katie Duguid' },
                { name: 'Kevin Logan', guest: false },
                { name: 'Eric Witzel', guest: false },
                { name: 'Brandon Skinner', guest: false },
                { name: 'Kerry Cooper', guest: false },
                { name: 'Mitch Patterson', guest: true, guest_name: 'Amy Allen' },
                { name: 'Mike Lalande', guest: true },
                { name: 'Joey House', guest: false },
                { name: 'Ryan Spooner', guest: false },
                { name: 'Jeremy Nichols', guest: false },
                { name: 'Jake Buller', guest: false },
                { name: 'Mike Kovacevic', guest: true, guest_name: 'Emily Champagne' },
                { name: 'Justin Williams', guest: true, guest_name: 'Megan Elizabeth' },
                { name: 'Ashley Baetson', guest: true, guest_name: 'Josh Woods' },
                { name: 'Emily Halverson-Duncan', guest: false },
                { name: 'Keetje Eichhorn', guest: true },
                { name: 'Kaitlyn Burden', guest: false },
                { name: 'Lauren Dunlop', guest: false },
                { name: 'Darren Denomme', guest: true },
                { name: 'Charles Lough', guest: true, guest_name: 'Sandy Lough' },
                { name: 'Jeffery Lough', guest: true, guest_name: 'Courtney Smith' },
                { name: 'Erin Lough', guest: false }
              ])
johnny = Invite.create(name: 'John Coulas', guest: true, guest_name: 'Janine Coulas')
Child.create(invite: johnny, name: 'Lyla')
Child.create(invite: johnny, name: 'Nathan')

mark = Invite.create(name: 'Mark Reid', guest: true, guest_name: 'Kathleen Reid')
Child.create(invite: mark, name: 'Jenna')
Child.create(invite: mark, name: 'Trent')
Child.create(invite: mark, name: 'Krista')

patti = Invite.create(name: 'Patti Redmond', guest: false)
Child.create(invite: patti, name: 'Islay')
