const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const api = {
  fetchCats: async (keyword) => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      if (res.status === 200) {
        return await res.json();
      } else {
        const error = await res.json();
        throw error;
      }
    } catch (e) {
      throw {
        message: e.message,
      };
    }
  },
  fetchDetail: async (id) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
    if (res.status === 200) {
      return await res.json();
    } else {
      console.log(`${res.status}오류: ${res.statusText}`);
    }
  },
  fetchRandom: async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      if (res.status === 200) {
        return await res.json();
      } else {
        const error = await res.json();
        throw error;
      }
    } catch (e) {
      throw {
        message: e.message,
      };
    }
  },
};
