/* Main script: builds the lists, menu, counters and photo boxes */
(function () {
  "use strict";

  // Content (from my report)
  var importance = [
    ["Food security", "Nearly 95% of the world’s food comes directly from soil. If fertile soil is lost, crop yield falls."],
    ["Slow to renew", "Just 1 cm of topsoil takes hundreds to thousands of years to form."],
    ["Stops erosion", "Protected soil keeps the land stable and stops it turning into desert."],
    ["Fertility", "Too much chemical fertilizer and pesticide lowers the natural fertility of soil."],
    ["Climate", "Soil stores a lot of carbon. Damaged soil releases carbon dioxide instead."],
    ["Water", "Healthy soil soaks up rainwater, which reduces floods and droughts."],
    ["Biodiversity", "Earthworms, insects and microbes live in soil and keep nature in balance."],
    ["Future generations", "Farming, forests and industry all need fertile soil, now and in future."]
  ];
  var activities = [
    ["Socio-economic survey", "A questionnaire on farming methods, fertilizer use, crop rotation and what farmers know about soil conservation."],
    ["Field visits", "Looking at farmland for signs of soil erosion, over-farming and chemical use."],
    ["Awareness sessions", "Charts, posters and demonstrations, plus Telugu videos on soil damage."],
    ["Compost demonstration", "Showing how to make a compost pit from cow dung, kitchen waste, dry leaves and crop waste."],
    ["School awareness", "An interactive session at the local ZP High School on soil health."],
    ["Group discussions", "Small meetings with farmers about mixed cropping."]
  ];
  var weeks = [
    ["Week 1", "01/06/26 – 06/06/26", "Soil protection basics and field visits", "I learned the basics of soil protection, planned my project, visited fields to see different soils, and talked to farmers about their soil problems."],
    ["Week 2", "08/06/26 – 13/06/26", "Soil erosion", "I studied erosion and its causes, saw it in the fields, and put everything into my project presentation."],
    ["Week 3", "15/06/26 – 20/06/26", "Soil conservation", "I noted ways to conserve soil, watched the process in the fields, started a mini garden near my house, and visited fields to learn about plant rotation."],
    ["Week 4", "21/06/26 – 26/06/26", "Soil testing", "I collected soil samples and did physical tests on texture, colour and structure."],
    ["Week 5", "29/06/26 – 04/07/26", "Soil protection plan", "I made a soil protection plan, spoke to farmers in the fields, practised in my mini garden, and collected natural materials that help soil."],
    ["Week 6", "06/07/26 – 11/07/26", "Implementation", "I revised weeks 2 to 5, used cow and buffalo dung, added compost, and planted vegetables and flowers."],
    ["Week 7", "", "No separate activity log in the report", "My report has no entry for this week, so I have not added any. To be confirmed with my guide.", true],
    ["Week 8", "ending 26/07/26", "Mini project and close", "My report lists a two-week webpage mini project from 13/07/26 to 26/07/26. This overlaps Week 7, so the exact dates need to be confirmed.", true]
  ];
  var questions = [
    "What type of crops do you usually cultivate in your land?",
    "Have you ever tested your soil for fertility or nutrient content?",
    "What fertilizers do you commonly use: chemical, organic, or both?",
    "Are you aware of soil erosion problems in your area?",
    "What methods do you use to prevent soil erosion?",
    "Have you heard about organic compost or vermicomposting?",
    "Do you practice crop rotation or intercropping?",
    "What do you think causes soil degradation in your village?",
    "Are you interested in attending training programs on soil protection?",
    "What support do you expect from the government or organizations to protect the soil?"
  ];
  var gallery = [
    ["field-visit.jpg", "Students observing soil in a field", "Field visit"],
    ["erosion-observation.jpg", "Students studying eroded ground", "Erosion observation"],
    ["soil-collection.jpg", "Hands holding a handful of soil", "Soil sample collection"],
    ["farmer-interview.jpg", "Student interviewing a farmer", "Farmer interaction"],
    ["awareness-session.jpg", "Awareness session with posters and charts", "Awareness session"],
    ["school-session.jpg", "Awareness session at ZP High School", "School session"],
    ["compost-demo.jpg", "Compost pit demonstration", "Compost demonstration"],
    ["mini-garden-planting.jpg", "Planting vegetables and flowers in the mini garden", "Mini garden planting"]
  ];

  // ---- Helpers ----
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }
  function cards(id, list) {
    var box = document.getElementById(id);
    list.forEach(function (c) { box.appendChild(el("article", "card", "<h3>" + c[0] + "</h3><p>" + c[1] + "</p>")); });
  }
  // Photo slot: shows the image if the file exists, else a clearly marked placeholder.
  function photo(fig, src, alt, label) {
    var img = new Image();
    img.alt = alt;
    img.onload = function () { fig.innerHTML = ""; fig.classList.remove("empty"); fig.removeAttribute("role"); fig.removeAttribute("aria-label"); fig.appendChild(img); };
    fig.classList.add("empty");
    fig.innerHTML = '<span><b>Photo placeholder</b>' + label + '<small>Add ' + src + '</small></span>';
    fig.setAttribute("role", "img"); fig.setAttribute("aria-label", "Placeholder: " + alt);
    img.src = src;
  }

  document.addEventListener("DOMContentLoaded", function () {
    cards("importGrid", importance);
    cards("actGrid", activities);

    var tl = document.getElementById("timeline");
    weeks.forEach(function (w) {
      tl.appendChild(el("li", w[4] ? "gap" : "", "<span class='wk'>" + w[0] + "</span><div><small>" + w[1] + "</small><h3>" + w[2] + "</h3><p>" + w[3] + "</p>" + (w[4] ? "<em>To confirm</em>" : "") + "</div>"));
    });

    var q = document.getElementById("qList");
    questions.forEach(function (t) { q.appendChild(el("li", "", t)); });

    var g = document.getElementById("galleryGrid");
    gallery.forEach(function (it) { var f = el("figure", "ph"); g.appendChild(f); photo(f, "images/" + it[0], it[1], it[2]); });
    document.querySelectorAll("figure.ph[data-src]").forEach(function (f) { photo(f, f.dataset.src, f.dataset.alt, f.dataset.label); });

    // Menu
    var btn = document.getElementById("menuBtn"), menu = document.getElementById("menu");
    function setMenu(open) { menu.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); btn.textContent = open ? "Close" : "Menu"; }
    btn.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    menu.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

    // Hero counters (skipped when reduced motion is requested)
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-count]").forEach(function (b) {
        var end = +b.dataset.count, suf = b.dataset.suffix || "", t0 = null;
        function step(t) { t0 = t0 || t; var p = Math.min((t - t0) / 1200, 1); b.textContent = Math.round(end * p) + suf; if (p < 1) requestAnimationFrame(step); }
        b.textContent = "0" + suf; requestAnimationFrame(step);
      });
    }
    // Survey bars fill when visible
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("on"); io.unobserve(x.target); } });
    }, { threshold: 0.4 }) : null;
    document.querySelectorAll(".track").forEach(function (t) { io ? io.observe(t) : t.classList.add("on"); });
  });
})();

/* Scroll progress bar and reveal on scroll */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var bar = document.createElement("div");
    bar.className = "progress";
    document.body.appendChild(bar);
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1) * 100) + "%";
    }, { passive: true });

    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".card, .timeline li, .ph, .meter").forEach(function (n, i) {
      n.classList.add("rv"); n.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(n);
    });
  });
})();