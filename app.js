var vueApp = new Vue( {
	el: '#vueApp',
	data: {
		sec1: {},
		sec2: {
			text: [
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat veritatis praesentium sequi, magnam maxime odit excepturi ex velit itaque possimus optio mollitia, similique soluta amet quaerat hic voluptatum magni tempore qui harum? Atque minus aliquam reprehenderit praesentium ipsum aperiam molestiae deleniti, sit ratione quod alias adipisci debitis sequi officiis magni?',
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci tempora ipsam pariatur sequi voluptas quisquam doloribus dolore vero eligendi nisi ducimus qui laborum officiis temporibus, quasi dicta reprehenderit a atque.'
			]
		},
		sec3: {
			portfolios: [
				{
					title: 'Aplikasi Gizi SMA N 1 Pati',
					imageUrl: 'assets/imgs/portfolios/countdown.png',
					using: [
						'assets/svgs/brands/bootstrap-4.svg',
					],
					url: '',
				},
				{
					title: 'Countdown',
					imageUrl: 'assets/imgs/portfolios/countdown.png',
					using: [
						'assets/svgs/brands/tailwindcss.svg',
						'assets/svgs/brands/sass.svg',
					],
					url: '',
				},
				{
					title: 'Pengoreksi Pilihan Ganda',
					imageUrl: 'assets/imgs/portfolios/countdown.png',
					using: [
						'assets/svgs/brands/vue-js.svg',
						'assets/svgs/brands/bootstrap-4.svg',
					],
					url: '',
				},

			]
		},
		sosmed: {
			facebook: {
				name: 'facebook',
				text: 'Lutfi Andriyanto',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>`,
				url: 'https://facebook.com',
			},
			twitter: {
				name: 'twitter',
				text: '@ltfandri',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>`,
				url: 'https://twitter.com/ltfandri',
			},
			github: {
				name: 'github',
				text: '@lutfiandri',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>`,
				url: 'https://github.com/lutfiandri',
			},
			phone: {
				name: 'phone',
				text: '+62 852 2949 0001',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>`,
				url: '',
			}

		},
		separator: {
			sep1: `<svg class="separator" preserveAspectRatio="none" viewBox="0 0 1440 76" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M60 49.6327H0V76H1440V0L1380 5.53195C1320 10.8571 1200 22.2313 1080 35.8286C1060.12 38.1149 1040.25 40.4764 1020.37 42.8379C920.25 54.7343 820.125 66.6307 720 68.917C635.634 70.9888 551.269 65.9821 466.903 60.9754C431.269 58.8606 395.634 56.7459 360 55.1646C240 49.6327 120 49.6327 60 49.6327Z" fill="#0099FF" /></svg>`,
			sep2: `<svg class="separator" preserveAspectRatio="none" viewBox="0 0 1440 118" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M120 0H0V118H1440V104.309L1320 86.9028C1314.47 86.1125 1308.68 85.2839 1302.65 84.4205C1177.88 66.5502 948.939 33.7622 720 17.4066C480 0 240 0 120 0Z" fill="white" /></svg>`,
			sep3: `<svg class="separator" preserveAspectRatio="none" viewBox="0 0 1440 131" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M120 72.7778L0 58.2222V131H1440V0L1320 24.2896C1316.38 25.0112 1312.65 25.7557 1308.82 26.5214C1185.52 51.1424 952.761 97.6229 720 106.71C480 116.444 240 87.3333 120 72.7778Z" fill="#0099FF"/></svg>
			`
		}
	},
	methods: {
		openLink: function ( url ) {
			if ( url != '' ) {
				window.open( url );
			}
		}
	},
} );