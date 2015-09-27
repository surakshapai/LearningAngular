(function() {
	var app = angular.module('book', ['store-products']);

	var books = [
		{
			name: 'The Alchemist',
			author: 'Paulo Coehlo',
			rating: 4,
			hasReleased: true,
			images: [
				'./images/alchemist.jpg',
				'./images/alchemist.jpg',
				'./images/alchemist.jpg',
				'./images/alchemist.jpg'
			],
			reviews: [
				{
					star: 5,
					review: 'Great Book!',
					author: 'spai'
				},
				{
					star: 4,
					review: 'Yada yada',
					author: 'Joe'
				}

			]
		},
		{
			name: 'Cracking the Coding Interview',
			author: 'Laakmann',
			rating: 5,
			hasReleased: false,
			images: [
				'./images/ctci.jpg',
				'./images/ctci.jpg',
				'./images/ctci.jpg',
				'./images/ctci.jpg'
			],
			reviews: [
				{
					star: 5,
					review: 'Learned a lot',
					author: 'spai'
				},
				{
					star: 5,
					review: 'Lorem Ipsum',
					author: 'Joe'
				}

			]
		},
		{
			name: 'Assassins Creed - Brotherhood',
			author: 'Corey May',
			rating: 5,
			hasReleased: true,
			images: [
				'./images/ac2.jpg',
				'./images/ac2.jpg',
				'./images/ac2.jpg',
				'./images/ac2.jpg'
			],
			reviews: [
				{
					star: 5,
					review: 'Feel like Im playing it as I read it',
					author: 'spai'
				},
				{
					star: 4,
					review: 'Revelations coming up next!',
					author: 'Joe'
				}

			]
		},
		{
			name: 'Mean machine',
			author: 'Someone',
			rating: 5,
			hasReleased: false,
			images: [
				'./images/mm.jpeg',
				'./images/mm.jpeg',
				'./images/mm.jpeg',
				'./images/mm.jpeg'
			],
			reviews: [
				{
					star: 5,
					review: 'MEAN stack ftw!',
					author: 'spai'
				},
				{
					star: 4,
					review: 'Angular supports Node very well',
					author: 'Joe'
				}

			]
		}
	]
		

	app.controller('BookController', function(){
		this.books = books;
	});

	// app.controller('PanelController', function(){
	// 	this.tab = 1;

	// 	this.select = function(tabSelected) {
	// 		this.tab = tabSelected;
	// 	}

	// 	this.isSelected = function(tabSelected) {
	// 		return this.tab === tabSelected;
	// 	}
	// });

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	// app.controller('GalleryController', function(){
	// 	this.current = 0;
	// 	this.setCurrent = function(imageNumber) {
	// 		this.current = imageNumber || 0;
	// 	}
	// })

	

}) ();



