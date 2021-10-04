const imgs = [
	{ id: 1, src: '../img/f1.jpg', title: '아이스크림' },
	{ id: 2, src: '../img/f2.jpg', title: '연어 스테이크' },
	{ id: 3, src: '../img/f3.jpg', title: '샌드위치' },
	{ id: 4, src: '../img/f4.jpg', title: '스테이크' },
	{ id: 5, src: '../img/f5.jpg', title: '와인' },
	// { id: 6, src: '../img/f6.jpg', title: '체리' },
	// { id: 7, src: '../img/f7.jpg', title: '크로상' },
]

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