class CreateSuperheros < ActiveRecord::Migration[6.0]
  def change
    create_table :superheros do |t|
      t.string :name
      t.string :power
      t.string :weakness

      t.timestamps
    end
  end
end
