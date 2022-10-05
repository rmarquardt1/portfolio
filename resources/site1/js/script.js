/*-------------------------------------------
	 DOCUMENT READY FUNCTIONS
	 All functions to be called on
	 doc ready
-------------------------------------------*/
$(document).ready(function() {
	showLoading();
	sliderNav();
	separatePintLocator = '';
	hwmicSlideshow(); // before others
	placeCheck();
	mainNavToggle();
	mainNavSticky();
	utilityToggle();
	valuesToggle();
	hillsPosition();
	searchForm();
	stackSlideshow();
	accordionToggle();
	initaccordionTabToggle();
	heroSlideshow();
	flavorCarousel();
	valuesCarousel();
	basicSlideshow();
	videoCarousel();
	initFitVids();
	stickySectionNav();
	// shareHover();
	smallScreenAccordion();
	flavorSuggester();
	gurusCarousel();
	issuesIsotope();
	spinningGlobe();
	shareButtons();
	zIndex();
	socialSharing();
	heroUtilityToggle();
	availableAsNutrition();
	lazyloader();
});
/*-------------------------------------------
 WINDOW LOAD FUNCTIONS
 All functions to be called on
 window load
 -------------------------------------------*/
// Run on window load instead of on DOM Ready in case images or other scripts
// affect element widths
$(window).on('load', function() {
	responsiveTables();
	masonryPlugin();
	updateFlavorName();
	loadMore();
	loadMoreMasonry();
	newSticky();
	tiltPhotos();
	if (!useLocator) {
		//scoopShopLocatorSetup();
	}
	if ($('#flavorsMasonryContainer').length) {
		flavorsMasonrySetup();
	}
});
/*-------------------------------------------
 PLACEHOLDER SUPPORT
 For older versions of IE that don't
 support the placeholder attribute.
 Will change to value attribute.
 -------------------------------------------*/
function placeCheck() {
	if ($('html').hasClass('lt-ie10')) {
		$('input[placeholder]').each(function() {
			$(this).val($(this).attr('placeholder'));
		});
	}
}
/*-------------------------------------------
 LAZYLOADER
 Sets the page up for universal (or near
 universal) lazy loading of images.
 -------------------------------------------*/
function lazyloader() {
	$('.lazy').lazyload({
		failure_limit : $('.lazy').length
	});
	// trigger lazyload when slider slides
	$("a.bx-prev, a.bx-next, a.thumb, .bx-pager").bind("click", function() {
		// extra call for lazy loading
		setTimeout(function() {
			$(window).trigger("scroll");
		}, 100);
	});
}
/*-------------------------------------------
 SEARCH FORM
 Toggle Search Form on click of search 
 icon.
 -------------------------------------------*/
function searchForm() {
	var $searchContainer = $('nav .search'), $searchIcon = $('nav .search .toggle-search'), $searchForm = $('nav .search form');
	$searchIcon.on('click', toggleSearch);
	function toggleSearch(e) {
		var $this = $(this);
		e.preventDefault();
		if ($this.next($searchForm).is(':visible')) {
			$this.next($searchForm).slideUp();
			$this.parent($searchContainer).removeClass('visible');
		} else {
			$this.next($searchForm).slideDown();
			$this.parent($searchContainer).addClass('visible');
		}
	}
}
/*-------------------------------------------
 STICKY MAIN NAVIGATION
 Trigger sticky main nav on tall screens 
 when viewport scrolls below header.
 -------------------------------------------*/
function mainNavSticky() {
	var $nav = $('.main-nav-sticky'), $content = $('.content');
	if ($(window).height() >= 768) {
		$content.waypoint(function() {
			$nav.toggleClass("scroll");
		}, {
			offset : 0
		});
	}
}
/*-------------------------------------------
 Stacked Slideshow
 Slideshow for toggling through images.
 Used on slideshow-stack class.
 -------------------------------------------*/
function stackSlideshow() {
	var $slider = $('.slideshow-stack:not(.stackSlideshow-processed)'), $next = $('.controls-prev-next-instagram .next').length ? $('.controls-prev-next-instagram .next') : $slider.find('.controls-prev-next .next'), $prev = $('.controls-prev-next-instagram .previous').length ? $('.controls-prev-next-instagram .previous') : $slider.find('.controls-prev-next .previous');
	if (!$slider.length) { return; }
	$slider.addClass('stackSlideshow-processed');
	$next.on('click', showNextPhoto);
	$prev.on('click', showPrevPhoto);
	function showNextPhoto(e) {
		e.preventDefault();
		var $this = $(this), $topPhoto = $this.parent('ul').next('.stack').find('.on-top'), $nextPhoto = $topPhoto.next('.photo').length ? $topPhoto.next('.photo') : $this.parent('ul').next('.stack').find('.photo').first();
		$topPhoto.removeClass('on-top');
		$nextPhoto.addClass('on-top');
	}
	function showPrevPhoto(e) {
		e.preventDefault();
		var $this = $(this), $topPhoto = $this.parent('ul').next('.stack').find('.on-top'), $prevPhoto = $topPhoto.prev('.photo').length ? $topPhoto.prev('.photo') : $this.parent('ul').next('.stack').children('.photo').last();
		$topPhoto.removeClass('on-top');
		$prevPhoto.addClass('on-top');
	}
}
/*-------------------------------------------
 MASONRY
 Run Isotope plugin on masonry sections.
 Responsive with fluid widths on columns.
 -------------------------------------------*/
function masonryPlugin() {
	var $container = $('.masonry .isotope,.masonryFlavors .isotope');
	$container.isotope({
		masonry : {
			columnWidth : Math.floor($container.width() / 12),
			gutter : 10
		}
	});
	$(window).trigger('resize');
	isotopeFade();
}
// masonryPlugin - update columnWidth on window resize
$(window).smartresize(function() {
	var $container = $('.masonry .isotope');
	$container.isotope({
		// update columnWidth to a percentage of container width
		masonry : {
			columnWidth : $container.width() / 12,
			gutter : 10
		}
	});
});
/*-------------------------------------------
 ISOTOPE FADE
 Adds faded overlay style to elements at 
 the bottom of the Masonry section on 
 the homepage.
 -------------------------------------------*/
function isotopeFade() {
	$('.home .isotope .item').each(function() {
		var $this = $(this), $transform = $this.css('transform') !== undefined ? $this.css('transform') : $this.css('-webkit-transform') !== undefined ? $this.css('-webkit-transform') : $this.css('-moz-transform') !== undefined ? $this.css('-moz-transform') : $this.css('-o-transform') !== undefined ? $this.css('-o-transform') : $this.css('-ms-transform') !== undefined ? $this.css('-ms-transform') : undefined;
		if ($transform === undefined || !$transform) {
			return;
		} else if ($transform !== undefined && $transform.length) {
			var $values = $transform.match(/-?[0-9\.]+/g);
			if (!$values) {
				return;
			} else {
				if ($values[5] > 400) {
					$this.addClass('item-fade');
				}
			}
		}
	});
}
/*-------------------------------------------
 LOAD MORE BUTTON FOR MASONRY
 Loads more content into Masonry container
 when the button is clicked. Used on 
 homepage, flavor landing.
 -------------------------------------------*/
function loadMoreMasonry() {
	var $button = $('.masonry .masonry-load'), $container = $('.masonry .isotope'), $items = $container.find('.item'), $newItems = $('.masonry .more').contents();
	$button.on('click', loadContent);
	$items.find('img.lazy').each(showLazyload);
	function loadContent(e) {
		$newItems.find('img.lazy').each(showLazyload);
		e.preventDefault();
		$container.isotope('insert', $newItems, function() {
			$container.isotope('reLayout', function() {
				$('.masonry').addClass('loaded');
				$button.hide();
			});
		});
	}
	function showLazyload() {
		var $this = $(this), src = $this.data('original');
		if (src) $this.attr('src', src);
		$this.removeClass('lazy');
	}
}
/*-------------------------------------------
 HILLS POSITION
 Make hills sticky for tall screens, until 
 viewport is scroll to footer, then 
 unstick.
 -------------------------------------------*/
function hillsPosition() {
	$('.home .masonry').waypoint(function() {
		if ($(window).height() >= 1050) {
			$('.hills-wrap').toggleClass("scroll");
		}
	}, {
		offset : '100%'
	});
	if ($('.wrapper').not('.home').length) {
		$('footer').waypoint(function() {
			if ($(window).height() >= 1050) {
				$('.hills-wrap').toggleClass("scroll");
			}
		}, {
			offset : '100%'
		});
	}
}
/*-------------------------------------------
 HOMEPAGE HERO SLIDESHOW
 Slideshow on homepage.
 -------------------------------------------
 * Examples:
 *
 *   1. <ul class="slides-hero" data-hold-index="5">
 *
 *	 - The slider will start with slide #6 (index 5)
 *	 - No auto sliding
 *	 - Controls work as expected
 *
 *   2. <ul class="slides-hero"> (standard)
 *
 *	 - The slider will start with slide #1 (index 0)
 *	 - Auto sliding starts
 *	 - Thumbnails will advance when necessary to match the current slide
 *	 - Clicking a dot will stop thumbnail advancement for 10 seconds
 *	 - Clicking a thumbnail will cancel the auto sliding
 *
 * Note: bxSlider creates clones of slides, hence some of the complexity.
 */
function heroSlideshow() {
	var // hero slider
	$hero = $('.slides-hero'), // before the clones arrive
	holdIndex = parseInt($hero.data('holdIndex'), 10), heroAuto = isNaN(holdIndex), startIndex = heroAuto ? 0 : holdIndex, heroOptions = {
		mode : 'fade',
		auto : false,
		pause : 10000,
		autoStart : false,
		slideWidth : 1052,
		speed : 400,
		minSlides : 1,
		moveSlides : 1,
		slideMargin : 0,
		pager : true,
		nextSelector : '.inside .next',
		prevSelector : '.inside .previous',
		nextText : 'Next',
		prevText : 'Previous',
		startSlide : startIndex,
		onSlideBefore : onHeroSlideBefore
	},
	// thumb slider
	$thumbs = $('.controls-thumbs .slides-thumbs'), thumbOptions = {
		slideWidth : 242,
		infiniteLoop : false,
		hideControlOnEnd : true,
		minSlides : 1,
		maxSlides : 4,
		moveSlides : 4,
		slideMargin : 28,
		pager : false,
		nextSelector : '.outside .next',
		prevSelector : '.outside .previous',
		startSlide : 0, // set before initialization
		// onSlideBefore: onThumbSlideBefore,
		onSliderLoad : onThumbSliderLoad
	};
	// initialze hero slider
	$hero.bxSlider(heroOptions);
	// initialze thumbs slider
	thumbOptions.startSlide = Math.floor(startIndex / thumbOptions.maxSlides);
	$thumbs.bxSlider(thumbOptions);
	function onPrevNextClick(e) {
		e.preventDefault();
	}
	function onHeroSlideBefore($slideElement, oldIndex, newIndex) {
		setActiveThumb(newIndex, false);
	}
	function onThumbSliderLoad() {
		setActiveThumb(startIndex, true); // `true` - don't advance thumb
		// slider
		$thumbs.find('.thumb').click(onThumbClick);
		$('.slideshow-hero').find('.previous, .next').click(onPrevNextClick);
	}
	function onThumbClick(e) {
		e.preventDefault();
		var index = $(this).data('slideIndex');
		$hero.goToSlide(index);
		$hero.stopAuto();
	}
	function onThumbSlideBefore($slideElement, oldIndex, newIndex) {
		// setActiveDot(newIndex);
	}
	// there are clones of thumbs and all need the active class
	// Note that `data-slide-index` attribute is required by
	// bxSlider.pagerCustom
	// but it is set to `false` because it clashes. We're using that attribute
	// here.
	function setActiveThumb(index, suppressGoToSlide) {
		$('.slides-thumbs .thumb').not('[data-slide-index="' + index + '"]').removeClass('active');
		$('.slides-thumbs .thumb[data-slide-index="' + index + '"]').addClass('active');
		if (!suppressGoToSlide) {
			var thumbGroup = Math.floor(index / thumbOptions.maxSlides);
			$thumbs.goToSlide(thumbGroup);
		}
	}
}
/*-------------------------------------------
 FLAVOR PINT CAROUSEL
 Homepage flavor carousel with multiple 
 options for different screen sizes.
 -------------------------------------------*/
function flavorCarousel() {
	var $slider = $('.flavor-carousel .slides'), $origScreenWidth = $(window).width(), sliderOptions = {
		small : {
			responsive : false,
			slideWidth : 320,
			minSlides : 1,
			maxSlides : 1,
			moveSlides : 1,
			slideMargin : 0,
			pager : false,
			nextSelector : '.flavor-carousel .controls-prev-next .next',
			prevSelector : '.flavor-carousel .controls-prev-next .previous',
			onSliderLoad : onSliderLoad,
			onSlideBefore : onSlideBeforeSmall
		},
		medium : {
			slideWidth : 170,
			minSlides : 3,
			maxSlides : 3,
			moveSlides : 1,
			slideMargin : 4,
			pager : false,
			nextSelector : '.flavor-carousel .controls-prev-next .next',
			prevSelector : '.flavor-carousel .controls-prev-next .previous',
			onSliderLoad : onSliderLoad,
			onSlideBefore : onSlideBefore
		},
		large : {
			slideWidth : 170,
			minSlides : 3,
			maxSlides : 5,
			moveSlides : 1,
			slideMargin : 4,
			pager : false,
			nextSelector : '.flavor-carousel .controls-prev-next .next',
			prevSelector : '.flavor-carousel .controls-prev-next .previous',
			onSliderLoad : onSliderLoad,
			onSlideBefore : onSlideBefore
		}
	}, destroyTimeout = null, sliderLoading = true;
	if (matchMedia('only screen and (max-width: 600px)').matches) {
		$slider.bxSlider(sliderOptions.small);
	} else if (matchMedia('only screen and (min-width: 600px) and (max-width: 960px)').matches) {
		$slider.bxSlider(sliderOptions.medium);
	} else {
		$slider.bxSlider(sliderOptions.large);
	}
	if ($slider.length) {
		$(window).resize($.throttle(250, resizeFlavorCarousel));
	}
	function resizeFlavorCarousel() {
		var $currentScreenWidth = $(window).width();
		// prevent double initialization
		if (sliderLoading) return;
		// only resize if the range has changed
		if (widthName($currentScreenWidth) != widthName($origScreenWidth)) {
			$slider.find('.active').removeClass('active');
			$slider.destroySlider();
			// if waiting on an existing timeout, cancel it
			if (destroyTimeout) clearTimeout(destroyTimeout);
			// wait for bxSlider to destroy all the things
			destroyTimeout = setTimeout(function() {
				sliderLoading = true;
				$slider.bxSlider(widthOptions($currentScreenWidth));
				destroyTimeout = null;
			}, 100);
		}
		$origScreenWidth = $currentScreenWidth;
		function widthName(width) {
			return (width < 600) ? 'small' : (width < 960) ? 'medium' : 'large';
		}
		function widthOptions(width) {
			return sliderOptions[widthName(width)];
		}
	}
	// large & med slider only
	function onSlideBefore($slideElement, oldIndex, newIndex) {
		var fwd = (newIndex - oldIndex == 1);
		var nextBuffer = fwd ? 5 : 2;
		var $next = $slideElement;
		var nextPosition = 0;
		while (nextPosition <= nextBuffer) {
			if ($next) {
				var $lazy = $next.find(".lazy-slider");
				var $load = $lazy.attr("data-original");
				$lazy.attr("src", $load);
				$lazy.removeClass("lazy-slider");
				$lazy.removeClass("lazy");
			}
			$next = fwd ? $next.next() : $next.prev();
			nextPosition++;
		}
		var $activeSlide = $(window).width() > 960 ? $slideElement.next().next() : $slideElement.next(), $ingredients = $activeSlide.find('.ingredients').hide();
		// set active class
		$activeSlide.addClass('active').siblings('.slide').removeClass('active');
		// fade in the ingredients bubble
		$ingredients.fadeIn();
	}
	// small slider only
	function onSlideBeforeSmall($slideElement, oldIndex, newIndex) {
		var $next = $slideElement;
		if ($next) {
			var $lazy = $next.find(".lazy-slider");
			var $load = $lazy.attr("data-original");
			$lazy.attr("src", $load);
			$lazy.removeClass("lazy-slider");
			$lazy.removeClass("lazy");
		}
		var $activeSlide = $slideElement.next(), $ingredients = $activeSlide.find('.ingredients').hide();
		// set active class
		$activeSlide.addClass('active').siblings('.slide').removeClass('active');
		// fade in the ingredients bubble
		$ingredients.fadeIn();
	}
	// large & med slider only
	function onSliderLoad(currentIndex) {
		$slider.find('.bx-clone img.lazy-slider, .bx-clone img.lazy').each(function() {
			var $lazy = $(this);
			var $load = $lazy.attr("data-original");
			$lazy.attr("src", $load);
			$lazy.removeClass("lazy-slider");
			$lazy.removeClass("lazy");
		});
		var middleOffset = $(window).width() > 960 ? 2 : 1, $middleSlide = $slider.find('.slide').not('.bx-clone').eq(middleOffset);
		sliderLoading = false;
		// active class
		$middleSlide.addClass('active');
		// click handler
		$slider.find('.slide').click(clickSlide);
	}
	// large slider only
	function clickSlide() {
		// The slide we're going to two to the left. This one stays in the
		// middle.
		// var slideIndex = $(window).width() > 960 ? $(this).data('slideIndex') - 2
		// : $(this).data('slideIndex') - 1, slideCount = $slider
		// .getSlideCount();
		//
		// // wrap around
		// if (slideIndex < 0)
		// slideIndex = $slider.getSlideCount() + slideIndex;
		//
		// $slider.goToSlide(slideIndex);
	}
}
/*-------------------------------------------
 BASIC SLIDESHOW
 Basic Image Slideshow, works across
 multiple screen sizes and layouts.
 -------------------------------------------*/
function basicSlideshow() {
	var $slider = $('.slideshow-basic .slides'), $videoSlider = $('.video-carousel .video-previews .slides'), $videoContainer = $('.video-carousel'), basicOptions = {
		slideWidth : 165,
		minSlides : 1,
		maxSlides : 6,
		moveSlides : 1,
		slideMargin : 12,
		pager : false,
		nextSelector : '.slideshow-basic .controls-prev-next .next',
		prevSelector : '.slideshow-basic .controls-prev-next .previous',
		onSlideBefore : onSlideBefore,
		onSliderLoad : onSliderLoad
	}, videoOptions = {
		slideWidth : 180,
		minSlides : 1,
		maxSlides : 6,
		moveSlides : 1,
		slideMargin : 0,
		video : true,
		pager : false,
		nextSelector : '.video-previews .controls-prev-next .next',
		prevSelector : '.video-previews .controls-prev-next .previous'
	}, videoSmallOptions = {
		slideWidth : 180,
		minSlides : 1,
		maxSlides : 1,
		moveSlides : 1,
		slideMargin : 0,
		video : true,
		pager : false,
		nextSelector : '.video-previews .controls-prev-next .next',
		prevSelector : '.video-previews .controls-prev-next .previous'
	};
	if ($slider.length) {
		$slider.bxSlider(basicOptions);
	}
	if ($videoSlider.length) {
		if ($videoContainer.parent('.one-third').length || $videoContainer.parent('.sub').length || $videoContainer.parent('.one-third-last').length) {
			$videoSlider.bxSlider(videoSmallOptions);
			// console.warn('tiny container')
		} else {
			$videoSlider.bxSlider(videoOptions);
		}
	}
	function onSlideBefore($slideElement, oldIndex, newIndex) {
		var fwd = (newIndex - oldIndex == 1);
		var nextBuffer = fwd ? 5 : 2;
		var $next = $slideElement;
		var nextPosition = 0;
		while (nextPosition <= nextBuffer) {
			if ($next) {
				var $lazy = $next.find(".lazy-slider");
				var $load = $lazy.attr("data-original");
				$lazy.attr("src", $load);
				$lazy.removeClass("lazy-slider");
				$lazy.removeClass("lazy");
			}
			$next = fwd ? $next.next() : $next.prev();
			nextPosition++;
		}
	}
	function onSliderLoad(currentIndex) {
		$slider.find('.bx-clone img.lazy, .bx-clone img.lazy-slider').each(function() {
			var $lazy = $(this);
			var $load = $lazy.attr("data-original");
			$lazy.attr("src", $load);
			$lazy.removeClass("lazy-slider");
			$lazy.removeClass("lazy");
		});
	}
}
/*-------------------------------------------
 VIDEO CAROUSEL
 Basic Carousel for displaying multiple 
 videos on a page.
 -------------------------------------------*/
function videoCarousel() {
	var $container = $('.video-carousel'), $link = $('.video-previews a');
	if ($container.length) {
		var $preview = $container.find('.video-previews .slide');
		$preview.on('click', loadVideo);
		$link.on('click', function(e) {
			e.preventDefault();
		});
	}
	function loadVideo(e) {
		var $this = $(this);
		e.preventDefault();
		$this.addClass('active');
		// placeholder function where Ajax will load the clicked video
	}
}
/*-------------------------------------------
 VALUES CAROUSEL
 Homepage values carousel.
 -------------------------------------------*/
function valuesCarousel() {
	var $slider = $('.values-carousel .slides'), valuesOptions = {
		slideWidth : 170,
		minSlides : 1,
		maxSlides : 5,
		moveSlides : 1,
		slideMargin : 4,
		pager : false,
		nextSelector : '.values-carousel .controls-prev-next .next',
		prevSelector : '.values-carousel .controls-prev-next .previous',
		onSlideBefore : onSlideBefore,
		onSliderLoad : onSliderLoad
	};
	if ($slider.length) {
		$slider.bxSlider(valuesOptions);
	}
	function onSlideBefore($slideElement, oldIndex, newIndex) {
		var fwd = (newIndex - oldIndex == 1);
		var nextBuffer = fwd ? 5 : 2;
		var $next = $slideElement;
		var nextPosition = 0;
		while (nextPosition <= nextBuffer) {
			if ($next) {
				var $lazy = $next.find(".lazy-slider");
				var $load = $lazy.attr("data-original");
				$lazy.attr("src", $load);
				$lazy.removeClass("lazy-slider");
				$lazy.removeClass("lazy");
			}
			$next = fwd ? $next.next() : $next.prev();
			nextPosition++;
		}
	}
	function onSliderLoad(currentIndex) {
		$slider.find('.bx-clone img.lazy, .bx-clone img.lazy-slider').each(function() {
			var $lazy = $(this);
			var $load = $lazy.attr("data-original");
			$lazy.attr("src", $load);
			$lazy.removeClass("lazy-slider");
			$lazy.removeClass("lazy");
		});
	}
}
/*-------------------------------------------
 ACCORDION TOGGLE
 Generic toggle function for accordion 
 and dropdown elements.
 -------------------------------------------*/
function accordionToggle() {
	var $button = $('.accordion-button');
	$button.on('click', function(e) {
		var $this = $(this);
		e.preventDefault();
		toggleContent($this);
	});
}
function toggleContent(trigger) {
	var $this = trigger, $content = $this.next('.accordion-content'), $container = $this.closest('.utility-nav').length ? $this.closest('.utility-nav') : $this.parent().parent(), $parent = $this.parent(), $icon = $this.children('.ss-icon').length ? $this.children('.ss-icon') : $this.find('.ss-icon').first();
	if ($content.is(':visible')) {
		$content.slideUp(300, reIsotope);
		if ($parent.length && !$parent.hasClass('country-nav')) {
			$container.removeClass('expanded');
			$parent.removeClass('visible');
			toggleIcon();
		}
	} else {
		$content.slideDown(300, reIsotope);
		if ($parent.length && !$parent.hasClass('country-nav')) {
			$container.addClass('expanded');
			$parent.addClass('visible');
			toggleIcon();
		}
	}
	function toggleIcon() {
		if ($icon.hasClass('ss-up')) {
			$icon.addClass('ss-down').removeClass('ss-up');
		} else if ($icon.hasClass('ss-down')) {
			$icon.addClass('ss-up').removeClass('ss-down');
		} else if ($icon.hasClass('ss-plus')) {
			$icon.addClass('ss-hyphen').removeClass('ss-plus');
		} else if ($icon.hasClass('ss-hyphen')) {
			$icon.addClass('ss-plus').removeClass('ss-hyphen');
		}
	}
	function reIsotope() {
		if ($(this).closest('.isotope').length) {
			$('.masonry .isotope').isotope('reLayout');
		} else {
		}
	}
}
function openContent(trigger) {//used in anchorTag and scoopShopMenuProduct
	var $this = trigger, $content = $this.next('.accordion-content'), $container = $this.closest('.utility-nav').length ? $this.closest('.utility-nav') : $this.parent().parent(), $parent = $this.parent(), $icon = $this.children('.ss-icon').length ? $this.children('.ss-icon') : $this.find('.ss-icon').first();
	if ($parent.hasClass('visible') && $container.hasClass('expanded')) {
		// content is open, do nothing
	} else {
		$content.slideDown(300, reIsotope);
		if ($parent.length && !$parent.hasClass('country-nav')) {
			$container.addClass('expanded');
			$parent.addClass('visible');
			toggleIcon();
		}
	}
	function toggleIcon() {
		if ($icon.hasClass('ss-up')) {
			$icon.addClass('ss-down').removeClass('ss-up');
		} else if ($icon.hasClass('ss-down')) {
			$icon.addClass('ss-up').removeClass('ss-down');
		} else if ($icon.hasClass('ss-plus')) {
			$icon.addClass('ss-hyphen').removeClass('ss-plus');
		} else if ($icon.hasClass('ss-hyphen')) {
			$icon.addClass('ss-plus').removeClass('ss-hyphen');
		}
	}
	function reIsotope() {
		if ($(this).closest('.isotope').length) {
			$('.masonry .isotope').isotope('reLayout');
		} else {
		}
	}
}
/*-------------------------------------------
 UTILITY NAV TOGGLE
 Shows/hides the utility nav on click.
 -------------------------------------------*/
function utilityToggle() {
	$('.accordion-button-up .accordion-trigger, .accordion-content-up .trigger-close').on('click', function(e) {
		var $this = $(this);
		e.preventDefault();
		toggleContentUp($this);
	});
	function toggleContentUp(trigger) {
		var $this = trigger, $content = $this.parent().prev('.accordion-content-up').length ? $this.parent().prev('.accordion-content-up') : $this.closest('.accordion-content-up'), $container = $this.closest('.utility-nav').length ? $this.closest('.utility-nav') : $this.parent().parent(), $parent = $this.parent();
		if ($content.is(':visible')) {
			$content.slideUp(function() {
				if ($parent.length) {
					$container.removeClass('expanded');
					$parent.removeClass('visible');
				}
			});
		} else {
			$content.slideDown();
			addUDMEvent('Click', 'Locator Drawer', 'Open');
			var address = $.parseJSON(sessionStorage.getItem('address')); // address object from w2gi
			// this is where w2gi service should run
			if (address !== null) {
				// run locator service with stored address
				w2giLocatorsearchServiceFromAddress(address, false);
			}
			if ($parent.length) {
				$container.addClass('expanded');
				$parent.addClass('visible');
			}
		}
	}
}
/*-------------------------------------------
 ACCORDION TAB TOGGLE
 Accordion on small screens, tabs on 
 large screens. Used for geolocation 
 results in utility navigation.
 -------------------------------------------*/
function initaccordionTabToggle() {
	var $accordionButton = $('.accordion-tab-button'), $tabButton = $('.utility-nav .tab-button'), $visible = $('.location-result.visible').attr('id'), $visibleTab = $('.tabs').find('a[href=#' + $visible + ']');
	$visibleTab.parent().addClass('visible');
	$(window).resize($.debounce(250, function() {
		$visible = $('.location-result.visible').attr('id');
		$visibleTab = $('.tabs').find('a[href=#' + $visible + ']');
		$visibleTab.parent().addClass('visible');
		$('.utility-nav .tab-button a').not($visibleTab).parent().removeClass('visible');
		/**
		 * MAGIC NUMBER: the 768 here is the media query where the accordion switches over to a tabset. We need to grab that instance in case both accordion elements are closed so we don't end up with a tabset where both tabs are closed.
		 */
		if ($(window).innerWidth() > 768 && $('.location-result .accordion-tab-content:visible').length === 0) {
			$visible = $('.location-result').attr('id');
			$visibleTab = $('.tabs').find('a[href=#' + $visible + ']');
			$visibleTab.parent().addClass('visible');
			$('.location-result.' + $visible).find('.ss-icon').removeClass('ss-plus').addClass('ss-hyphen');
			$('.location-result.' + $visible).addClass('visible').find('.accordion-tab-content').addClass('visible').show();
		}
	}));
	if ($('.no-scoop-shops').length) { return; }
	$accordionButton.on('click', function(e) {
		var $this = $(this);
		e.preventDefault();
		if ($this.hasClass('visible')) {
			accordionTabClose($this);
		} else {
			accordionTabToggle($this);
		}
	});
	$tabButton.on('click', function(e) {
		var $this = $(this);
		e.preventDefault();
		if ($this.hasClass('visible')) {
			return;
		} else {
			tabToggle($this);
		}
	});
	function accordionTabToggle(trigger) {
		var $this = trigger, $icon = $this.find('.ss-icon'), $otherButton = $('.accordion-tab-button').not($this), $content = $this.next('.accordion-tab-content'), $otherTab = $otherButton.next('.accordion-tab-content'), $otherIcon = $otherButton.find('.ss-icon'), $parent = $content.closest('.location-result'), $otherParent = $otherTab.closest('.location-result');
		$this.addClass('visible');
		$icon.removeClass('ss-plus').addClass('ss-hyphen');
		$content.slideDown(300).addClass('visible');
		$parent.addClass('visible');
		$otherParent.removeClass('visible');
		$otherIcon.removeClass('ss-hyphen').addClass('ss-plus');
		$otherTab.slideUp(300, function() {
			$(this).removeClass('visible');
		});
		$otherButton.removeClass('visible');
	}
	function accordionTabClose(trigger) {
		var $this = trigger, $icon = $this.find('.ss-icon'), $content = $this.next('.accordion-tab-content'), $parent = $content.closest('.location-result');
		$this.removeClass('visible');
		$icon.removeClass('ss-hyphen').addClass('ss-plus');
		$content.slideUp(300, function() {
			$(this).removeClass('visible');
		});
		$parent.removeClass('visible');
	}
	function tabToggle(trigger) {
		var $this = trigger, $otherButton = $('.tab-button').not($this), $content = $($this.children('a').attr('href')).find('.accordion-tab-content'), $otherTab = $($otherButton.children('a').attr('href')).find('.accordion-tab-content'), $parent = $content.closest('.location-result'), $otherParent = $otherTab.closest('.location-result');
		$this.addClass('visible');
		$parent.addClass('visible');
		$content.show().addClass('visible');
		$otherTab.hide().removeClass('visible');
		$otherParent.removeClass('visible');
		$otherButton.removeClass('visible');
		$content.parent().find('.ss-icon').removeClass('ss-plus').addClass('ss-hyphen');
		$otherTab.parent().find('.ss-icon').removeClass('ss-hyphen').addClass('ss-plus');
	}
}
/*-------------------------------------------
 VALUES MISSION STATEMENT TOGGLE
 Shows/hides content on the Mission 
 Statement module.
 -------------------------------------------*/
function valuesToggle() {
	if ($('.mission-statement').length) {
		var $_window = $(window);
		$_window.on('resize', function() {
			if ($_window.width() > 768) {
				$('.mission-item figure').each(function() {
					if ($(this).parent().hasClass('visible')) {
						$(this).hide();
					} else {
						$(this).show();
					}
				});
			}
		});
		$('.mission-item .accordion-button-up').on('click', function(e) {
			var $this = $(this), $parent = $this.parent(), $content = $parent.find('.accordion-content-up'), $originalContentVisible = $content.is(':visible'), $windowWidth = $_window.width(), $container = $parent.parent(), $buttonSet = $container.find('.mission-item .accordion-button-up');
			e.preventDefault();
			$buttonSet.each(function(index) {
				var $this = $(this), $link = $this.find('a'), $parent = $this.parent(), $content = $parent.find('.accordion-content-up');
				if ($windowWidth > 768) {
					// $img.slideToggle();
					if ($parent.hasClass('visible')) {
						$(this).find('figure').hide();
					}
				}
				if ($originalContentVisible) {
					$container.removeClass('expanded');
					$parent.removeClass('visible');
					$content.slideToggle();
					$link.text(linkText);
					$this.find('i').removeClass('ss-hyphen').addClass('ss-plus');
				} else {
					$container.addClass('expanded');
					$parent.addClass('visible');
					$content.slideToggle();
					$link.text(minimize);
					$this.find('i').removeClass('ss-plus').addClass('ss-hyphen');
				}
			});
		});
	}
}
/*-------------------------------------------
 SMALL SCREEN ACCORDION
 Hides content inside an accordion 
 which expands on click only for small 
 and medium screens. Large screens 
 display content without accordion button.
 -------------------------------------------*/
function smallScreenAccordion() {
	var $smallButton = $('.accordion-button-small'), $mediumButton = $('.accordion-button-medium');
	$smallButton.on('click', initToggleSmall);
	$mediumButton.on('click', initToggleMedium);
	function initToggleSmall(e) {
		if ($(window).width() < 600) {
			e.preventDefault();
			toggleContent($(this));
		}
	}
	function initToggleMedium(e) {
		if ($(window).width() < 768) {
			e.preventDefault();
			toggleContent($(this));
		}
	}
}
/*-------------------------------------------
 MAIN NAV TOGGLE
 Shows/hides main & secondary 
 navigation for small screens.
 -------------------------------------------*/
function mainNavToggle() {
	var $nav = $('.main-nav'), $navItems = $('.main-nav ul'), $toggleButton = $('.main-nav .toggle-main-nav'), $icon = $toggleButton.find('.ss-icon'), $secondary = $('.secondary-nav'), $secondaryButton = $navItems.children('li').not('.search').find('.ss-icon'), $utilNav = $('.utility-nav'), $utilToggleButton = $('.main-nav .toggle-utility-nav'), $utilIcon = $utilToggleButton.find('.ss-icon');
	$toggleButton.on('click', toggleThatNav);
	$secondaryButton.on('click', secondaryNavToggle);
	$utilToggleButton.on('click', toggleUtilNav);
	function toggleThatNav() {
		if ($navItems.is(':visible')) {
			$navItems.slideUp();
			$nav.removeClass('visible');
			$icon.removeClass('ss-delete').addClass('ss-rows');
		} else {
			$navItems.slideDown();
			$nav.addClass('visible');
			$icon.addClass('ss-rows');
			//$icon.addClass('ss-delete').removeClass('ss-rows');
			if ($utilNav.is(':visible')) {
				$utilNav.hide();
				$utilNav.removeClass('visible');
				$utilIcon.addClass('ss-location').removeClass('ss-delete');
			}
		}
	}
	function secondaryNavToggle() {
		var $this = $(this);
		$this.next($secondary).slideToggle().toggleClass('visible');
		$this.toggleClass('ss-plus, ss-hyphen');
	}
	function toggleUtilNav() {
		if ($utilNav.is(':visible')) {
			$utilNav.removeClass('visible');
			$utilNav.slideUp();
			$utilIcon.addClass('ss-location').removeClass('ss-delete');
		} else {
			$utilNav.addClass('visible');
			$utilNav.slideDown();
			$utilIcon.removeClass('ss-location').addClass('ss-delete');
			var address = $.parseJSON(sessionStorage.getItem('address')); // address object from w2gi
			// this is where w2gi service should run
			if (address !== null) {
				// run locator service with stored address
				w2giLocatorsearchServiceFromAddress(address, false);
			}
			if ($navItems.is(':visible')) {
				$navItems.hide();
				$nav.removeClass('visible');
				$icon.removeClass('ss-delete').addClass('ss-rows').children('span').text('Open');
			}
		}
	}
}
/*-------------------------------------------
 FITVIDS FUNCTION
 Loads fitVids plugin functionality to 
 make videos responsive and fluid.
 -------------------------------------------*/
function initFitVids() {
	$(".fitvid, .video-container").fitVids();
}
/*-------------------------------------------
 STICKY SECTION NAVIGATION
 Makes in-page section navigation sticky 
 on scroll at large screen sizes.
 -------------------------------------------*/
function stickySectionNav() {
	var lastId = null, sectionNav = $(".section-nav"),
	// stickyNavHeight = $('.utility-nav').outerHeight() + 10,
	stickyNavHeight = 5,
	// All list items
	navLink = sectionNav.find("a"),
	// Anchors corresponding to menu items
	scrollItems = navLink.map(function() {
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
	$('.back-to-top, .section-nav li a').on('click', scrollToSection);
	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	function scrollToSection(e) {
		var href = $(this).attr("href"), offsetTop = href === "#" ? 0 : $(href).offset().top - stickyNavHeight + 5;
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop : offsetTop
		}, 300);
		// remove visible class to collapse dropdown for small section nav
		if (Modernizr.mq('(max-width: 1299px)')) {
			$(this).closest('.accordion-content').slideUp();
		}
	}
	// Bind to scroll
	$(window).scroll(function () {


	    setTimeout(function(){

	        if ($(window).scrollTop() == 0) {
	            if ($('.section-nav').hasClass('unstick')) {} else {
	                $('.section-nav.sticky').stop().animate({
	                    top: '300px'
	                }, 500);
	            }
	        }
	        else if ($(window).scrollTop() > 210) {
	            if ($('.section-nav').hasClass("sticky") == true) {
	                $('.section-nav').stop().animate({
	                    top: '150px'
	                }, 500);
	            }
	        }
	    }, 300);	           

		// Get container scroll position
	    var fromTop = $(this).scrollTop() + $(window).height() / 3 + stickyNavHeight + 200;
	    //alert(fromTop)
		// Get id of current scroll item
		var cur = scrollItems.map(function() {
		    if ($(this).offset().top < fromTop)
		        return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
        //alert(cur.data("section"))
		var id = cur && cur.length ? cur[0].id : "";
		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
	        navLink.blur();
			navLink.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
		}
	});
    /*
	$('.page-footer').waypoint(function() {
		$('.section-nav').toggleClass("scroll sticky");
	}, {
		offset : '90%'
	});
    */
}
function newSticky(){
	if ($('.section-nav.sticky')[0]) {
		(function() {
			(function(root, factory) {
				if (typeof define === 'function' && define.amd) {
					return define([ 'jquery', 'waypoints' ], factory);
				} else {
					return factory(root.jQuery);
				}
			})(window, function($) {
				var defaults, wrap;
				defaults = {
				    wrapper : '<div class="sticky-wrapper" />',
				    stuckClass : 'stuck',
				    direction : 'down right'
				};
				wrap = function($elements, options) {
					var $parent;
					$elements.wrap(options.wrapper);
					$parent = $elements.parent();
					return $parent.data('isWaypointStickyWrapper', true);
				};
				$.waypoints('extendFn', 'sticky', function(opt) {
					var $wrap, options, originalHandler;
					options = $.extend({}, $.fn.waypoint.defaults, defaults, opt);
					$wrap = wrap(this, options);
					originalHandler = options.handler;
					options.handler = function(direction) {
						var $sticky, shouldBeStuck;
						$sticky = $(this).children(':first');
						shouldBeStuck = options.direction.indexOf(direction) !== -1;
						$sticky.toggleClass(options.stuckClass, shouldBeStuck);
						$wrap.height(shouldBeStuck ? $sticky.outerHeight() : '');
						if (originalHandler != null) { return originalHandler.call(this, direction); }
					};
					$wrap.waypoint(options);
					return this.data('stuckClass', options.stuckClass);
				});
				return $.waypoints('extendFn', 'unsticky', function() {
					var $parent;
					$parent = this.parent();
					if (!$parent.data('isWaypointStickyWrapper')) { return this; }
					$parent.waypoint('destroy');
					this.unwrap();
					return this.removeClass(this.data('stuckClass'));
				});
			});
		}).call(this);
		var $nav = $('.section-nav.sticky');
		if (Modernizr.mq('(max-width: 1299px)')) {
		    $nav.waypoint('sticky');		    
		}

		$(window).resize(function () {
			if (Modernizr.mq('(min-width: 1300px)')) {
			    $nav.waypoint('unsticky');
			    $nav.removeClass('unstick');
				//var $window = $(window), $menucontent = $(".section-nav.sticky .accordion-content"), $navmenu = $(".utility-nav");
				//$nav.css('top', (($window.height() - $navmenu.height()) / 2) - ($menucontent.height() / 2) + $navmenu.height() + 'px');
			} else {
				if(!$nav.hasClass("stuck")) {
				    $nav.waypoint('sticky');
				    $nav.addClass('unstick');
					$nav.css("top", "");					
				}
			}
		});
	}
}
/*-------------------------------------------
 SHARE BUTTON HOVER
 Style share button on hover.
 -------------------------------------------*/
/*
 * function shareHover() { var $shareButton = $('.share h6 a'), $shareLinks = $('.share');
 * 
 * $shareLinks.on('mouseenter', showHover); $shareLinks.on('mouseleave', removeHover);
 * 
 * function showHover() { $shareButton.addClass('active'); }
 * 
 * function removeHover() { $shareButton.removeClass('active'); } }
 */
/*-------------------------------------------
 SHARE BUTTON TOGGLE
 Show/hide share button icons on click.
 -------------------------------------------*/
function shareButtons() {
	$('.share').on('click', toggleIcons);
	function toggleIcons(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	}
}
/*-------------------------------------------
 FLAVOR SUGGESTER
 Show a new flavor description on click.
 -------------------------------------------*/
function flavorSuggester() {
	var $loadButton = $('.flavor-suggester .load-another'), $slide = $('.suggestion');
	$loadButton.on('click', showNextItem);
	function showNextItem(e) {
		e.preventDefault();
		var $this = $(this), $topItem = $this.parent().find('.on-top'), $nextItem = $topItem.next($slide).length ? $topItem.next($slide) : $this.parent().find($slide).first();
		$topItem.removeClass('on-top');
		$nextItem.addClass('on-top');
	}
}
/*-------------------------------------------
 TIMELINE SLIDESHOW
 Full-page slideshow used in How We Make 
 Ice Cream & About Us History timelines. 
 -------------------------------------------*/
/**
 * How We Make Ice Cream The `ul.controls html` is cached and replaced with just the `li` html from that cache when a link is clicked - either a slider link or a `.next-hand` link. When a `next-hand` link is clicked, the page will scroll back up.
 */
function hwmicSlideshow() {
	var $controls = $('.timeline-slider .controls'), $hwmicControls = $('.how-we-make-ice-cream .timeline-slider .controls'), $aboutControls = $('.about-us .timeline-slider .controls'), // before the clones arrive
	cachedSlidesHTML = $('.timeline-slides').html(), controlsOptions = {
		slideWidth : 120,
		minSlides : 1,
		maxSlides : 8,
		moveSlides : 1,
		slideMargin : 0,
		pager : false,
		nextSelector : '.how-we-make-ice-cream .timeline-slider .next',
		prevSelector : '.how-we-make-ice-cream .timeline-slider .previous',
		onSliderLoad : onSliderLoad
	}, aboutOptions = {
		slideWidth : 210,
		minSlides : 1,
		maxSlides : 8,
		moveSlides : 1,
		slideMargin : 0,
		pager : false,
		infiniteLoop : true,
		hideControlOnEnd : false,
		nextSelector : '.about-us .timeline-slider .next',
		prevSelector : '.about-us .timeline-slider .previous',
		onSliderLoad : onSliderLoad
	};
	$hwmicControls.bxSlider(controlsOptions);
	$aboutControls.bxSlider(aboutOptions);
	// if ($aboutControls.length == 1) {
	// $(function() {
	// var $_window = $(window), $sliderCtrl = $('.timeline-slider .controls-prev-next-timeline a'), viewportWidth, currentSlide;
	//
	// $_window.resize(function() {
	// viewportWidth = $_window.width();
	// currentSlide = $aboutControls.getCurrentSlide();
	// if (viewportWidth < 2500) {// controls should show
	// if (currentSlide == 0) {// dont show previous
	// if (!$sliderCtrl.eq(0).hasClass('disabled')) {
	// $sliderCtrl.eq(0).addClass('disabled');
	// }
	// if ($sliderCtrl.eq(1).hasClass('disabled')) {
	// $sliderCtrl.eq(1).removeClass('disabled');
	// }
	// } else if (currentSlide >= 1) {// dont show next
	// if (!$sliderCtrl.eq(1).hasClass('disabled')) {
	// $sliderCtrl.eq(1).addClass('disabled');
	// }
	// if ($sliderCtrl.eq(0).hasClass('disabled')) {
	// $sliderCtrl.eq(0).removeClass('disabled');
	// }
	// } else if ($sliderCtrl.hasClass('disabled')) {
	// $sliderCtrl.removeClass('disabled');
	// }
	// } else {
	// $sliderCtrl.each(function() {
	// if (!$(this).hasClass('disabled')) {
	// $sliderCtrl.addClass('disabled');
	// }
	// });
	// }
	// });
	// });
	// }
	// initialize thumbs after the slider is done cloning (!)
	function onSliderLoad() {
		var $thumbs = $controls.find('li'), hash = window.location.hash;
		if (hash.replace('#', '') !== '') {
			// the window was called with a hash in the url
			showSlide(hash);
		} else {
			// the window was called without a hash in the url
			// so use the href from the first thumb link
			showSlide($('.timeline-slider .controls li').not('.bx-clone').find('a').first().attr('href'));
		}
		$thumbs.find('a').click(thumbLinkClick);
		function thumbLinkClick(e) {
			e.preventDefault();
			var hash = $(this).attr('href');
			window.location.hash = hash;
			showSlide(hash);
		}
	}
	function showSlide(hash, scrollUp) {
		var $links = $('[href="' + hash + '"]'), // includes slider link, its
		// clones, and the .next-hand
		// link
		$slides = $('.timeline-slides'), $thumbs = $controls.find('li'), cachedSlideHTML = $(cachedSlidesHTML).find(hash).parent('li').wrap('<div/>').parent().html(), scrollTo;
		// replace the html with the cached <li> and initialize element
		// behaviors
		$slides.html(cachedSlideHTML).find('.next-hand').click(nextHandClick);
		stackSlideshow(); // will not re-process
		// set active class
		$thumbs.removeClass('active');
		$links.each(function() {
			var $this = $(this), $parentThumb = $this.parent('li');
			if (!$this.hasClass('next-hand')) {
				$parentThumb.addClass('active');
			}
		});
		// scroll the page up if needed
		if (scrollUp) {
			scrollTo = $('.timeline-slider').offset().top - Number($('.utility-nav:visible').height());
			$('html, body').animate({
				scrollTop : scrollTo
			}, 'slow');
		}
		// click handler for `a.next-hand`
		function nextHandClick(e) {
			e.preventDefault();
			showSlide($(this).attr('href'), true);
		}
		initFitVids();
		$slides.find('.lazy').lazyload({
			failure_limit : $('.lazy').length
		});
	}
}
/*-------------------------------------------
 FLAVOR GURUS CAROUSEL
 Slideshow for scrolling through Flavor 
 Gurus profiles.
 -------------------------------------------*/
function gurusCarousel() {
	var $slider = $('.gurus-carousel'), options = {
		minSlides : 1,
		maxSlides : 1,
		moveSlides : 1,
		pager : false,
		nextSelector : '.controls-prev-next-gurus .next',
		prevSelector : '.controls-prev-next-gurus .previous'
	};
	if ($slider.length) {
		$slider.bxSlider(options);
	}
}
/*-------------------------------------------
 OUR INITIATIVES ISSUES ISOTOPE
 Adds filter functionality to the Masonry
 section on the Our Initiatives module.
 -------------------------------------------*/
function issuesIsotope() {
	$('.our-initiatives-list a, .our-initiatives-accordion a').click(function(e) {
		e.preventDefault();
		var $this = $(this), selector = $this.attr('data-filter'), $container = $('.our-initiatives .isotope');
		$container.isotope({
			filter : selector
		});
		$('.our-initiatives-list .active').removeClass('active');
		$this.parent().addClass('active');
	});
	$("#showAllLink").click();
}
/*-------------------------------------------
 SPINNING GLOBE
 Slideshow for the Linked Prosperity 
 module slide content.
 'Rotates' the globe on Linked Prosperity 
 module when the slideshow is triggered 
 on click. Rotate effect is made by 
 changing the background position of the 
 globe image.
 -------------------------------------------*/
function spinningGlobe() {
	var hash = window.location.hash, $globe = $('.globe'), $next = $('.controls-prev-next-globe .next'), $prev = $('.controls-prev-next-globe .previous');
	if (!$globe.length) { return; }
	$next.on('click', showNext);
	$prev.on('click', showPrev);
	onSliderLoad();
	function showNext(e) {
		e.preventDefault();
		var $this = $(this), $active = $this.closest('.globe-wrap').next('.linked-prosperity-module').find('.active'), $nextSlide = $active.next('.slide').length ? $active.next('.slide') : $this.closest('.globe-wrap').next('.linked-prosperity-module').find('.slide').first();
		$('.borderradius').find($globe).animate({
			backgroundPosition : '+=33% -5px'
		});
		$active.removeClass('active').hide('fade', 150, function() {
			$nextSlide.addClass('active').show('fade');
		});
	}
	function showPrev(e) {
		e.preventDefault();
		var $this = $(this), $active = $this.closest('.globe-wrap').next('.linked-prosperity-module').find('.active'), $prevSlide = $active.prev('.slide').length ? $active.prev('.slide') : $this.closest('.globe-wrap').next('.linked-prosperity-module').find('.slides').children('.slide').last();
		$('.borderradius').find($globe).animate({
			backgroundPosition : '-=33% -5px'
		});
		$active.removeClass('active').hide('fade', 150, function() {
			$prevSlide.addClass('active').show('fade');
		});
	}
	function onSliderLoad() {
		var $links = $('.next-slide a, .linked-prosperity-module .three-links .item a, .linked-prosperity-nav .accordion-content a');
		if (hash.replace('#', '') !== '') {
			// the window was called with a hash in the url
			showSlide(hash);
		} else {
			// the window was called without a hash in the url
			// so use the href from the first slide
			showSlide('#' + $('.linked-prosperity-module .slides li').first().attr('id'));
		}
		$links.click(linkToSlide);
		function linkToSlide(e) {
			e.preventDefault();
			var hash = $(this).attr('href');
			window.location.hash = hash;
			showSlide(hash, true);
		}
	}
	function showSlide(hash, scrollUp) {
		var scrollTo, $slide = $(hash);
		if ($('.linked-prosperity-module').find('.active').length) {
			$('.linked-prosperity-module').find('.active').removeClass('active').hide('fade', 150, function() {
				$slide.addClass('active').show('fade');
			});
		} else {
			$slide.addClass('active').show('fade', 150);
		}
		// scroll the page up if needed
		if (scrollUp) {
			scrollTo = $('.globe').offset().top - Number($('.utility-nav:visible').height());
			$('html, body').animate({
				scrollTop : scrollTo
			}, 'slow');
		}
	}
}
function zIndex() {
	$('iframe').each(function() {
		var url = $(this).attr("src");
		var char = "?";
		if (url.indexOf(char) != -1) {
			char = "&";
		}
		$(this).attr("src", url + char + "wmode=transparent");
	});
}
/*-------------------------------------------
 RESPONSIVE TABLES
 Adds a scroll wrapper on window load. 
 Makes the table scrollable if the content 
 is too wide for the viewport.
 -------------------------------------------*/
function responsiveTables() {
	$('table').each(function() {
		var element = $(this);
		// Create the wrapper element
		var scrollWrapper = $('<div />', {
			'class' : 'scrollable',
			'html' : '<div />' // The inner div is needed for styling
		}).insertBefore(element);
		// Store a reference to the wrapper element
		element.data('scrollWrapper', scrollWrapper);
		// Move the scrollable element inside the wrapper element
		element.appendTo(scrollWrapper.find('div'));
		// Check if the element is wider than its parent and thus needs to be
		// scrollable
		if (element.outerWidth() > element.parent().outerWidth()) {
			element.data('scrollWrapper').addClass('has-scroll');
		}
		// When the viewport size is changed, check again if the element needs
		// to be scrollable
		$(window).on('resize orientationchange', function() {
			if (element.outerWidth() > element.parent().outerWidth()) {
				element.data('scrollWrapper').addClass('has-scroll');
			} else {
				element.data('scrollWrapper').removeClass('has-scroll');
			}
		});
	});
}
/*-------------------------------------------
 LOCATOR SERVICES
 Pint locator, scoop shop locator, 
 location storage, location validation, 
 and display methods.
 -------------------------------------------*/
function showInputBox() {
	$('span.location-name').hide();
	$('#changeForm').show();
	$('.logo').addClass('logoSlideDown');
}
function getCountry() {
	var country = "";
	if (lang_locale) {
		country = lang_locale.substring(3, 5);
	}
	return country;
}
/*
function scoopShopLocatorSetup() {// sets up locator events
	if (navigator.geolocation) {
		var address = $.parseJSON(sessionStorage.getItem('address'));// address object from w2gi
		if (address !== null) {
			displayLocatorService(address);
		} else {
			navigator.geolocation.getCurrentPosition(w2giReversegeocoderServiceFromGeoposition);
		}
		clearInterval(loadingInterval);
	} else {
		$('#current-loc').text("Geolocation is not supported by this browser.");
	}
	$('.accordion-button-up a.change-location').on('click', showInputBox);
	$('a.nav-submit-location').on('click', function(e) {
		$(".navLocationChanger").submit();
	});
	$(".navLocationChanger").submit(function(e) {
		e.preventDefault(); // prevent default form submit
		w2giGeocoderServiceFromEvent(e);
	});
	$('button.widget-submit-location').on('click', function(e) {
		$(".widgetLocationChanger").submit();
	});
	$(".widgetLocationChanger").submit(function(e) {
		e.preventDefault(); // prevent default form submit
		w2giGeocoderServiceFromEvent(e);
	});
	$('select#findflavor').change(pintLocator);
	$('select#findflavorS').change(pintLocator);
	if (typeof (upcS) != "undefined" && upcS !== null && upcS.trim() !== '') {
		pintLocator();
	}
	if ($("#findScoopShop").length > 0) {
		var address = $.parseJSON(sessionStorage.getItem('address'));// address object from w2gi
		if (address !== null) {
			w2giLocatorsearchServiceFromAddress(address, true);
		}
	}
}
*/
function w2giReversegeocoderServiceFromGeoposition(geoposition) {// geoposition object from browser
	var url = $('#changer').attr('action');
	var data = {
		'formdataid' : 'reversegeocoder',
		'latitude' : geoposition.coords.latitude,
		'longitude' : geoposition.coords.longitude,
		'country' : getCountry()
	};
	$.post(url, data, function(response) {
		validateReversegeocoderResponse(response);
	}, "json");
}
function w2giGeocoderServiceAutoComplete(request, response) {
	if ($('#textInput').val() && $('#textInput').val() !== "") {
		var url = $('#changer').attr('action');
		var data = {
			'formdataid' : 'geocoder',
			'addressline' : $('#textInput').val(),
			'country' : getCountry()
		};
		$.post(url, data, function(res) {
			if (!!res.response.collection.collection) {
				var results = res.response.collection.collection.address;
				var returnvalue = [];
				results.forEach(function(entry) {
					if ($.inArray(entry.city + ", " + entry.state, returnvalue) == -1) {
						returnvalue.push(entry.city + ", " + entry.state);
					}
				});
				response(returnvalue.sort());
			}
		}, "json");
	}
}
function w2giGeocoderServiceFromEvent(event) {// event from form input
	var target = $(event.target);
	if (target.find('#textInput').val() && target.find('#textInput').val() !== "") {
		var url = target.attr('action');
		var data;
		// use old service if non-us
		if (typeof (lang_locale) != "undefined" && lang_locale !== null && lang_locale.trim() == 'en_US') {
			data = {
				'formdataid' : 'geocoder',
				'addressline' : target.find('#textInput').val(),
				'stateonly' : '1',
				'country' : getCountry()
			};
		} else {
			data = {
				'formdataid' : 'geocoder',
				'addressline' : target.find('#textInput').val(),
				'country' : getCountry()
			};
		}
		$.post(url, data, function(response) {
			validateGeocoderResponse(response);
		}, "json");
	}
	// $('#changeForm').hide();
	// $('span.location-name').show();
}
function w2giLocatorsearchServiceFromAddress(address) {// address object from w2gi
	var url = $('#changer').attr('action');
	var data;
	if (address.georesult.indexOf("02 W2GISTATE") != -1) {
		data = {
			'formdataid' : 'locatorsearch',
			'country' : getCountry(),
			'latitude' : address.latitude,
			'longitude' : address.longitude,
			'addressline' : address.city + ", " + address.state,
			'proximitymethod' : 'straightline',
			'sort' : 'distance',
			'searchradius' : '200',
			'stateonly' : '1'
		};
	} else {
		// use old service if non-us
		if (typeof (lang_locale) != "undefined" && lang_locale !== null && lang_locale.trim() == 'en_US') {
			data = {
				'formdataid' : 'locatorsearch',
				'country' : getCountry(),
				'latitude' : address.latitude,
				'longitude' : address.longitude,
				'addressline' : address.city + ", " + address.state,
				'proximitymethod' : 'straightline',
				'sort' : 'distance',
				'limit' : '4',
				'searchradius' : '200',
				'stateonly' : '1'
			};
		} else {
			data = {
				'formdataid' : 'locatorsearch',
				'country' : getCountry(),
				'latitude' : address.latitude,
				'longitude' : address.longitude,
				'addressline' : address.city + ", " + address.state,
				'proximitymethod' : 'straightline',
				'sort' : 'distance',
				'limit' : '4',
				'searchradius' : '200'
			};
		}
	}
	$.post(url, data, function(response) {
		validateLocatorsearchResponse(response);
	}, 'json');
}
function validateReversegeocoderResponse(response) {// response object from w2gi
	if (null !== response && null !== response.response) {
		if (null !== response.response.collection) {
			var address = null;
			if (null !== response.response.collection.address) {
				address = response.response.collection.address;
			} else if (null !== response.response.collection.collection && null !== response.response.collection.collection.address) {
				address = response.response.collection.collection.address[0];
			}
			if (null !== address) {
				displayLocatorService(address);
			} else {
				displayLocatorServiceUnavailable();
			}
		} else {
			displayLocatorServiceNoResults();
		}
	} else {
		displayLocatorServiceUnavailable();
	}
}
function validateGeocoderResponse(response) {// response object from w2gi
	if (null !== response && null !== response.response) {
		if (null !== response.response.collection) {
			var address = null;
			if (null !== response.response.collection.address) {
				$('#changeForm').hide();
				$('span.location-name').show();
				$('.logo').removeClass('logoSlideDown');
				address = response.response.collection.address;
				displayLocatorService(address);
				w2giLocatorsearchServiceFromAddress(address);
			} else if (null !== response.response.collection.collection && null !== response.response.collection.collection.address) {
				// Need to do something here to differentiate between duplicates
				jQuery(".navLocationChanger #textInput").autocomplete("option", "source", createArrayForAutoComplete(response.response.collection.collection.address));
				jQuery(".navLocationChanger #textInput").autocomplete("enable");
				jQuery(".navLocationChanger #textInput").autocomplete("search", "");
			} else {
				displayLocatorServiceUnavailable();
				$('#changeForm').hide();
				$('span.location-name').show();
				$('.logo').removeClass('logoSlideDown');
			}
		} else {
			displayLocatorServiceNoResults();
			$('#changeForm').hide();
			$('span.location-name').show();
			$('.logo').removeClass('logoSlideDown');
		}
	} else {
		displayLocatorServiceUnavailable();
		$('#changeForm').hide();
		$('span.location-name').show();
		$('.logo').removeClass('logoSlideDown');
	}
}
function createArrayForAutoComplete(address) {
	var returnArray = [];
	address.forEach(function(entry) {
		returnArray.push({
			label : entry.city + ", " + entry.state + " (" + entry.county + ")",
			value : entry.city + ", " + entry.state + " " + entry.postalcode
		});
	});
	return returnArray.sort();
}
function validateLocatorsearchResponse(response) {// response object from w2gi
	if (null !== response && null !== response.response) {
		if (null !== response.response.collection) {
			if (null !== response.response.collection.poi) {
				displayMap(response.response.collection.mapurl + "limit=4&");
				displayPoiList(response.response.collection.poi);
			} else {
				displayLocatorServiceNoResults();
			}
		} else {
			displayLocatorServiceNoResults();
		}
	} else {
		displayLocatorServiceUnavailable();
	}
}
function displayMap(mapUrl) {
	if (mapUrl !== undefined) {
		$('.map.nav-bar-map > img').attr('src', mapUrl);
	}
}
function displayPoiList(poi) {
	var locatorUrl = $('#scoopShopLink').attr('href');
	$(".find-a-scoop-shop .shop-results.basic").empty();
	$('#findScoopShopNone').hide();
	$('#findScoopShop').show();
	$('#findScoopShopNoneText').hide();
	$('#findScoopShopNoneLabel').hide();
	$('#findScoopShopLabel').show();
	$(".accordion-tab-content .shop-results.basic").empty();
	var displayedLocations = 0;// temp check for results
	$(poi).each(function(index) {
		if (this.json || !(typeof (lang_locale) != "undefined" && lang_locale !== null && lang_locale.trim() == 'en_US')) {
			displayedLocations++;
			var shopsite = "";
			shopsite += "http://";
			shopsite += document.domain;
			if (this.subdomain) {
				shopsite += '/' + this.subdomain;
			} else {
				// shopsite += renderContext_mainResource_node_path;//global var from template
				shopsite += "/scoop-shops";// hardcoded until path issue is resolved
			}
			$(".find-a-scoop-shop .shop-results.basic").append('<li>' 
				+ '<ul class="shop-info">' 
				+ '<li class="address"><div>' 
				+ '<h6><a id="address"' + index + '-name" href="' + shopsite + '">' + this.name + '</a></h6>' 
				+ '<div class="street-address">' 
				+ '<span id="address' + index + '-address1">' + this.address1 + '</span><br />' 
				+ '<span id="address' + index + '-city">' + this.city + '</span>, ' 
				+ '<span id="address' + index + '-state">' + this.state + '</span>' 
				+ '<span id="address' + index + '-zip"> ' + this.postalcode + '</span><br />' 
				+ '<span id="address' + index + '-telephone">' + this.phone + '</span>' 
				+ '</div></div></li>' 
				+ '</ul></li>');
			if (index <= 3) {
				$(".accordion-tab-content .shop-results.basic").append('<li>' 
					+ '<ul class="shop-info">' 
					+ '<li class="address"><div>' 
					+ '<h6><a id="address' + index + '-name" href="' + shopsite + '">' + this.name + '</a></h6>' 
					+ '<a target="_blank" href="' + locatorUrl + '" class="cta" itemprop="map" onclick="javascript:addUDMEvent(\'Click\',\'Shop Locator\',\'Map It\');">Map It&nbsp;<i class="ss-icon ss-navigateright"></i></a>' 
					+ '<div class="street-address">' 
					+ '<span id="address' + index + '-address1">' + this.address1 + '</span><br />' 
					+ '<span id="address' + index + '-city">' + this.city + '</span>, ' 
					+ '<span id="address' + index + '-state">' + this.state + '</span>' 
					+ '<span id="address' + index + '-zip"> ' + this.postalcode + '</span><br />' 
					+ '<span id="address' + index + '-telephone">' + this.phone + '</span>' 
					+ '</div></div></li>' 
					+ '</ul></li>');
			}
		}
	});
	if (displayedLocations > 0) {
		displayLocatorServiceSuccess();
	} else {
		displayLocatorServiceNoResults();
	}
}
function displayLocatorService(address) { // address object from w2gi
	if (address.georesult && address.georesult !== "00 FAILED") {
		sessionStorage.setItem('address', JSON.stringify(address));
		$('#current-loc').text(getDisplayedLocation(address));// displayed location
		scoopShopLink = encodeURI('?country=' + address.country + '&addressline=' + $('#current-loc').text());
		$('#scoopShopLink').attr('href', $('#scoopShopLink').attr('href').split("?")[0] + scoopShopLink); // updates params for the locator
		$('#textInput').val($('#current-loc').text());
		$('#currentZip').text(address.postalcode);// zip for pint locator
		currentZip = address.postalcode;
		if (typeof (zipS) != "undefined" && zipS !== null && zipS.trim() !== '') {
			currentZip = zipS;
		}
		$('#currentZipS').val(currentZip);// zip for the separate pint locator
		displayLocatorServiceSuccess();
	} else {
		displayLocatorServiceNoResults();
	}
}
function getDisplayedLocation(address) { // address object from w2gi
	var displayedLocation = "";
	var partcount = 0;
	if (address.city) {
		displayedLocation += address.city;
		partcount++;
	}
	if (address.state) {
		if (partcount > 0) {
			displayedLocation += " , ";
		}
		displayedLocation += address.state;
		partcount++;
	}
	if (address.province) {
		if (partcount > 0) {
			displayedLocation += " , ";
		}
		displayedLocation += address.province;
		partcount++;
	}
	if (address.county) {
		if (partcount < 1) {
			displayedLocation += address.county;
			partcount++;
		}
	}
	if (address.country) {
		if (partcount < 2) {
			if (address.country !== getCountry()) {
				if (partcount > 0) {
					displayedLocation += " , ";
				}
				displayedLocation += address.country;
				partcount++;
			}
		}
	}
	if (address.postalcode) {
		if (partcount < 2) {
			if (partcount > 0) {
				displayedLocation += " , ";
			}
			displayedLocation += address.postalcode;
			partcount++;
		}
	}
	return displayedLocation;
}
function displayLocatorServiceUnavailable() {
	$('#locator-service-unavailable-store').show();
	$('#locator-service-no-results-store,#locator-service-suggestions,.shop-results.basic,#scoopShopLink,#locator-service-loading,#locator-service-map').hide();
	$("#locator-service-suggestions-list").empty();
}
function displayLocatorServiceNoResults() {
	$('#locator-service-no-results-store').show();
	$('.accordion-tab-content #locator-service-unavailable-store, .accordion-tab-content #locator-service-suggestions, .accordion-tab-content .shop-results.basic, #scoopShopLink, #locator-service-loading, #locator-service-map').hide();
	$(".accordion-tab-content #locator-service-suggestions-list").empty();
	$('#findScoopShop').hide();
	$(".find-a-scoop-shop #locator-service-suggestions-list").empty();
	$(".find-a-scoop-shop .shop-results.basic").empty();
	$('#findScoopShopNone').show();
	$('#findScoopShopNoneText').show();
	$('#findScoopShopLabel').hide();
	$('#findScoopShopNoneLabel').show();
}
function displayLocatorServiceSuccess() {
	$(".find-a-scoop-shop .shop-results.basic, .find-a-scoop-shop #locator-service-map, .find-a-scoop-shop #scoopShopLink").show();
	$(".find-a-scoop-shop #locator-service-unavailable-store, #locator-service-no-results-store, #locator-service-suggestions,#locator-service-loading").hide();
	$(".find-a-scoop-shop #locator-service-suggestions-list").empty();
	$(".accordion-tab-content .shop-results.basic, .accordion-tab-content #locator-service-map, .accordion-tab-content #scoopShopLink").show();
	$(".accordion-tab-content #locator-service-unavailable-store, #locator-service-no-results-store, #locator-service-suggestions,#locator-service-loading").hide();
	$(".accordion-tab-content #locator-service-suggestions-list").empty();
}
function loadingLocatorService() {
	$('#locator-service-unavailable-store, #locator-service-no-results-store, #locator-service-suggestions, #locator-service-loading').hide();
	$('#locator-service-loading').show();
}
function pintLocator() {
	var productid = $('#findflavor' + separatePintLocator).find(":selected").attr('value');
	if (typeof (upcS) != "undefined" && upcS !== null && upcS.trim() !== '') {
		if (separatePintLocator === '') {
			productid = upcS;
			$('select#findflavorS option[value=' + upcS + ']').attr('selected', 'selected');
		}
		separatePintLocator = 'S';
	}
	locatePint(productid);
}
function locatePint(productid) {
	$('#pint-locator-service-loading').show();
	if (navigator.geolocation && productid !== undefined && productid.length !== 0) {
		var url = $('#pintForm' + separatePintLocator).attr('action');
		$("#locator-service-loading" + separatePintLocator).show();
		$('#no-selected-flavorS,#locator-service-unavailable-pint' + separatePintLocator + ',#locator-service-select-flavor' + separatePintLocator + ', #locator-service-no-flavor' + separatePintLocator + ',.shop-results.pint' + separatePintLocator).hide();
		if (separatePintLocator == 'S') {
			currentZip = $('#currentZipS').val();
		} else {
			currentZip = $('#currentZip').text();
		}
		if (typeof (zipS) != "undefined" && zipS !== null && zipS.trim() !== '' && separatePintLocator == 'S') {
			currentZip = zipS;
		}
		var data = {
			'url' : $('#pintInputUrl' + separatePintLocator).val(),
			'productid' : productid,
			'zip' : currentZip
		};
		$.post(url, data, function(response) {
			if (null !== response && null !== response.RESULTS && null !== response.RESULTS.STORES && null !== response.RESULTS.STORES.STORE) {
				var store = response.RESULTS.STORES.STORE;
				$(".shop-results" + separatePintLocator + ".pint").empty().show();
				$(store).each(function(index) {
					if (separatePintLocator == 'S') {
						$(".shop-results" + separatePintLocator + ".pint").append('<li><span class="store">' 
							+ '<span id="pint0-name" style="font-size:1.7rem;"><b>' 
							+ this.NAME + '</b></span> ' 
							+ '<span class="distance" id="pint0-distance">(' 
							+ this.DISTANCE + ' miles)</span></span>' 
							+ '<span><br/>' 
							+ this.ADDRESS 
							+ '</span>' 
							+ '<br /> ' 
							+ '<span>' 
							+ this.CITY + ', ' + this.STATE + ' ' + this.ZIP 
							+ '</span>' + '<br /> ' 
							+ '<span class="tel" id="pint0-telephone">' 
							+ this.PHONE 
							+ '</span> <a id="pint0-link" target="_blank" href="http://maps.google.com/?q=' 
							+ this.LATITUDE + ',' + this.LONGITUDE 
							+ '" class="cta" itemprop="map" onclick="javascript:addUDMEvent(\'Click\',\'Pint Locator\',\'Map It\');">Map It&nbsp;<i class="ss-icon ss-navigateright"></i></a>' 
							+ '</li>');
					} else {
						$(".shop-results.pint").append('<li><h6 class="store">' 
							+ '<span id="pint0-name">' 
							+ this.NAME 
							+ '</span><br />' 
							+ '<span class="distance" id="pint0-distance">(' 
							+ this.DISTANCE 
							+ ' miles away)</span>' 
							+ '</h6> <br /> <span class="tel" id="pint0-telephone">' 
							+ this.PHONE 
							+ '</span> <a id="pint0-link" target="_blank" href="http://maps.google.com/?q=' 
							+ this.LATITUDE + ',' + this.LONGITUDE 
							+ '" class="cta" itemprop="map" onclick="javascript:addUDMEvent(\'Click\',\'Pint Locator\',\'Map It\');">Map It&nbsp;<i class="ss-icon ss-navigateright"></i></a>' 
							+ '</li>');
					}
				});
				$('#locator-service-unavailable-pint' + separatePintLocator + ', #locator-service-loading' + separatePintLocator + ', #locator-service-select-flavor' + separatePintLocator + ', #locator-service-no-flavor' + separatePintLocator).hide();
				$('#findflavor' + separatePintLocator + ', #pintLocatorLink' + separatePintLocator).show();
			} else {
				$('#locator-service-no-flavor' + separatePintLocator).show();
				$('#pintLocatorLink' + separatePintLocator + ', .shop-results' + separatePintLocator + '.pint, #locator-service-loading' + separatePintLocator + ', #locator-service-unavailable-pint' + separatePintLocator + ', #locator-service-select-flavor' + separatePintLocator).hide();
			}
			$('#pint-locator-service-loading').hide();
		}, 'json').fail(function() {
			$('#pint-locator-service-loading').hide();
			$('#locator-service-unavailable-pint' + separatePintLocator).show();
			$('#pintLocatorLink' + separatePintLocator + ', #locator-service-loading' + separatePintLocator + ', #locator-service-select-flavor' + separatePintLocator).hide();
		});
		upcS = "";
	} else {
		$('#pint-locator-service-loading').hide();
		$('#no-selected-flavorS,#locator-service-select-flavor' + separatePintLocator).show();
		$('#pintLocatorLink' + separatePintLocator + ', #locator-service-loading' + separatePintLocator + ', .shop-results' + separatePintLocator + ', #locator-service-unavailable-pint' + separatePintLocator + ', #locator-service-select-flavor' + separatePintLocator + ', #locator-service-no-flavor' + separatePintLocator).hide();
	}
}
function createNewLocation(location) {
	$('#textInput').val(location);
	$('a.submit-location').click();
}
/*-------------------------------------------
 SOCIAL SHARING
 -------------------------------------------*/
function socialSharing() {
	var twShareUrl = "https://twitter.com/share?";
	var gpShareUrl = "https://plus.google.com/share?";
	$("#socialShareList").data('targeturl', document.URL);
	// page share
	$('.fb-share').on('click', function() {
		var targetUrl = $(this).closest('ul').data('targeturl');
		var shareImg = $(this).data('shareimage');
		if (targetUrl == "SELECTED_VIDEO") targetUrl = $('#selectedVid').attr("src");
		if (!!shareImg && shareImg.length) {
			FB.ui({
				method : 'feed',
				link : targetUrl,
				picture : shareImg,
				// caption : '',
				description : $(this).data('sharetext')
			}, function(response) {
			});
		} else {
			FB.ui({
				method : 'feed',
				link : targetUrl,
				// caption : '',
				description : $(this).data('sharetext')
			}, function(response) {
			});
		}
	});
	$('.tw-share').on('click', function(event) {
		event.preventDefault();
		var targetUrl = $(this).closest('ul').data('targeturl');
		if (targetUrl == "SELECTED_VIDEO") targetUrl = $('#selectedVid').attr("src");
		params = "text=" + encodeURIComponent($(this).data('sharetext')) + "&url=" + targetUrl;
		shareWindow(twShareUrl + params);
	});
	$('.gp-share').on('click', function() {
		var targetUrl = $(this).closest('ul').data('targeturl');
		if (targetUrl == "SELECTED_VIDEO") targetUrl = $('#selectedVid').attr("src");
		params = "text=" + encodeURIComponent($(this).data('sharetext')) + "&url=" + targetUrl;
		shareWindow(gpShareUrl + params);
	});
	function shareWindow(url) {
		window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=260,width=600');
		return false;
	}
}
function updateFlavorName() {
	if ($('#shareProductInfo').length) {
		$('#ice-cream-near').text($('#shareProductInfo').text() + ' Near:');
	}
}
function heroUtilityToggle() {
	$('#findItButton').unbind('click');
	$("#findItButton").click(function() {
		if ($('.btn-geo').is(':visible')) {
			$(".btn-geo").click();
		}
		if ($(".toggle-utility-nav").is(':visible')) {
			$(".toggle-utility-nav").click();
		}
		if (($(window).height() < 768) || ($(window).width() < 768)) {
			$("html, body").animate({
				scrollTop : 0
			}, "slow");
			return false;
		}
	});
}
function availableAsNutrition() {
	$(".packaging-list-item").click(function() {
		var image_name = $(this).find(".image_name").attr("value");
		$(".package-image").attr("src", image_name);
		var image_nutrition = $(this).find(".image_nutrition").attr("value");
		$(".package-nutrition").attr("src", image_nutrition);
		var ingredients = $(this).find(".ingredients").attr("value");
		$(".package-ingredients").text(ingredients);
		var allergy_info = $(this).find(".allergy_info").attr("value");
		$(".package-allergy_info").text(allergy_info);
		var product_desc = $(this).find(".product_desc").attr("value");
		$("#productDetails-product_desc").text(product_desc);
		var product_story = $(this).find(".product_story").attr("value");
		$("#productDetails-product_story").text(product_story);
		var is_new = $(this).find(".is_new").attr("value");
		if (is_new == 'true') {
			$(".flavor-hero figcaption").show();
		} else {
			$(".flavor-hero figcaption").hide();
		}
		var pos = $('.content').offset();
		$("html, body").animate({
			scrollTop : pos.top
		}, "slow");
	});
}
function findFlavorNow(upc) {//used in flavorDetail
	$('#findflavor option[value=' + upc + ']').attr('selected', 'selected');
	$('#findflavor').trigger('change');
	$('#pintTabBtn').click();
}
function tiltPhotos() {
	$(".tilted").each(function() {
		var rNum = (Math.random() * 4) - 2;
		$(this).css({
			'-webkit-transform' : 'rotate(' + rNum + '2deg)',
			'-moz-transform' : 'rotate(' + rNum + '2deg)'
		});
	});
}
/*-------------------------------------------
 LOAD MORE BUTTON FOR ANYTHING
 Loads more content into a container
 when the button is clicked. Used on 
 truck tour.
 -------------------------------------------*/
function loadMore() {
	var $container = $('.load-more-container');
	var $button = $container.find('.load-more-button');
	var $allItems = $container.contents();
	var $more = $container.find('.load-more-more');
	var $newItems = $more.contents();
	// skip lazyloading images in new content
	$newItems.find('img.lazy').each(showLazyload);
	$button.on('click', loadContent);
	function loadContent(e) {
		e.preventDefault();
		$allItems.removeClass('last');
		$container.append($newItems);
		$button.remove();
		$more.remove();
	}
	function showLazyload() {
		var $this = $(this), src = $this.data('original');
		if (src) $this.attr('src', src);
		$this.removeClass('lazy');
	}
}
function doGoToFlavor(formName, action, id) {
	$('#' + formName).attr('action', action);
	$('#productLocaleId').val(id);
	$("#" + formName).submit();
}
// makes secondary nav a slider
function sliderNav() {
	if ($('.main-nav li.active .secondary-nav ul').width() >= $('.main-nav li.active .secondary-nav').width() && $(window).width() > 768) {
		$('.main-nav li.active .secondary-nav ul').css('background', 'none');
		$(".main-nav li.active .secondary-nav > ul").bxSlider({
			slideWidth : "auto",
			controls : true,
			pager : false,
			infiniteLoop : false,
			hideControlOnEnd : true
		});
	}
}
var loadingInterval;
function showLoading() {
	var i = 0;
	var text = $("#current-loc").text();
	loadingInterval = setInterval(function() {
		$("#current-loc").html(text + Array((++i % 3) + 1).join("."));
	}, 500);
}
/*-------------------------------------------
 FLAVORS MASONRY SETUP
 Sets up and runs the filtering from 
 user interaction or saved state.
 -------------------------------------------*/
var $container = $('.isotope');
var filters = {};
function flavorsMasonrySetup() {
	// do stuff when checkbox change
	$container.isotope({
		layoutMode : 'fitRows'
	});
	$('#filters').on('change', function(jQEvent) {
		var $checkbox = $(jQEvent.target);
		manageCheckbox($checkbox);
		var comboFilter = getComboFilter(filters);
		$container.isotope({
			filter : comboFilter
		});
		if ($container.hasClass('filterable') && null !== cookies && cookies.accepted) { // check if has permission to save info
			sessionStorage.setItem($checkbox.attr("name"), $checkbox.prop('checked'));
			sessionStorage.setItem('filters', JSON.stringify(filters));
			sessionStorage.setItem('comboFilter', comboFilter);
		}
		$('.masonry-load:visible').click();
		if ($('.masonryFlavors .isotope-item').length > $('.masonryFlavors .isotope-hidden').length) {
			$('#no-flavors-msg').hide();
		} else {
			$('#no-flavors-msg').show();
		}
	});
	if ($container.hasClass('filterable') && null !== cookies && cookies.accepted) { // check if has permission to save info
		var comboFilter = sessionStorage.getItem('comboFilter');
		var savedFilters = $.parseJSON(sessionStorage.getItem('filters'));
		if (comboFilter && savedFilters) { // check if there is a saved filter
			$("#flavorFilterForm input[type=checkbox]").each(function() {
				var checked = sessionStorage.getItem($(this).attr('name'));
				if (checked && checked == "true") {
					$(this).prop('checked', checked);
				}
			});
			filters = savedFilters;
			$container.isotope({
				filter : comboFilter
			});
			$('.masonry-load:visible').click();
		}
	}
	function getComboFilter(filters) {
		var comboFilters = [];
		for ( var prop in filters) {
			if(filters.hasOwnProperty(prop)) {
				var filterGroup = filters[prop].join('');
				comboFilters.push(filterGroup);
			}
		}
		var comboFilter = comboFilters.join('');
		return comboFilter;
	}
	function manageCheckbox($checkbox) {
		var checkbox = $checkbox[0];
		var group = $checkbox.parents('.option-set').attr('data-group');
		// create array for filter group, if not there yet
		var filterGroup = filters[group];
		if (!filterGroup) {
			filterGroup = filters[group] = [];
		}
		var isAll = $checkbox.hasClass('all');
		// reset filter group if the all box was checked
		if (isAll) {
			delete filters[group];
			if (!checkbox.checked) {
				checkbox.checked = 'checked';
			}
		}
		// index of
		var index = $.inArray($checkbox.attr('data-filter'), filterGroup);
		if (checkbox.checked) {
			var selector = isAll ? 'input' : 'input.all';
			$checkbox.siblings(selector).removeAttr('checked');
			if (!isAll && index === -1) {
				// add filter to group
				filters[group].push($checkbox.attr('data-filter'));
			}
		} else if (!isAll) {
			// remove filter from group
			filters[group].splice(index, 1);
			// if unchecked the last box, check the all
			if (!$checkbox.siblings('[checked]').length) {
				$checkbox.siblings('input.all').attr('checked', 'checked');
			}
		}
	}
}
/*-------------------------------------------
XML PARSER FOR FAQ
Creates an xml parser to be used by 
the dynamic faq component.
-------------------------------------------*/
var parseXml;
if (parseXml == null) {
	if (typeof window.DOMParser != "undefined") {
		parseXml = function(xmlSource) {
			return (new DOMParser().parseFromString(xmlSource, "text/xml"));
		};
	} else if (window.ActiveXObject && typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
		parseXml = function(xmlStr) {
			var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = "false";
			xmlDoc.loadXML(xmlStr);
			return xmlDoc;
		};
	} else {
		throw new Error("No XML parser found");
	}
}
/*-------------------------------------------
PARSE DYNAMIC FAQ XML
Parses the faq xml from a service return
and creates and appends page elements.
-------------------------------------------*/
var htmlMetaCharsFrom = [ "&lt;", "&gt;", "&amp;gt;", "&amp;lt;" ];
var htmlMetaCharsTo = [ "<", ">", "<", ">" ];
function parseFAQXml(container, xml) {
	$(xml).find("faq").each(function() {
		var faqId = $(this).find("faqId").text();
		var faqQ, faqA;
		// IE9 hack
		try {
			faqQ = $(this).find("question").html();
			faqA = $(this).find("answer").html();
		} catch (err) {
			faqQ = $(this).find("question").text();
			faqA = $(this).find("answer").text();
		}
		// change unicode literals from ie9 compatability
		// back into html characters for modern browsers
		for (var i = 0; i < htmlMetaCharsFrom.length; i++) {
			var find = htmlMetaCharsFrom[i];
			var re = new RegExp(find, 'g');
			faqA = faqA.replace(re, htmlMetaCharsTo[i]);
		}
		container.html(container.html() 
			+ '<li class="question" id="' 
			+ faqId 
			+ '" onclick="javascript:UpdateFAQCounter(this, ' 
			+ faqId 
			+ ')"><div class="accordion-button"><span>' 
			+ faqQ 
			+ '</span><i class="ss-icon ss-plus"></i></div><div class="accordion-content"><p>' 
			+ faqA 
			+ '</p></div></li>');
	});
}
/*-------------------------------------------
UPDATE DYNAMIC FAQ COUNTER
Updates the dynamic faq counter.
-------------------------------------------*/
function UpdateFAQCounter(item, id) {
	var url = "http://cswebservices.unilever.com/ifaq/WebService/Service.asmx/UpdateFaqCounter?faqid=" + id;
	$(item).attr("onclick", "addFAQCounter(this," + id + ")");
	try {
		// This will always throw an error when it is returned because of the cross-domain request we are making
		$.ajax({
			url : url,
			cache : false,
			dataType : 'jsonp',
			success : function(response) {
			},
			error : function(jqXHR, textStatus, errorThrown) {
			}
		});
	} catch (e) {
	}
}
function addFAQCounter(item, id) {
	$(item).attr("onclick", "UpdateFAQCounter(this," + id + ")");
}