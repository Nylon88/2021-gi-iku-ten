class AddColumnsToPapers < ActiveRecord::Migration[6.0]
  def change
    add_column :papers, :title, :string, null: false
    add_column :papers, :abstract, :text, null: false
    add_column :papers, :writer, :string, null: false
    add_column :papers, :year, :string, null: false
    add_column :papers, :publisher, :string, null: false
    add_column :papers, :citations, :integer, null: false
  end
end
