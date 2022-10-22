(function($) {
	$(function() {

         $(".wpcf7-countrytext").countrySelect({
			defaultCountry: "ua",
			onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
			//preferredCountries: ['ca', 'gb', 'us']
		});


		$(".wpcf7-phonetext").intlTelInput({
              // allowDropdown: false,
              // autoHideDialCode: false,
            //    autoPlaceholder: "off",
              // dropdownContainer: "body",
              // excludeCountries: ["us"],
              // formatOnDisplay: false,
              // geoIpLookup: function(callback) {
              //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              //     var countryCode = (resp && resp.country) ? resp.country : "";
              //     callback(countryCode);
              //   });
              // },
            //    hiddenInput: "full_number",
              // initialCountry: "auto",
              // localizedCountries: { 'de': 'Deutschland' },
               nationalMode: false,
              	onlyCountries: onlyCountries: [
            "al",
            "ad",
            "at",
            "by",
            "be",
            "ba",
            "bg",
            "hr",
            "cz",
            "dk",
            "ee",
            "fo",
            "fi",
            "fr",
            "de",
            "gi",
            "gr",
            "va",
            "hu",
            "is",
            "ie",
            "it",
            "lv",
            "li",
            "lt",
            "lu",
            "mk",
            "mt",
            "md",
            "mc",
            "me",
            "nl",
            "no",
            "pl",
            "pt",
            "ro",
            "ru",
            "sm",
            "rs",
            "sk",
            "si",
            "es",
            "se",
            "ch",
            "ua",
            "gb",
        ],
              // placeholderNumberType: "MOBILE",
              preferredCountries: ["ua"],
               //separateDialCode: true,
              //utilsScript: "nb_intl/js/utils.js"

        });

 });
})(jQuery);