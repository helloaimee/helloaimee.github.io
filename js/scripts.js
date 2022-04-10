// Preloader
window.onload = () => {
    if(document.readyState == 'complete') {
      preloaderHeart.style.opacity = 0;
      window.setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.display = 'none';
      }, 1000);
    }
  }