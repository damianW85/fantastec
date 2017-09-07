const section2Backgrounds = [
{
		path: '../assets/images/aboutUs/1.01.jpg',
		position: 'center'
},
{
		path: '../assets/images/aboutUs/1.02.jpg',
		position: 'center'
}, 
{
		path: '../assets/images/aboutUs/1.03.jpg',
		position: 'center right'
}
];

const section3Data = [
{
		// path: '../assets/images/howWeInnovate/2.01.jpg',
		position: 'center',
		heading: 'Create',
		text: 'We are a collective of data scientists, tech engineers and creative pioneers who have cultivated world class experience in sports. Our fan insights inspire technology led ideas brought to life through our products, platforms and service-led experiences.'
},
{
		// path: '../assets/images/howWeInnovate/2.02.jpg',
		position: 'center',
		heading: 'Curate',
		text: 'We identify, incubate and accelerate technology based start-ups to create disruptive sport concepts for global sports fans.'
}, 
{
		// path: '../assets/images/howWeInnovate/2.03.jpg',
		position: 'center',
		heading: 'Collaborate',
		text: 'With decades of sports marketing experience and envied connectivity in the sector, we work side-by-side with high profile sports leagues, teams and digital platforms to ensure the best exposure and access to our ideas by global fan communities.'
}];

const section4Backgrounds = [
  {
    path: '../assets/images/imagineIf/3.01.jpg',
    position: 'center'
  },
  {
    path: '../assets/images/imagineIf/3.02.jpg',
    position: 'center'
  }, 
  {
    path: '../assets/images/imagineIf/3.03.jpg',
    position: 'center'
  },
  {
    path: '../assets/images/imagineIf/3.04.jpg',
    position: 'center'
  },
  {
    path: '../assets/images/imagineIf/3.05.jpg',
    position: 'center'
  },
  {
    path: '../assets/images/imagineIf/3.06.jpg',
    position: 'center'
  }
];

const time = 750;
let section3DataIndex = 0;

$(document).ready(() => {

	const	pageLoader = (index) => {
		console.log('hewgihwe');
		if(index === 5) {
			$('.tint').removeClass('removeTint');
			$('.backgroundWrapper').removeClass('scaleBackground');
			$('#section5').find('.heading').addClass('show fadeIn');
			$('.subSection').addClass('scaleBackground');
			$('.subSection').find('.tint').addClass('removeTint');
			setTimeout(() => {
				$('.subSection > .textWrapper').find('.heading').addClass('fadeIn');
			}, 1000);
		} 
		if(index === 3) {
			$('.tint').removeClass('removeTint');
			$('.subSection').removeClass('scaleBackground');
			$('.backgroundWrapper').removeClass('scaleBackground');
			$('#section3').find($('.backgroundWrapper')).addClass('scaleBackground');
			$('#section3').find('.tint').addClass('removeTint');
		} else {
			$('.tint').removeClass('removeTint');
			$('.subSection').removeClass('scaleBackground');
			$('.backgroundWrapper').removeClass('scaleBackground');
			$(`#section${index}Background`).addClass('scaleBackground');
			$(`#section${index}`).find('.tint').addClass('removeTint');
		}
	};

	const populateSection3 = (x) => {

		$(`#section3Background${x}`).siblings('.backgroundWrapper').map((idx, ele) => {
			$(ele).css({opacity: 0});
		});

		$(`#section3Background${x}`).css({
			'background-position': section3Data[x].position,
			'transform': 'scale(1.1)',
			'opacity': 1
		});

		$('#section3 > .textWrapper').find('.heading').html(section3Data[x].heading);
		$('#section3 > .textWrapper').find('p').html(section3Data[x].text);
	};

	populateSection3(0);

	$('.section3PaginatorButton').click((e) => {
		var idx = parseInt($(e.target).attr('data-index'));
		$(`#section3Background${idx}`).removeClass('scaleBackground').addClass('removeTint');
		$('.section3PaginatorButton').removeClass('active');
		$(e.target).addClass('active');
		populateSection3(idx);
		$(`#section3Background${idx}`).removeClass('removeTint');
		$(`#section3Background${idx}`).on('transitionend webkitTransitionEnd oTransitionEnd', (es) => {
    	pageLoader(idx);
		});	
	});

	// setInterval(() => {
	// 	populateSection3(section3DataIndex);
	// }, 5000);

	pageLoader(parseInt(window.location.hash.replace('#', '')));

	$('#scrollerWrapper').onepage_scroll({
		sectionContainer: "section",    
		easing: "ease-out",                 
		animationTime: time,            
		pagination: true,               
		updateURL: true,               
		beforeMove: (index) => {

		}, 
		afterMove: (index) => {
			pageLoader(index);
		},  
		loop: false,                    
		keyboard: true,                 
		responsiveFallback: false,                                    
		direction: "vertical"          
	});

	$('.clickableHeading').click((e) => {
		let currentSection = $(e.target).closest($('.subSection'));
		currentSection.removeClass('closed').addClass('open');
		currentSection.find('.tint').removeClass('addTint').addClass('removeTint');
		currentSection.siblings('.subSection').map((idx, section) => {
			$(section).removeClass('open').addClass('closed');
			$(section).find('.tint').removeClass('removeTint').addClass('addTint');
			$(section).find('p').removeClass('fadeIn');
		});
		currentSection.on('transitionend webkitTransitionEnd oTransitionEnd', (es) => {
    	$('.subSection.open').find('p').addClass('fadeIn');
		});
	});

	$('#downArrow').click(() => {
		if(window.location.hash === '#6') {
	  	$('#scrollerWrapper').moveTo(1);
	  	// $('#downArrow').css({'transform': 'rotate(180deg)'});
		} else {
			$('#scrollerWrapper').moveDown();
			// $('#downArrow').css({'transform': 'rotate(0deg)'});
			// if(window.location.hash === '#0') {
				
			// }
		}
	});

	setInterval(() => {
		if(window.location.hash === '#1' || window.location.hash === '') {
			$('#headerShape, #footer').addClass('hidden');
			$('#video').get(0).play();
		} else {
			var timeout = setTimeout(() => {
				$('#headerShape, #footer').removeClass('hidden');
				$('#video').get(0).pause();
				clearTimeout(timeout);
			}, time);
		}
	}, 250);

	$('#section2Background').css({
			'background-image': `linear-gradient(
	      rgba(0, 0, 0, 0.2), 
	      rgba(0, 0, 0, 0.2)
	    ), url(${section2Backgrounds[0].path})`, 
			'background-position': section2Backgrounds[0].position,
			'transform': 'scale(1.1)'
		});

	$('#section4Background').css({
			'background-image': `linear-gradient(
	      rgba(0, 0, 0, 0.2), 
	      rgba(0, 0, 0, 0.2)
	    ), url(${section4Backgrounds[0].path})`, 
			'background-position': section4Backgrounds[0].position,
			'transform': 'scale(1.1)'
		});
});


