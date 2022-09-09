


  window.changeFile = function changeFile(file){

    const fileBox = document.getElementById('post-video');
    const msg = document.getElementById('msg');

    fileBox.addEventListener("change", (e) => {
      if (window.File) {
        var inputFile = fileBox.files[0];
      }
    
    const isVideoExt = (file) => {
      fileName = fileBox.substring(fileBox.lastIndexOf('.'))
      if (fileName.toUpperCase().match(/\.(mp4)$/i)) {
        return true
      }
      if (fileName.toUpperCase().match(/\.(avi)$/i)) {
        return true
      }
      if (fileName.toUpperCase().match(/\.(fiv)$/i)) {
        return true
      }
      if (fileName.toUpperCase().match(/\.(mov)$/i)) {
        return true
      }
      if (fileName.toUpperCase().match(/\.(wmv)$/i)) {
        return true
      }
      return false
  }
 })
    msg.innerText = '１件の動画が選択されています';
};


  