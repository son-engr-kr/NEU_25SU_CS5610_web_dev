import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createModule(module) {
    const newModule = { ...module, _id: uuidv4() };
    Database.modules = [...Database.modules, newModule];
    return newModule;
  }

  
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}
