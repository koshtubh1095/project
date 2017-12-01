class Subcategory < ApplicationRecord
	has_many :subsubcategories
	belongs_to :category
end
