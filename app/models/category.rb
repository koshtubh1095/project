class Category < ApplicationRecord
	has_many :subcategories
	searchkick
	def search_data
		{
			category: category_name,
			subcategory: subcategory,
			subsubcategory: subsubcategory,
			product: product
		}
	end


	def subcategory
		subcategory = []
		subcategory = subcategories.pluck(:subcategory_name)
		return subcategory
	end 


	def subsubcategory
		subsubcategory = []
		subcategories.each do |s|
			s.subsubcategories.each do |ss|
				subsubcategory << ss.subsubcategory_name
			end
		end
		return subsubcategory
	end
	def product
		product = []
		subcategories.each do |s|
			s.subsubcategories.each do |ss|
				ss.products.each do |pro|
					product << pro
				end
			end
		end
		return product
	end
end
