import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Get all users
export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

// Get users enrolled in a specific course
export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};

// Get a specific user by ID
export const findUserById = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}`);
  return response.data;
};

// Create a new user
export const createUser = async (user: any) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

// Update an existing user
export const updateUser = async (userId: string, user: any) => {
  const response = await axios.put(`${USERS_API}/${userId}`, user);
  return response.data;
};

// Delete a user
export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
}; 