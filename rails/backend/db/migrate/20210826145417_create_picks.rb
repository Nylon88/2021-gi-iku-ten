class CreatePicks < ActiveRecord::Migration[6.0]
  def change
    create_table :picks do |t|
      t.references :paper, null: false
      t.references :user, null: false

      t.timestamps
    end
    add_index :picks, [:paper_id, :user_id], unique: true
  end
end
