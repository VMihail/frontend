'use strict';

(function () {
    const startTime = performance.now();
    window.addEventListener("load", function () {
        const finishTime = performance.now();
        const loadTimeElement = document.getElementById("loadTime");
        loadTimeElement.textContent = Math.round(finishTime - startTime).toString();
    });
})();