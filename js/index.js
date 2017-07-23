$(document).ready(function() {
  console.log('Document Ready');

	$('#switch').on('change', function() {
		const status = $(this).is(':checked');
		setTimeout(function () {
			if (status) {
				$('#status').html('on');
			} else {
				$('#status').html('off');
			}
		}, 250);
	})
});
