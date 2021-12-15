// NEXT SOUND PLAY WITH STOP CURRENT SOUND SCRIPT //
document.addEventListener("play", function (e) { for (var t = document.getElementsByTagName("audio"), a = 0, n = t.length; a < n; a++) t[a] != e.target && t[a].pause() }, !0)
