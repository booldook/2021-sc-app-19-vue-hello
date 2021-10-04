new Vue({
	el: '#app',
	data: {
		products: [],	// 원본
		searchProducts: [],	// 검색결과
		query: ''
	},
	async created() {
		const { data } = await axios.get('../json/foods.json')
		this.products = data
		this.searchProducts = data
	},
	methods: {
		onReset(e) {
			this.query = ''
			this.searchProducts = this.products
			document.querySelector('.search-wrap input').focus()
		},
		onSearch(e) {
			this.query = e.target.value
			this.searchProducts = this.products.filter(v => {
				return v.title.toLowerCase().includes(this.query.toLowerCase()) || 
				v.description.toLowerCase().includes(this.query.toLowerCase())
			})
		}
	}
})