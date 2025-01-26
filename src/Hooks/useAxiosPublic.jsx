import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://assignment-11-server-zeta-lilac.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
