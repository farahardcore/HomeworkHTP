(function () {
    "use strict";
    let count;
    function dataListener(text, ...rest) {
        text = text.split(" ");
        console.log(text);
        console.log(rest);
        for (let j = 0; j < rest.length; j++) {
            count = rest[j] * 1000
            setTimeout(function () {
                for (let i = 0; i < text.length; i++) {
                    console.log(text[i]);
                }
            }, count);
        };
    };
    dataListener("Введите любой текст через пробел", 4, 6, 2, 8, 10);

})();