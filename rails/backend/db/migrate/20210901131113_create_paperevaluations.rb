class CreatePaperevaluations < ActiveRecord::Migration[6.0]
  def change
    create_table :paperevaluations do |t|
      t.integer :factor

      t.timestamps
    end
  end
end
