new Vue({
	el: '#app',
	data: {
		products: []
	},
	async created() {
		const { data } = await axios.get('../json/foods.json')
		this.products = data
	},
	methods: {

	}
})