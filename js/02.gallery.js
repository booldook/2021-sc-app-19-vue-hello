new Vue({
	el: '#app',
	data: {
		imgs: null,
		src: '',
		title: ''
	},
	async created() { // $(document).ready(), document.load()
		const { data } = await axios.get('../json/foods.json')
		this.imgs = data
		this.src = this.imgs[0].src
		this.title = this.imgs[0].title
	},
	methods: {
		showImg(e) {
			this.src = e.target.src
			this.title = e.target.alt
		}
	}
})