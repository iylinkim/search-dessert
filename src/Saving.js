// class Saving {
//   $cats = "";
//   $LS_CATS = "";

//   constructor({savingData}) {
//       console.log(savginData)
//     this.$LS_CATS = "cats";
//     this.$cats = window.localStorage.getItem(this.$LS_CATS);
//   }

//   saveCats() {
//     window.localStorage.setItem(this.$LS_CATS, JSON.stringify(this.data));
//   }

//   ls_loadCats() {
//     //localStorage로부터 데이터 로드
//     const $parsedCats = JSON.parse(this.$cats);
//     this.$searchResult.innerHTML = $parsedCats
//       .map(
//         (cat) => `
//           <div class="item">
//           <img src=${cat.url} alt=${cat.name} />
//           </div>
//         `
//       )
//       .join("");
//     this.render();
//   }

//   render() {}
// }

