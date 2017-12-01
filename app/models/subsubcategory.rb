class Subsubcategory < ApplicationRecord
	has_many :products
	belongs_to :subcategory
end
