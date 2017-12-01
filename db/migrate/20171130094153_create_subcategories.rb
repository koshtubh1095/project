class CreateSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :subcategories do |t|
    	t.string 	:subcategory_name
    	t.integer :category_id
      t.timestamps
    end
  end
end
