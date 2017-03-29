# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Invite.create([
                { name: 'Francine John', guest: true, guest_name: 'Rob John', code: 3867 },
                { name: 'Brian John', guest: true, guest_name: 'Hope Dean', code: 4042 },
                { name: 'Mini Reid', guest: true, guest_name: 'Charles Reid', code: 7825 },
                { name: 'Christine Kubik', guest: false, code: 8794 },
                { name: 'Cassandra Kubik', guest: true, code: 2045 },
                { name: 'Guy Coulas', guest: false, code: 7830 },
                { name: 'Dawn Coulas', guest: true, guest_name: 'Leonard Coulas', code: 1637 },
                { name: 'Matthew Coulas', guest: false, code: 2596 },
                { name: 'Evelyn John', guest: true, guest_name: 'Derek Betty', code: 9231 },
                { name: 'Norbert John', guest: false, code: 3683 },
                { name: 'Sean Redmond', guest: false, code: 9080 },
                { name: 'Connor Redmond', guest: false, code: 5673 },
                { name: 'Paige Redmond', guest: false, code: 1345 },
                { name: 'Daniel Redmond', guest: true, guest_name: 'Amy Redmond', code: 3628 },
                { name: 'Barbara Redmond', guest: true, guest_name: 'Donald Redmond', code: 2689 },
                { name: 'Eunice Reid', guest: false, code: 1565 },
                { name: 'Mary Chiesa', guest: true, guest_name: 'Dino Chiesa', code: 3489 },
                { name: 'Karen Elliot', guest: true, guest_name: 'Joff Elliot', code: 2832 },
                { name: 'Greg Chiesa', guest: true, guest_name: 'Christina', code: 5089 },
                { name: 'Gary Nadon', guest: true, guest_name: 'Moreen Nadon', code: 2309 },
                { name: 'Cyril Stencil', guest: true, guest_name: 'Beeb Nadon', code: 1432 },
                { name: 'Mike Albert', guest: true, guest_name: 'Teresa Albert', code: 1579 },
                { name: 'Megan Hannath', guest: true, guest_name: 'Mohammed Kahn', code: 2347 },
                { name: 'Kristie Somers', guest: false, code: 1835 },
                { name: 'Kevin Lough', guest: false, code: 2793 },
                { name: 'Kristina Magalhaes', guest: false, code: 1478 },
                { name: 'Rajeev Sarvaria', guest: false, code: 4738 },
                { name: 'Kyle Mundell', guest: true, guest_name: 'Cerys McGuinness', code: 2567 },
                { name: 'Filip Rangelov', guest: false, code: 9256 },
                { name: 'Pablo Lleras', guest: true, guest_name: 'Katie Duguid', code: 7232 },
                { name: 'Kevin Logan', guest: false, code: 5911 },
                { name: 'Eric Witzel', guest: false, code: 3546 },
                { name: 'Brandon Skinner', guest: false, code: 2368 },
                { name: 'Kerry Cooper', guest: false, code: 5546 },
                { name: 'Mitch Patterson', guest: true, guest_name: 'Amy Allen', code: 3267 },
                { name: 'Mike Lalande', guest: true, code: 2957 },
                { name: 'Joey House', guest: false, code: 6738 },
                { name: 'Ryan Spooner', guest: false, code: 9255 },
                { name: 'Jeremy Nichols', guest: false, code: 4863 },
                { name: 'Jake Buller', guest: false, code: 8365 },
                { name: 'Mike Kovacevic', guest: true, guest_name: 'Emily Champagne', code: 4839 },
                { name: 'Justin Williams', guest: true, guest_name: 'Megan Elizabeth', code: 1936 },
                { name: 'Ashley Baetson', guest: true, guest_name: 'Josh Woods', code: 1865 },
                { name: 'Emily Halverson-Duncan', guest: false, code: 7972 },
                { name: 'Keetje Eichhorn', guest: true, code: 5825 },
                { name: 'Kaitlyn Burden', guest: false, code: 7758 },
                { name: 'Lauren Dunlop', guest: false, code: 3352 },
                { name: 'Darren Denomme', guest: true, code: 2735 },
                { name: 'Charles Lough', guest: true, guest_name: 'Sandy Lough', code: 1638 },
                { name: 'Jeffery Lough', guest: true, guest_name: 'Courtney Smith', code: 4534 },
                { name: 'Erin Lough', guest: false, code: 3746 },
                { name: 'Chris Neilson', guest: false, code: 2198}
              ])
johnny = Invite.create(name: 'John Coulas', guest: true, guest_name: 'Janine Coulas', code: 8997)
Child.create(invite: johnny, name: 'Lyla')
Child.create(invite: johnny, name: 'Nathan')

mark = Invite.create(name: 'Mark Reid', guest: true, guest_name: 'Kathleen Reid', code: 7453)
Child.create(invite: mark, name: 'Jenna')
Child.create(invite: mark, name: 'Trent')
Child.create(invite: mark, name: 'Krista')

patti = Invite.create(name: 'Patti Redmond', guest: false, code: 4562)
Child.create(invite: patti, name: 'Islay')
