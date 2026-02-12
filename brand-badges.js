// Qonversion Brand — HTTP Method Badge Colors
// GET → Lime Green | POST → Purple (#a07fff)
(function () {
  const style = document.createElement("style");
  style.textContent = `
    /* GET Badges → Lime Green */
    .method-pill.text-green-700 {
      color: #4d7c0f !important;
      background-color: rgba(132, 204, 22, 0.15) !important;
    }
    .dark .method-pill.text-green-700 {
      color: #a3e635 !important;
      background-color: rgba(163, 230, 53, 0.15) !important;
    }
    .method-nav-pill > .text-green-700 {
      color: #4d7c0f !important;
      background-color: rgba(132, 204, 22, 0.15) !important;
    }
    .dark .method-nav-pill > .text-green-700 {
      color: #a3e635 !important;
      background-color: rgba(163, 230, 53, 0.15) !important;
    }
    .method-nav-pill > .bg-\\[\\#2AB673\\] {
      background-color: #65a30d !important;
    }

    /* POST Badges → Purple */
    .method-pill.text-blue-700 {
      color: #7c3aed !important;
      background-color: rgba(160, 127, 255, 0.15) !important;
    }
    .dark .method-pill.text-blue-700 {
      color: #a78bfa !important;
      background-color: rgba(160, 127, 255, 0.15) !important;
    }
    .method-nav-pill > .text-blue-700 {
      color: #7c3aed !important;
      background-color: rgba(160, 127, 255, 0.15) !important;
    }
    .dark .method-nav-pill > .text-blue-700 {
      color: #a78bfa !important;
      background-color: rgba(160, 127, 255, 0.15) !important;
    }
    .method-nav-pill > .bg-\\[\\#3064E3\\] {
      background-color: #a07fff !important;
    }
  `;
  document.head.appendChild(style);
})();
