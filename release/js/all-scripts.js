$(document).ready(function () {
$(document).ready(function() {
	$('.mask').each(function() {
		IMask(this, {
			mask: '+7 (000) 000-00-00'
		})
	})

	$(document).ready(function() {
		let currentStep = 1
		const totalSteps = 6

		function showStep(step) {
			$('.step').removeClass('active')

			if (step === 7) {
				// Шаг "Спасибо"
				$('#thanks').addClass('active')
				$('.widj__quest, .buttons, .widj__line').hide()
				return
			}

			$('#step-' + step).addClass('active')

			if (step === 6) {
				$('.widj__quest, .buttons').hide()
				$('.widj__line').show()
			} else {
				$('.widj__quest, .buttons, .widj__line').show()
			}

			updateProgress(step)
			$('.widj__quest span').text(step)

			$('.widj-prev').prop('disabled', step === 1)
			$('.widj-next').toggle(step < totalSteps)
		}

		function updateProgress(step) {
			const $line = $('.widj__line-inner div')
			const $text = $('.widj__line-text')

			if (step === 6) {
				$line.css('width', '100%').addClass('success')
				$text.text('Рассчитать')
			} else {
				const percent = (step - 1) / 5 * 100
				$line.css('width', percent + '%')
				$text.text(`Вопрос ${step} из 5`)
			}
		}

		$('.widj-next').on('click', function(e) {
			e.preventDefault()
			if (currentStep < totalSteps) {
				currentStep++
				showStep(currentStep)
			}
		})

		$('.widj-prev').on('click', function(e) {
			e.preventDefault()
			if (currentStep > 1) {
				currentStep--
				showStep(currentStep)
			}
		})

		$('.widj__container--item input[type=radio]').on('change', function() {
			const groupName = $(this).attr('name')
			$(`input[name='${groupName}']`)
				.closest('.widj__container--item')
				.removeClass('checked')

			$(this).closest('.widj__container--item').addClass('checked')
		})

		$('.btn-form').on('click', function(e) {
			e.preventDefault()
			currentStep = 7
			showStep(currentStep)
		})

		showStep(currentStep)
	})

	$('.mont__videos_play').on('click', function() {
		const $container = $(this).closest('.mont__videos_video')
		const $video = $container.find('video').get(0)
		const $button = $(this)

		$video.play()
		$button.removeClass('active').hide()
	})

	$('.mont__videos_video video').on('click', function() {
		if (!this.paused) {
			this.pause()
			const $container = $(this).closest('.mont__videos_video')
			$container.find('.mont__videos_play').addClass('active').show()
		}
	})
})

$(document).ready(function() {
	$('.header__burger').on('click', function() {
		$(this).toggleClass('active')

		$('.header__mobile').toggleClass('active')
	})

	$('.header__remove').on('click', function() {
		$('.header__mobile').removeClass('active')
	})
})

//------------------- map contants -----------------------------

callMap('map', 16);
});