document.addEventListener("DOMContentLoaded", function () {
    const eventCallback = function (e) {
        let el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+___(__) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");

        if (clearVal !== "false" && e.type === "blur") {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = "";
                return;
            }
        }
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
        for (let e of ["input", "blur", "focus"]) {
            number.addEventListener(e, eventCallback);
        }
    }
});
