import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
  };
  
