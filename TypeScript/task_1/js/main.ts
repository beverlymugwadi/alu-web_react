// 1. Teacher interface with readonly names and index signature
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// 2. Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. printTeacher function and its interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName && firstName.length > 0 ? firstName[0] : "";
  return `${firstInitial}. ${lastName}`;
};

// 4. StudentClass constructor and class interfaces
export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
