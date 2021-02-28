class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  closeDetail() {
    const imageInfo = document.querySelector(".ImageInfo");
    imageInfo.style.display = "none";
  }

  handleKey(event) {
    if (event.keyCode === 27) {
      console.log(this)
    }
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name ? name : "정보없음"}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name ? name : "정보없음"}"/>        
          <div class="description">
            <div>성격: ${temperament ? temperament : "정보없음"}</div>
            <div>태생: ${origin ? origin : "정보없음"}</div>
          </div>
        </div>`;
      const modal = document.querySelector(".close");
      modal.addEventListener("click", this.closeDetail);
      window.addEventListener("keydown", (event) => {
        if(event.keyCode === 27){
          this.$imageInfo.style.display = "none";
        }
      });
      this.$imageInfo.addEventListener("click", () => this.$imageInfo.style.display = "none")
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
