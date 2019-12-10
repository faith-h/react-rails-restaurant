class Items < ActiveRecord::Migration[6.0]
  def change
    add_belongs_to(:items, :menu)
  end
end
