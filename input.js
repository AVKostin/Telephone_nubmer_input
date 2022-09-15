document.addEventListener("DOMContentLoaded", function () {
    const eventCallback = function (e) {
        let el = e.target,
            pattern = el.dataset.phonePattern,
            matrix_def = "+___(__) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (e) {
            return /[_\d]/.test(e) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                ? ""
                : e;
        });
    };
    const numbers = document.querySelectorAll("[data-phone-pattern]");

    for (let number of numbers) {
        for (let e of ["input"]) {
            number.addEventListener(e, eventCallback);
        }
    }
});
