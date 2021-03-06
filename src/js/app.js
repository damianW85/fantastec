const section3Data = [
{
		position: 'center',
		heading: 'Create',
		text: 'We are a collective of data scientists, tech engineers and creative pioneers who have cultivated world class experience in sports. Our fan insights inspire technology-led ideas brought to life through our products, platforms and service-led experiences.'
},
{
		position: 'center',
		heading: 'Curate',
		text: 'We identify, incubate and accelerate technology-based start-ups to create disruptive sport concepts for global sports fans.'
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
		text: '... Football clubs used wearable tech to select its teams not only based on its players physical performance in training, but on their mental preparedness.',
		heading: 'Imagine if...'
	}, 
	{
		text: '... An A.I. chatbot whose deep learning was so in touch with sport that it could serve up a series of informed opinions about any game, player or tournament you asked of it. Bet you’d have fun with that.',
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
let section3Idx = 0;
let section4Idx = 0;

$(document).ready(() => {

	if(window.innerWidth < 800) {
		$(window).on("message", (event) => {
		  if(event.originalEvent.source === $("#gfyCatEmbedIframe").get(0).contentWindow) {
		    if(event.originalEvent.data === 'playing') {
		    	$('#loading').addClass('hidden');
		    }
		  }
		});
	}

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
			$(`.section.active`).find(`.backgroundWrapper`).addClass('scaleBackground');
			$(`section.active`).find('.tint').addClass('removeTint');
		}
	};

	pageLoader(parseInt(window.location.hash.replace('#', '')));

	const populateSection = (sectionNumber, idx, dataArray) => {

		$(`#section${sectionNumber}Background${idx}`).siblings('.backgroundWrapper').map((ix, ele) => {
			$(ele).css({opacity: 0});
		});

		$(`#section${sectionNumber}Background${idx}`).css({
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

		if(sectionId === 'section3') {
			section3Idx = idx;
		}

		if(sectionId === 'section4') {
			section4Idx = idx;
		}

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

	$('#scrollerWrapper').moveTo(1);

	$('.clickable').click((e) => {
		let currentSection = $(e.target).closest($('.subSection'));

		if(currentSection.hasClass('open')) {
			currentSection.removeClass('open');
			currentSection.find('.button, p').removeClass('fadeIn');
			currentSection.siblings('.subSection').map((idx, section) => {
				$(section).removeClass('closed');
				$(section).find('.tint').removeClass('addTint').addClass('removeTint');
			});
		} else {
			currentSection.removeClass('closed').addClass('open');
			currentSection.on('transitionend webkitTransitionEnd oTransitionEnd', (es) => {
	    	$('.subSection.open').find('.button, p').addClass('fadeIn');
			});
			currentSection.siblings('.subSection').map((idx, section) => {
				$(section).removeClass('open').addClass('closed');
				$(section).find('.tint').removeClass('removeTint').addClass('addTint');
				$(section).find('.button, p').removeClass('fadeIn');
			});
		}
		currentSection.find('.tint').removeClass('addTint').addClass('removeTint');
	});

	$('#downArrow').click(() => {
		if($(window).height() * ($('.page').length - 1) === - $('#scrollerWrapper').offset().top) {
	  	$('#scrollerWrapper').moveTo(1);
		} else {
			$('#scrollerWrapper').moveDown();
		}
	});

	let section3Automated, automateSection3, section4Automated, automateSection4;

	const intervalManager = (flag, sectionId, time) => {
   	if(flag) {
   		if(sectionId === 'section3') {
   			automateSection3 = setInterval(() => {
	     		swipeController(sectionId, 'l');	
	     	}, time);
   		}
   		if(sectionId === 'section4') {
   			automateSection4 = setInterval(() => {
	     		swipeController(sectionId, 'l');	
	     	}, time);
   		}
     	 
   	} else {
   		if(sectionId === 'section3') {
    		clearInterval(automateSection3);
    	}
    	if(sectionId === 'section4') {
    		clearInterval(automateSection4);
    	}
   	}
	};

	setInterval(() => {
		if($('#scrollerWrapper').offset().top >= 0) {
			$('#headerShape, #footer').addClass('moveOffScreen');
			$('#video').get(0).play();
			$('.arrow').addClass('pulsate');
		} else {
			var timeout = setTimeout(() => {
				$('#headerShape, #footer').removeClass('moveOffScreen');
				$('#video').get(0).pause();
				$('.arrow').removeClass('pulsate');
				clearTimeout(timeout);
			}, time);
		}

		if($('#scrollerWrapper').offset().top < - (window.innerHeight * 4)) {
			$('#downArrow').css({'transform': 'rotate(180deg) translateX(-50%)'});
		} else {
			$('#downArrow').css({'transform': 'translateX(-50%) rotate(0deg)'});
		}

		if(window.innerWidth > 800 && !$('#loading').hasClass('hidden')) {

			if($('#video').get(0).readyState === 4) {
				$('#loading').addClass('hidden');
			}
		}
		if(window.matchMedia("(orientation: landscape)").matches && window.innerWidth < 800) {
		  $('.nav_link, #headerShape, #footer, .custom, .marker, #section5, .textWrapper').addClass('landscape');
		} else {
			 $('.nav_link, #headerShape, #footer, .custom, .marker, #section5, .textWrapper').removeClass('landscape');
		}

		if($('#section3.active').length) {
			if(section3Automated !== true) {
				section3Automated = true;
				intervalManager(true, 'section3', 7000);
			}
		} else {
			if(section3Automated === true) {
				intervalManager(false, 'section3');
				section3Automated = false;
			}
		}

		if($('#section4.active').length) {
			if(section4Automated !== true) {
				section4Automated = true;
				intervalManager(true, 'section4', 7000);
			}
		} else {
			if(section4Automated === true) {
				intervalManager(false, 'section4');
				section4Automated = false;
			}
		}
	}, 500);


	$('.nav_link').click((e) => {
		const pageIdx = parseInt($(e.target).attr('data-index'));
		$('#scrollerWrapper').moveTo(pageIdx);
		$('#menuBlockOut').addClass('hidden');

		if(burger.classList.contains('burger--active')) {
      nav.classList.remove('nav_open');
      burger.classList.remove('burger--active');
      document.body.style.position = 'relative';
    } 
	});

	$('#menuBlockOut').click((e) => {
	   e.stopPropagation();
	});

	var burger = document.getElementById('main-burger'), 
  nav = document.getElementById('mainNav');

  function navControl() {

    if(burger.classList.contains('burger--active')) {
      nav.classList.remove('nav_open');
      burger.classList.remove('burger--active');
      $('#menuBlockOut').addClass('hidden');
    } 
    else {
      burger.classList.add('burger--active');
      nav.classList.add('nav_open');
      $('#menuBlockOut').removeClass('hidden');
    }
  }

  burger.addEventListener('click', navControl);

  window.addEventListener('resize', function() {
    if(window.innerWidth > 1000 && nav.classList.contains('nav_open')) {
      navControl();
      nav.classList.remove('nav_open');
       $('#menuBlockOut').addClass('hidden');
    }
  });

  // SWIPE EVENTS DETECTOR FUNCTION \\

  function detectswipe(el, func) {
	  swipe_det = {};
	  swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
	  var min_x = 30;  //min x swipe for horizontal swipe
	  var max_x = 30;  //max x difference for vertical swipe
	  var min_y = 50;  //min y swipe for vertical swipe
	  var max_y = 60;  //max y difference for horizontal swipe
	  var direc = "";
	  ele = document.getElementById(el);
	  ele.addEventListener('touchstart',function(e){
	    var t = e.touches[0];
	    swipe_det.sX = t.screenX; 
	    swipe_det.sY = t.screenY;
	  },false);
	  ele.addEventListener('touchmove',function(e){
	    e.preventDefault();
	    var t = e.touches[0];
	    swipe_det.eX = t.screenX; 
	    swipe_det.eY = t.screenY;    
	  },false);
	  ele.addEventListener('touchend',function(e){
	    //horizontal detection
	    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
	      if(swipe_det.eX > swipe_det.sX) direc = "r";
	      else direc = "l";
	    }
	    //vertical detection
	    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
	      if(swipe_det.eY > swipe_det.sY) direc = "d";
	      else direc = "u";
	    }

	    if (direc != "") {
	      if(typeof func == 'function') func(el,direc);
	    }
	    direc = "";
	    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
	  },false);  
	}

	function swipeController(el, d) {

		if(el === 'section4') {

			const section4PaginationLength = $('.section4PaginatorButton').length;

			if(d === 'l') {

				if(section4Idx < section4PaginationLength - 1) {
					section4Idx++;
				} else {
					section4Idx = 0;
				}
				
				$('.section4PaginatorButton')[section4PaginationLength - (section4Idx + 1)].click();
			}
			if(d === 'r') {

				if(section4Idx > 0) {
					section4Idx--;
				} else {
					section4Idx = section4PaginationLength - 1;
				}

				$('.section4PaginatorButton')[section4PaginationLength - (section4Idx + 1)].click();
			}
		}
		if(el === 'section3') {

			const section3PaginationLength = $('.section3PaginatorButton').length;

			if(d === 'l') {

				if(section3Idx < section3PaginationLength - 1) {
					section3Idx++;
				} else {
					section3Idx = 0;
				}
				
				$('.section3PaginatorButton')[section3PaginationLength - (section3Idx + 1)].click();
			}
			if(d === 'r') {

				if(section3Idx > 0) {
					section3Idx--;
				} else {
					section3Idx = section3PaginationLength - 1;
				}
				
				$('.section3PaginatorButton')[section3PaginationLength - (section3Idx + 1)].click();
			}
		}
	}

	detectswipe('section4', swipeController);
	detectswipe('section3', swipeController);
});