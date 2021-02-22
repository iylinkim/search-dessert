console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: async(keyword) => {
        const { data }  = await api.fetchCats(keyword);
        return this.setState(data);
      },
      getRandom: async () => {
        const { data } = await api.fetchRandom();
        return data;
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
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
