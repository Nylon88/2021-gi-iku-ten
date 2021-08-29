class CreatePicks < ActiveRecord::Migration[6.0]
  def change
    create_table :picks do |t|
      t.references :paper_id, null: false
      t.references :user_id, null: false

      t.timestamps
    end
  end
end
