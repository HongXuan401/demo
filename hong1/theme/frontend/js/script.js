const getCookieValue = (name) => (
	document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
);
var PROGRAM = (function () {
	var _initCoursesSlider = function () {
		let swiper = new Swiper(".our-courses__slider .swiper-container", {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			breakpoints: {
				1200: {
					slidesPerView: 5
				},
				768: {
					slidesPerView: 3
				},
				450: {
					slidesPerView: 2
				}
			},
			slidesPerView: 1,
			spaceBetween: 16,
			on: {
				slideChangeTransitionEnd: function (event) {
					var index = document.querySelector(".our-courses__slider .swiper-slide-active").childNodes;
					if (typeof (index) == undefined || typeof (index) == null) return;
					var childItem = index[1];
					var img = childItem.getAttribute("img");
					var slug = childItem.getAttribute("slug");
					var pushImg = document.querySelector(".our-courses__content ._course__img img");
					var pushSlug = document.querySelector(".our-courses__content ._more");
					/*pushImg.setAttribute("src", img);
					pushSlug.setAttribute("href", slug);*/
				}

			}
		});
	}
	var _initPartnerSlider = function () {
		var swiper = new Swiper(".our-partners__slider .swiper", {
			slidesPerView: 5,
			freeMode: true,
			spaceBetween: 1,

			navigation: {
				nextEl: ".next-hr_partner",
				prevEl: ".prev-hr_partner",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.5,
					spaceBetween: 0,
					freeMode: true,
				},
				575: {
					slidesPerView: 1.5,
					spaceBetween: 0
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 0
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 0,
					grid: {
						rows: 3,
					},
				}
			}
		});
	}
	var swiper = new Swiper(".slide_banner", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
	var swiper = new Swiper(".our_news_slide", {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
	var swiper = new Swiper(".our_philosophy__slide .mySwiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 0,
				freeMode: true
			},
			575: {
				slidesPerView: 1.5,
				spaceBetween: 0
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 0
			},
			1200: {
				slidesPerView: 4.5,
				spaceBetween: 0,
			},
			1440: {
				slidesPerView: 5,
				spaceBetween: 0
			}
		}
	});
	var swiper = new Swiper(".mySwiper_partner", {
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 1,
				freeMode: true
			},
			575: {
				slidesPerView: 1.5,
				spaceBetween: 1
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 1
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 1
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 1
			}
		}
	});
	return {
		_: function () {
			_initCoursesSlider();
			_initPartnerSlider();
		}
	};
})();
window.onload = function () {
	PROGRAM._();
};
$(document).ready(function () {
	setInterval(loopTime, 1000);
})

