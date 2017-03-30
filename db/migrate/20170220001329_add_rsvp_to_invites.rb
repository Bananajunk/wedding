class AddRsvpToInvites < ActiveRecord::Migration[5.0]
  def change
    add_column :invites, :rsvp, :integer, default: 0
  end
end
