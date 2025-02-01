{
  // union types |

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "B+";
  };

  const user: User = {
    name: "Tawhidul Islam",
    email: "taw23@gmail.com",
    gender: "male",
    bloodGroup: "A+",
  };

  type frontendDev = {
    skills: string[];
    level1: number;
  };
  type backendDev = {
    skills: string[];
    level2: number;
  };


  // intersection &

  type FullStackDev = frontendDev & backendDev;

  const dev: FullStackDev = {
    skills: ["html", "css", "react",'noSQl'],
    level1: 1,
    level2: 2,
  };
}
