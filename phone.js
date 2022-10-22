// Make sure to place this snippet in the footer or at least after
// the HTML input we're targeting.

$(document).ready(function () {
    var phoneInputID = "#phone";
    var input = document.querySelector(phoneInputID);
    var iti = window.intlTelInput(input, {
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        formatOnDisplay: true,
        // geoIpLookup: function(callback) {
        //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //     var countryCode = (resp && resp.country) ? resp.country : "";
        //     callback(countryCode);
        //   });
        // },
        hiddenInput: "full_number",
        // initialCountry: "auto",
        // localizedCountries: { de: "Deutschland" },
        // nationalMode: false,
        onlyCountries: [
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
        // separateDialCode: true,
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js",
    });

    $(phoneInputID).on("countrychange", function (event) {
        // Get the selected country data to know which country is selected.
        var selectedCountryData = iti.getSelectedCountryData();

        // Get an example number for the selected country to use as placeholder.
        (newPlaceholder = intlTelInputUtils.getExampleNumber(
            selectedCountryData.iso2,
            true,
            intlTelInputUtils.numberFormat.INTERNATIONAL,
        )),
            // Reset the phone number input.
            iti.setNumber("");

        // Convert placeholder as exploitable mask by replacing all 1-9 numbers with 0s
        mask = newPlaceholder.replace(/[1-9]/g, "0");

        // Apply the new mask for the input
        $(this).mask(mask);
    });

    // When the plugin loads for the first time, we have to trigger the "countrychange" event manually,
    // but after making sure that the plugin is fully loaded by associating handler to the promise of the
    // plugin instance.

    iti.promise.then(function () {
        $(phoneInputID).trigger("countrychange");
    });
});
