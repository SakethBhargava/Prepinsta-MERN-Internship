document.getElementById("upload").addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      const gallery = document.getElementById("gallery");
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      const img = document.createElement("img");
      img.src = imageUrl;
      galleryItem.appendChild(img);
      gallery.appendChild(galleryItem);

      // Update post count
      const postCount = document.getElementById("postCount");
      postCount.textContent = parseInt(postCount.textContent) + 1;
    };
    reader.readAsDataURL(file);
  }
});
