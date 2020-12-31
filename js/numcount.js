function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function timeSince() {
  var prevTime = new Date(2015,8,8,0,0);
  var thisTime = new Date();
  return (thisTime.getTime() - prevTime.getTime()) / 1000;
}

function parcelCount() {
  var secDiff = timeSince();

  var leftNum = document.getElementById("left");
  var midNum = document.getElementById("mid");
  var leftNumCount = Math.round(((76/60) * secDiff) + 40093794);
  var midNumCount = Math.round(((43/60) * secDiff) + 22874098);

  leftNum.innerHTML = numberWithCommas(leftNumCount);
  midNum.innerHTML = numberWithCommas(midNumCount);
}
parcelCount();
setInterval(parcelCount, 1000);