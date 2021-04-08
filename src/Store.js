export default class Store {
  // $key;
  // $data;
  constructor() {
    // this.$key = key;
    // this.$data = savingData;
  }

  setData(key, savingData) {
    localStorage.setItem(key, JSON.stringify(savingData));
  }

  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
