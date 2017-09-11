const section3Data = [
{
		position: 'center',
		heading: 'Create',
		text: 'We are a collective of data scientists, tech engineers and creative pioneers who have cultivated world class experience in sports. Our fan insights inspire technology led ideas brought to life through our products, platforms and service-led experiences.'
},
{
		position: 'center',
		heading: 'Curate',
		text: 'We identify, incubate and accelerate technology based start-ups to create disruptive sport concepts for global sports fans.'
}, 
{
		position: 'center',
		heading: 'Collaborate',
		text: 'With decades of sports marketing experience and envied connectivity in the sector, we work side-by-side with high profile sports leagues, teams and digital platforms to ensure the best exposure and access to our ideas by global fan communities.'
}];

const section4Data = [
	{
		text: '... A drone had sense and avoid technology that enabled it to safely zip between the cars on an F1 track, capturing the ultimate slow motion overtakes, without danger or distraction to the drivers.',
		heading: 'Imagine if...'
	},
	{
		text: '... Football clubs used wearable tech to select its teams not only based its players physical performance in training, but on their mental preparedness.',
		heading: 'Imagine if...'
	}, 
	{
		text: '... An A.I. chatbot who’s deep learning was so in touch with sport that it could serve up a series of informed opinions about any game, player or tournament you asked of it. Bet you’d have fun with that.',
		heading: 'Imagine if...'
	},
	{
		text: '... Sports fans trusted their identity to the Blockchain, linked it to a cryptocurrency, and never had to show a ticket again to gain entry.',
		heading: 'Imagine if...'
	},
	{
		text: '... Live match feeds were not monopolised by big organisations, but shared by many in any language you want, at a price you can afford.',
		heading: 'Imagine if...'
	},
	{
		text: '... You could be transported to an iconic moment in sport history and experience the action play out around you in a virtual world so immersive, your brain can’t tell what’s real.',
		heading: 'Imagine if...'
	}
];

const time = 750;

$(document).ready(() => {

	const	pageLoader = (index) => {
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
		else {
			$('.tint').removeClass('removeTint');
			$('.subSection').removeClass('scaleBackground');
			$(`.backgroundWrapper:not(#section${index}Background)`).removeClass('scaleBackground');
			// $(`#section${index}Background`).addClass('scaleBackground');
			$(`#section${index}`).find(`.backgroundWrapper`).addClass('scaleBackground');
			$(`#section${index}`).find('.tint').addClass('removeTint');
		}
	};

	pageLoader(parseInt(window.location.hash.replace('#', '')));

	const populateSection = (sectionNumber, idx, dataArray) => {

		$(`#section${sectionNumber}Background${idx}`).siblings('.backgroundWrapper').map((ix, ele) => {
			$(ele).css({opacity: 0});
		});

		$(`#section${sectionNumber}Background${idx}`).css({
			'background-position': 'center center',
			'transform': 'scale(1.1)',
			'opacity': 1
		});

		if(sectionNumber !== 2) {

			if(dataArray[idx].heading) {
				$(`#section${sectionNumber} > .textWrapper`).find('.heading').html(dataArray[idx].heading);
			}
			$(`#section${sectionNumber} > .textWrapper`).find('p').html(dataArray[idx].text);
		}
	};

	populateSection(3, 0, section3Data);
	populateSection(4, 0, section4Data);

	let section2ImageIdx = 0;

	const section2ImageControler = () => {

		$(`#section2`).find('.tint').removeClass('removeTint');
		$(`#section2Background${section2ImageIdx}`).removeClass('scaleBackground');
		populateSection(2, section2ImageIdx, null);
		
		setTimeout(() => {
			// pageLoader(2);
			// $(`.backgroundWrapper:not(#section2Background)`).removeClass('scaleBackground');
			// $(`#section${index}Background`).addClass('scaleBackground');
			$(`#section2`).find(`.backgroundWrapper`).addClass('scaleBackground');
			$(`#section2`).find('.tint').addClass('removeTint');
		}, 500);

		if(section2ImageIdx === 2) {
			section2ImageIdx = 0;
		} else {
			section2ImageIdx++;
		}
	};

	section2ImageControler();

	setInterval(() => {
		section2ImageControler();
	}, 15000);

	const handlePaninationButtonClick = (e) => {

		const idx = parseInt($(e.target).attr('data-index'));
		const sectionId = $(e.target).closest('section').attr('id');
		let relevantDataArray;

		$(`#${sectionId}`).find('.tint').removeClass('removeTint');
		$(`#${sectionId}Background${idx}`).removeClass('scaleBackground');
		$(`.${sectionId}PaginatorButton`).removeClass('active');
		$(e.target).addClass('active');

		switch(parseInt($(`#${sectionId}`).attr('data-index'))) {
			case 3:
				relevantDataArray = section3Data;
				break;
			case 4:
				relevantDataArray = section4Data;
				break;
		}

		populateSection(parseInt($(`#${sectionId}`).attr('data-index')), idx, relevantDataArray);

		setTimeout(() => {
			pageLoader(parseInt($(`#${sectionId}`).attr('data-index')));
		}, 500);

		if(sectionId !== 'section2'){
			$(`#${sectionId}`).find('.heading, p').addClass('fadeIn');
			$(`#${sectionId}`).on('transitionend webkitTransitionEnd oTransitionEnd', (es) => {
	    	$(`#${sectionId}`).find('.heading, p').removeClass('fadeIn');
			});
		}
	};

	$('.section3PaginatorButton, .section4PaginatorButton').click((e) => {
		handlePaninationButtonClick(e);
	});

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

	$('.clickable').click((e) => {
		let currentSection = $(e.target).closest($('.subSection'));
		currentSection.removeClass('closed').addClass('open');
		currentSection.find('.tint').removeClass('addTint').addClass('removeTint');
		currentSection.siblings('.subSection').map((idx, section) => {
			$(section).removeClass('open').addClass('closed');
			$(section).find('.tint').removeClass('removeTint').addClass('addTint');
			$(section).find('.button, p').removeClass('fadeIn');
		});
		currentSection.on('transitionend webkitTransitionEnd oTransitionEnd', (es) => {
    	$('.subSection.open').find('.button, p').addClass('fadeIn');
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
			$('#headerShape, #footer').addClass('moveOffScreen');
			$('#video').get(0).play();
		} else {
			var timeout = setTimeout(() => {
				$('#headerShape, #footer').removeClass('moveOffScreen');
				$('#video').get(0).pause();
				clearTimeout(timeout);
			}, time);
		}
	}, 250);


	$('.nav_link').click((e) => {
		const pageIdx = parseInt($(e.target).attr('data-index'));
		$('#scrollerWrapper').moveTo(pageIdx);
	});

	var burger = document.getElementById('main-burger'), 
  nav = document.getElementById('mainNav');

  function navControl() {

    if(burger.classList.contains('burger--active')) {

      nav.classList.remove('nav_open');
      burger.classList.remove('burger--active');
      document.body.style.position = 'relative';
    } 
    else {
      burger.classList.add('burger--active');
      nav.classList.add('nav_open');
      document.body.style.position = 'fixed';
    }
  }

  burger.addEventListener('click', navControl);

  var navLinks = document.querySelectorAll('.nav_link');

  navLinks.forEach(function(navLink) {

    navLink.addEventListener('click', function() {

      if(burger.classList.contains('burger--active')) {

        nav.classList.remove('nav_open');
        burger.classList.remove('burger--active');
        document.body.style.position = 'relative';
      } 
    });
  });

  window.addEventListener('resize', function() {
    if(window.innerWidth > 1000 && nav.classList.contains('nav_open')) {
      navControl();
      nav.classList.remove('nav_open');
    }
  });
});


