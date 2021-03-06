function checkiftooltip() {
    $(window).width() > 768 ? ($('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="tooltip"]').tooltip("enable")) : $('[data-toggle="tooltip"]').tooltip("disable")
}

$(document).ready(function() {
        if (checkiftooltip(), $(".lazyload").length && $(".lazyload").lazyload({
                effect: "fadeIn"
            }), $(".galleryContainer").length && $(".galleryContainer").magnificPopup({
                delegate: "a",
                type: "image",
                showCloseBtn: "true",
                removalDelay: 300,
                mainClass: "mfp-fade",
                closeOnContentClick: !0,
                gallery: {
                    enabled: !1,
                    tPrev: "Previous image (Left arrow key)",
                    tNext: "Next image (Right arrow key)",
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                zoom: {
                    enabled: !0,
                    duration: 300,
                    opener: function(e) {
                        return e.find("img")
                    }
                }
            }), $(".personalGalleryContainer").length && $(".personalGalleryContainer").magnificPopup({
                delegate: "a",
                type: "image",
                showCloseBtn: "false",
                removalDelay: 300,
                mainClass: "mfp-fade",
                closeOnContentClick: !0,
                gallery: {
                    enabled: !0,
                    tPrev: "Previous image (Left arrow key)",
                    tNext: "Next image (Right arrow key)",
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                zoom: {
                    enabled: !0,
                    duration: 300,
                    opener: function(e) {
                        return e.find("img")
                    }
                }
            }), function() {
                for (var e = document.querySelectorAll(".youtube"), t = 0; t < e.length; t++) {
                    var o = "https://img.youtube.com/vi/" + e[t].dataset.embed + "/sddefault.jpg",
                        a = new Image;
                    a.src = o, a.alt = "YouTube video thumbnail", a.addEventListener("load", void e[t].appendChild(a)), e[t].addEventListener("click", function() {
                        var e = document.createElement("iframe");
                        e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", ""), e.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1&enablejsapi=1&cc_load_policy=1"), this.innerHTML = "", this.appendChild(e)
                    })
                }
            }(), 
        $(".tiltme").length && $(".hover3d").tilt({
            scale: .9,
            transition: !0
        }), 
        $(".randomBG").length) {
	        var e = ["#00ae88", "#98e9fb", "#75c35b", "#f6486c", "#ff9e00", "#ff8e8e", "#00ae88", "#0064ff", "#ff5c45", "#ff00c3", "#ff8f7b", "#4f77ff", "#c0c650", "#ee98fb", "#5bfee6", "#9f9cff", "#b27cb6", "#a1e75c", "#ff3000", "#ffc600", "#ff0079"];
	        Math.floor(Math.random() * e.length)
        }
    }), $(window).resize(function() {
        checkiftooltip()
    }), $(window).scroll(function() {
        $(this).scrollTop() > 3800 ? $("#toTop").fadeIn("fast", function() {}) : $("#toTop").fadeOut("fast", function() {})
    }), $("#toTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    }), $(".scroll").click(function(e) {
        e.preventDefault();
        var t = 0;
        t = $(this.hash).offset().top > $(document).height() - $(window).height() ? $(document).height() - $(window).height() : $(this.hash).offset().top, $("html,body").animate({
            scrollTop: t
        }, 1e3, "swing")
    }),
    function() {
        var e, t, o = document,
            a = o.getElementById,
            n = o.createElement,
            l = o.getElementsByTagName,
            i = "typef_orm_share";
        a.call(o, i) || ((e = n.call(o, "script")).id = i, e.src = "https://embed.typeform.com/embed.js", (t = l.call(o, "script")[0]).parentNode.insertBefore(e, t))
    }(), $(window).on("wheel", function() {
        $(".mfp-wrap").length && $(".mfp-bg").click()
    });


if ($('.profile').length) {
	$(document).on('click', '[data-toggle="modal"]', function () {
		$('#quickViewModal iframe').attr('src', $(this).attr('data-project'));
		$('#quickViewLabel').text($(this).closest('.subtitle').find('a').text())
		setTimeout(function() {
			$('iframe').contents().find('.compass, .paginationYo, .before-end').hide();
		}, 444);
		
	});	
}









