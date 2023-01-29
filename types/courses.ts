export type Lesson = {
  title: String;
  slug: String;
  number: Number;
  text: String;
  sourceUrl?: String;
};

export type LessonWithPath = Lesson & {
  path: String;
};

export type Chapter = {
  title: String;
  slug: String;
  number: Number;
  lessons: Lesson[] | LessonWithPath[];
};

export type Course = {
  title: String;
  chapters: Chapter[];
};
