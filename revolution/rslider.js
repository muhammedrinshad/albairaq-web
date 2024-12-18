/* Slider 2 */
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider21"] = {
  once: RS_MODULES.modules["revslider21"] !== undefined ? RS_MODULES.modules["revslider21"].once : undefined,
  init: function () {
    window.revapi2 = window.revapi2 === undefined || window.revapi2 === null || window.revapi2.length === 0 ? document.getElementById("rev_slider_2_1") : window.revapi2;
    if (window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length == 0) {
      window.revapi2initTry = window.revapi2initTry === undefined ? 0 : window.revapi2initTry + 1;
      if (window.revapi2initTry < 20) requestAnimationFrame(function () { RS_MODULES.modules["revslider21"].init(); });
      return;
    }
    window.revapi2 = jQuery(window.revapi2);
    if (window.revapi2.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_2_1");
      return;
    }
    revapi2.revolutionInit({
      revapi: "revapi2",
      sliderLayout: "fullwidth", // Ensures full-width layout
      visibilityLevels: [1600, 1280, 1024, 768, 480], // Adjusted breakpoints
      gridwidth: [1920, 1280, 1024, 768, 480], // Full width for each breakpoint
      gridheight: [1080, 900, 700, 500, 300], // Adjust grid height for consistency
      perspective: 600,
      perspectiveType: "global",
      editorheight: [1080, 900, 700, 500, 400],
      responsiveLevels: [1600, 1280, 1024, 768, 480],
      progressBar: { disableProgressBar: true }, // Disable progress bar
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false, // Do not stop on hover
      },
      viewPort: {
        enable: true,
        visible_area: "100%", // Slider fully visible in viewport
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  }
};
if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal();
}
