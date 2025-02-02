{
  // constraints

  const addCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "dev";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{ id: number; name: string; email: string }>({
    id: 85,
    name: "adfa",
    email: "agwerg",
  });
  const student2 = addCourse({
    id: 48,
    name: "adfa",
    email: "agwerg",
    class: "ami",
  });
}
