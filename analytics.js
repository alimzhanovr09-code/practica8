(function () {
  var pageStart = Date.now();
  var clicks = 0;
  var targetButton = document.getElementById('targetBtn');

  function getReport() {
    return {
      page: location.pathname,
      clicksOnTargetButton: clicks,
      secondsOnPage: Math.round((Date.now() - pageStart) / 1000),
      time: new Date().toLocaleTimeString('ru-RU')
    };
  }

  function printReport() {
    console.log('=== Отчёт аналитики ===');
    console.table(getReport());
  }

  if (targetButton) {
    targetButton.addEventListener('click', function () {
      clicks++;
      console.log('Клик по кнопке «' + targetButton.textContent.trim() + '». Всего кликов: ' + clicks);
    });
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      printReport();
    }
  });

  console.log('Трекер аналитики запущен. Отчёт выводится каждые 15 секунд.');
  setInterval(printReport, 15000);
  window.getAnalyticsReport = getReport;
})();
