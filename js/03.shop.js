new Vue({
	el: '#app',
	data: {
		products: [],
		searchResult: [],
		query: ''
	},
	async created() {
		const { data } = await axios.get('../json/foods.json')
		this.products = data
		this.searchResult = data
	},
	methods: {
		onReset(e) {
			this.query = ''
			this.searchResult = this.products
		},
		onSearch(e) {
			this.searchResult = this.products.filter(v => v.title.includes(this.query))
		}
	}
})