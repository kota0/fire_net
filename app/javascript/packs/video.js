function changeFile(file){

  let fileBox = document.getElementById('post-video');
  fileBox.addEventListener('change', changeFile);
  const msg = document.getElementById('msg');

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

  
  msg.innerText = '動画が選択されました';
}

