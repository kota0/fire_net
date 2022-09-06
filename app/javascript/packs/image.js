function loadImage(obj)
{
  var allPreview = document.getElementById('image');
  var newPreview = document.createElement("p");
  allPreview.querySelector("p").remove();
  newPreview.setAttribute("id","preview");
  allPreview.insertBefore(newPreview, allPreview.firstChild);
  document.getElementById("image").style.display = "";
  for (i = 0; i < obj.files.length; i++) {
      var fileReader = new FileReader();
      fileReader.onload = (function (e) {
          var img = new Image();
          img.src = e.target.result;
          document.getElementById('preview').appendChild(img);
      });
    fileReader.readAsDataURL(obj.files[i]);
  }
}
