import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6bc7cf7afa914a37898520de1210198d",
  },
});
