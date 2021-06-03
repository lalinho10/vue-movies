let GlobalPlugin = {
  install(Vue) {
    Vue.prototype.poster = function(poster, width) {
      if (poster !== null && poster !== undefined) {
        const imgWidth = width || 200;
        return `http://image.tmdb.org/t/p/w${imgWidth}${poster}`;
      } else {
        return `/images/noimage.png`;
      }
    }
  }
}

export default GlobalPlugin;