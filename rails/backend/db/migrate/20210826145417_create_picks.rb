class CreatePicks < ActiveRecord::Migration[6.0]
  def change
    create_table :picks do |t|
      t.references :papers_id
      t.references :users_id
      t.integer :count

      t.timestamps
    end
  end
end
