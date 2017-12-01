class CreateSubsubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :subsubcategories do |t|
    	t.string  :subsubcategory_name
    	t.integer :subcategory_id 
      t.timestamps
    end
  end
end
