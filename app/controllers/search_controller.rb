class SearchController < ApplicationController
	def index
		@results = []
		if params[:category].present? || params[:subcategory].present?
				names = params[:category].split(',') if params[:category].present?
				sub_names = params[:subcategory].split(',') if params[:subcategory].present?
				if names.present?
				names.each do |nam|
					# binding.pry
					where_query = {}
					query = '*'
					where_query['category'] = nam.strip if nam.present?
					@res = Category.search(query, where: where_query, load: false)
					@total_results = @res.response['hits']['total']
					@res.each do |res|
						@results << {
							category: res.category,
							subcategory: res.subcategory,
							subsubcategory: res.subsubcategory,
							product: res.product 
						} 
					end

				end
			end
				if sub_names.present?
				sub_names.each do |nam|
					# binding.pry
					where_query = {}
					query = '*'
					where_query['category'] = nam.strip if nam.present?
					@res = Category.search(query, where: where_query, load: false)
					@total_results = @res.response['hits']['total']
					@res.each do |res|
						@results << {
							category: res.category,
							subcategory: res.subcategory,
							subsubcategory: res.subsubcategory,
							product: res.product 
						} 
					end
				end
			end
			end
					respond_to do |format|
						format.json { render :json=>  @results.to_json}
						format.html { @results}
					end
	end
end
