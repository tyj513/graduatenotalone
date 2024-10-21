$(document).ready(function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile) {
      function detectZoom() {
          var ratio = 0,
              screen = window.screen,
              ua = navigator.userAgent.toLowerCase();

          if (ua.indexOf('firefox') != -1) {
              if (window.devicePixelRatio !== undefined) {
                  ratio = window.devicePixelRatio;
              }
          } else if (ua.indexOf('msie') != -1) {
              if (screen.deviceXDPI && screen.logicalXDPI) {
                  ratio = screen.deviceXDPI / screen.logicalXDPI;
              }
          } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
              ratio = window.outerWidth / window.innerWidth;
          }
          return ratio;
      }

      function adjustPageZoom() {
          var zoomRatio = detectZoom();
          var string = 1.26 / zoomRatio;
          document.body.style.zoom = string;
      }

      function askUserToAdjustZoom() {
          var currentZoom = detectZoom();
          if (currentZoom !== 1.25) { 
              adjustPageZoom();
          }
      }

      window.onload = askUserToAdjustZoom;
      var content = document.getElementById("content");
      content.style.width = "850px";
      content.style.margin = "0 auto"; 

      var imgElement3 = document.querySelector('.style1');
      if (imgElement3) { 
          imgElement3.style.letterSpacing = '25px';
          imgElement3.style.fontSize = '40px';  
      }
  } else {
      // 移動版特定邏輯
      var content = document.getElementById("content");
      content.style.width = "100%";
      content.style.margin = "0";
  }

  // 音頻播放邏輯
  var audio = document.getElementById("audio");
  var playButton = document.getElementById("playButton");
  var audioText = document.getElementById("audioControl");

  playButton.addEventListener(isMobile ? "touchstart" : "click", function(e) {
      e.preventDefault();
      audio.play();
  });

  audioText.addEventListener(isMobile ? "touchstart" : "mouseenter", function(e) {
      e.preventDefault();
      document.getElementById("myAudio").play();
  });

  // 圖片顯示邏輯
  var textElement = document.querySelector(".text2");
  var songImageElement = document.getElementById("songImage");

  textElement.addEventListener(isMobile ? "touchstart" : "mouseover", function() {
      songImageElement.style.display = "inline";
  });

  textElement.addEventListener(isMobile ? "touchend" : "mouseout", function() {
      songImageElement.style.display = "none";
  });
});

function 點擊計數() {
  console.log("連結被點擊了");
  // 這裡可以添加更多的點擊統計邏輯
}

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  return flag;
}

// 原有的音頻控制函數
function playAudio() {
  document.getElementById("myAudio").play();
}

function pauseAudio() {
  document.getElementById("myAudio").pause();
}