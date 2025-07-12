$(document).ready(function() {
	$('.header__burger').on('click', function() {
		$(this).toggleClass('active')

		$('.header__mobile').toggleClass('active')
	})

	$('.header__remove').on('click', function() {
		$('.header__mobile').removeClass('active')
	})
})
