class CreateInvites < ActiveRecord::Migration[5.0]
  def change
    create_table :invites do |t|
      t.string :name
      t.boolean :guest
      t.string :guest_name
      t.integer :code

      t.timestamps
    end
  end
end
