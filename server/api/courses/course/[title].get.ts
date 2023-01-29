import courses from "~/server/data/courses.js";
import { Course, Chapter, LessonWithPath, Lesson } from "~/types/courses";

courses as unknown as Course;
//
export default defineEventHandler((event): Course => {
  const { title } = event.context.params;

  const course: Maybe<Course> = courses.find(
    (course) => course.title === title
  );

  if (!course) {
    throw createError({
      statusCode: 404,
      message: "This course not found.",
    });
  }

  return course;
});
