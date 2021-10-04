new Vue({
	el: '#app',
	data: {
		imgs: null,
		src: '',
		title: ''
	},
	created() { // $(document).ready(), document.load()
		this.imgs = imgs
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