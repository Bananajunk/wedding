class CreateChildren < ActiveRecord::Migration[5.0]
  def change
    create_table :children do |t|
      t.integer :invite_id
      t.string :name

      t.timestamps
    end
  end
end
