class AddRsvpToChildren < ActiveRecord::Migration[5.0]
  def change
    add_column :children, :rsvp, :boolean, default: false
  end
end
