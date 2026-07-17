// ============================================
// Lume Creative Studio — main.js
// ============================================

(function () {
  // Contact e-mail (assembled here to avoid spam scrapers)
  var email = 'lucas' + '@' + 'growthbylume' + '.com.br';
  document.querySelectorAll('.email-link').forEach(function (a) { a.href = 'mailto:' + email; });
  document.querySelectorAll('.email-text').forEach(function (el) { el.textContent = email; });

  var items = [];
  var workItems = document.querySelectorAll('.work-item');
  var rail = document.getElementById('rail');

  workItems.forEach(function (item, i) {
    var n = String(i + 1).padStart(2, '0');
    var video = item.querySelector('video');
    var frame = item.querySelector('.frame');

    // Rail index number → click scrolls to project
    var num = document.createElement('span');
    num.className = 'rail-num';
    num.textContent = n;
    num.addEventListener('click', function () {
      var top = item.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
    rail.appendChild(num);

    // Adapt frame to real video proportions (vertical videos get narrower)
    video.addEventListener('loadedmetadata', function () {
      if (!video.videoWidth) return;
      frame.style.aspectRatio = video.videoWidth + '/' + video.videoHeight;
      if (video.videoHeight > video.videoWidth) frame.style.maxWidth = '400px';
    });

    items.push({ item: item, video: video, num: num });
  });

  // Play/pause + reveal as each project scrolls into view
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var rec = null;
      for (var k = 0; k < items.length; k++) if (items[k].item === e.target) rec = items[k];
      if (!rec) return;
      if (e.isIntersecting && e.intersectionRatio >= 0.45) {
        rec.item.classList.add('in');
        rec.num.classList.add('on');
        var p = rec.video.play(); if (p && p.catch) p.catch(function () {});
      } else {
        rec.video.pause();
        rec.num.classList.remove('on');
      }
    });
  }, { threshold: [0, 0.45, 0.9] });

  items.forEach(function (r) { io.observe(r.item); });
})();
