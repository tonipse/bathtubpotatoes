$("#slideshow > div:gt(0)").hide();

setInterval(function () {
   $("#slideshow > div:first").fadeOut(500).next().fadeIn(500).end().appendTo("#slideshow");
}, 3000);

$('a[href^="#"]').on("click", function (e) {
   e.preventDefault();
   var target = this.hash;
   var $target = $(target);
   $("html, body")
      .stop()
      .animate(
         {
            scrollTop: $target.offset().top,
         },
         900,
         "swing",
         function () {
            window.location.hash = target;
         }
      );
});
