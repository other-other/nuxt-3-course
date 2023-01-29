import { Course } from "~/types/courses";
export default (title: string) => {
  return useFetchWithCache<Course>(`api/courses/course/${title}`);
};
