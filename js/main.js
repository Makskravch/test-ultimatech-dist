(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

document.addEventListener('DOMContentLoaded', function () {
  const copyPromoCode = document.querySelector('.js-promo-code')
  const parallaxScene = document.querySelector('.js-parallax')

  const pictureBgFront = document.querySelector('.js-front')
  const pictureBgBack = document.querySelector('.js-back')
  const witcher = document.querySelector('.js-middle')

  copyPromoCode.addEventListener('click', copy)
  parallaxScene.addEventListener('mousemove', mouseMoveHandler)
  parallaxScene.addEventListener('mouseleave', mouseLeaveHandler)

  function copy(e) {
    if (e.target.tagName == 'BUTTON') {
      const input = this.querySelector('input')
      input.select()
      document.execCommand('copy')
      this.classList.add('copied')
      setTimeout(() => this.classList.remove('copied'), 1000)
    }
  }

  function mouseMoveHandler(e) {
    pictureBgBack.style.transform  = `translate(${-e.offsetX*0.02}px, ${-e.offsetY*0.02}px)`
    witcher.style.transform        = `translate(${e.offsetX*0.04}px, ${e.offsetY*0.04}px)`
    pictureBgFront.style.transform = `translate(${e.offsetX*0.06}px, ${e.offsetY*0.06}px)`
  }

  function mouseLeaveHandler() {
    pictureBgBack.style.transform  = `translate(0px, 0px)`
    witcher.style.transform        = `translate(0px, 0px)`
    pictureBgFront.style.transform = `translate(0px, 0px)`
  }
})

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29weVByb21vQ29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9tby1jb2RlJylcclxuICBjb25zdCBwYXJhbGxheFNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhcmFsbGF4JylcclxuXHJcbiAgY29uc3QgcGljdHVyZUJnRnJvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZnJvbnQnKVxyXG4gIGNvbnN0IHBpY3R1cmVCZ0JhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYmFjaycpXHJcbiAgY29uc3Qgd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1taWRkbGUnKVxyXG5cclxuICBjb3B5UHJvbW9Db2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weSlcclxuICBwYXJhbGxheFNjZW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpXHJcbiAgcGFyYWxsYXhTY2VuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VMZWF2ZUhhbmRsZXIpXHJcblxyXG4gIGZ1bmN0aW9uIGNvcHkoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gJ0JVVFRPTicpIHtcclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcclxuICAgICAgaW5wdXQuc2VsZWN0KClcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NvcGllZCcpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjb3BpZWQnKSwgMTAwMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xyXG4gICAgcGljdHVyZUJnQmFjay5zdHlsZS50cmFuc2Zvcm0gID0gYHRyYW5zbGF0ZSgkey1lLm9mZnNldFgqMC4wMn1weCwgJHstZS5vZmZzZXRZKjAuMDJ9cHgpYFxyXG4gICAgd2l0Y2hlci5zdHlsZS50cmFuc2Zvcm0gICAgICAgID0gYHRyYW5zbGF0ZSgke2Uub2Zmc2V0WCowLjA0fXB4LCAke2Uub2Zmc2V0WSowLjA0fXB4KWBcclxuICAgIHBpY3R1cmVCZ0Zyb250LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtlLm9mZnNldFgqMC4wNn1weCwgJHtlLm9mZnNldFkqMC4wNn1weClgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3VzZUxlYXZlSGFuZGxlcigpIHtcclxuICAgIHBpY3R1cmVCZ0JhY2suc3R5bGUudHJhbnNmb3JtICA9IGB0cmFuc2xhdGUoMHB4LCAwcHgpYFxyXG4gICAgd2l0Y2hlci5zdHlsZS50cmFuc2Zvcm0gICAgICAgID0gYHRyYW5zbGF0ZSgwcHgsIDBweClgXHJcbiAgICBwaWN0dXJlQmdGcm9udC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDBweCwgMHB4KWBcclxuICB9XHJcbn0pXHJcblxufSx7fV19LHt9LFsxXSk7XG4iXSwiZmlsZSI6Im1haW4uanMifQ==
