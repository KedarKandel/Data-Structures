
// Problem:
// You are given a list of employees working in a company. Each employee has an ID, a name, a designation, and a list of skills. The skills are represented as strings. Your task is to implement a data structure that efficiently stores, removes and retrieves employee information based on their skills.


class Employee {
    constructor(id, name, designation, skills) {
      this.id = id;
      this.name = name;
      this.designation = designation;
      this.skills = skills;
    }
  }
  
  class EmployeeDataStructure {
    constructor() {
      this.employees = new Map();
      this.skillMap = new Map();
    }
  
    addEmployee(employee) {
      this.employees.set(employee.id, employee);
      
      for (const skill of employee.skills) {
        if (!this.skillMap.has(skill)) {
          this.skillMap.set(skill, new Set());
        }
        this.skillMap.get(skill).add(employee);
      }
    }
  
    getEmployeesWithSkill(skill) {
      if (!this.skillMap.has(skill)) {
        return [];
      }
      
      return Array.from(this.skillMap.get(skill));
    }
  
    getEmployeesWithSkills(skills) {
      let result = null;
      
      for (const skill of skills) {
        const employees = this.getEmployeesWithSkill(skill);
        if (result === null) {
          result = new Set(employees);
        } else {
          result = new Set(employees.filter((employee) => result.has(employee)));
        }
      }
      
      return Array.from(result);
    }
  
    removeEmployee(employee) {
      if (this.employees.has(employee.id)) {
        this.employees.delete(employee.id);
        
        for (const skill of employee.skills) {
          if (this.skillMap.has(skill)) {
            this.skillMap.get(skill).delete(employee);
          }
        }
      }
    }
  }
  
  // Example usage:
  const dataStructure = new EmployeeDataStructure();
  
  const employee1 = new Employee(1, "John", "Manager", ["Java", "JavaScript", "SQL"]);
  const employee2 = new Employee(2, "Alice", "Developer", ["JavaScript", "HTML", "CSS"]);
  const employee3 = new Employee(3, "Bob", "Developer", ["JavaScript", "Python", "AWS"]);
  const employee4 = new Employee(4, "Sarah", "Designer", ["Photoshop", "Illustrator"]);
  
  dataStructure.addEmployee(employee1);
  dataStructure.addEmployee(employee2);
  dataStructure.addEmployee(employee3);
  dataStructure.addEmployee(employee4);
  
  console.log("getEmployeeByOneSkill",dataStructure.getEmployeesWithSkill("JavaScript"));
  // Output: [employee1, employee2, employee3]
  
  console.log("getEmployeesByMultipleSkills",dataStructure.getEmployeesWithSkills(["JavaScript", "CSS"]));
  // Output: [employee2]
  
   dataStructure.removeEmployee("removed employee",employee1);
  
   console.log("getEmployeesWithSkillsAfterRemoving",dataStructure.getEmployeesWithSkill("JavaScript"));
  // Output: [employee2, employee3]
  