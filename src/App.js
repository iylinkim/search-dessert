// console.log("app is running!");

import { api } from "./api.js";
import ImageInfo from "./ImageInfo.js";
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import Slide from "./Slide.js";
import Theme from "./Theme.js";

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        const result = await api.fetchCats(keyword);
        if (result) {
          return this.setState(result.data);
        }
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        const details = await api
          .fetchDetail(image.id)
          .then((result) => result);
        this.imageInfo.setState({
          visible: true,
          image: details.data,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });

    this.randomLists = new Slide({
      $target,
      getRandom: async () => {
        const result = await api.fetchRandom();
        if (result) {
          return result.data;
        }
      },
    });

    this.theme = new Theme({
      $target,
    });

    // this.saving = new Saving({
    //   savingData:this.data
    // })
  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
