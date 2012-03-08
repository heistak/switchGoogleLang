// Toggle the default language of Google searches between Japanese and English.

javascript:(
	function() {
		var loc = window.location.toString(), 
			result, 
			ja = "hl=ja", 
			en = "hl=en";

		if (loc.indexOf(ja) != -1) {
			result = loc.replace(ja, en, "g");
		} else {
			result = loc.replace(en, ja, "g");
		}
		
		if (result != loc) {
			window.location = result;
		}
	}
)()