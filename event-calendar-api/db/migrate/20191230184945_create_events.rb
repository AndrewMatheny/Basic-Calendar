class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.integer :day
      t.integer :month
      t.string :name
      t.string :description
      t.integer :priority
      t.integer :user_id

      t.timestamps
    end
  end
end
