const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    try{

      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      return await res.json();
    }catch(e){
      console.log("error message"+e)
    }
  },
  fetchDetail: async (id) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
    return await res.json();
  },
  fetchRandom: async () => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    return await res.json();
  },
};
