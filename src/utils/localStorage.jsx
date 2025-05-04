const employees = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "e@e.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create responsive homepage layout.",
        date: "2025-04-15",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Fix overlapping issue on mobile view.",
        date: "2025-04-10",
        category: "Bug"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Report",
        description: "Prepare and email monthly client report.",
        date: "2025-04-05",
        category: "Documentation"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "employee2@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Backend API Setup",
        description: "Initialize Node.js backend with Express.",
        date: "2025-04-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Migration",
        description: "Migrate old schema to new MongoDB collections.",
        date: "2025-04-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Unit Testing",
        description: "Write unit tests for user module.",
        date: "2025-04-07",
        category: "Testing"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Ravi Patel",
    email: "employee3@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "User Feedback Survey",
        description: "Design a survey form using Typeform.",
        date: "2025-04-16",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Newsletter Draft",
        description: "Write April newsletter content.",
        date: "2025-04-08",
        category: "Content"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "SEO Optimization",
        description: "Optimize blog articles for search engines.",
        date: "2025-04-13",
        category: "Marketing"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Sita Reddy",
    email: "employee4@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Login Page",
        description: "Design and integrate login form.",
        date: "2025-04-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update UI Kit",
        description: "Add new buttons to the UI kit.",
        date: "2025-04-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Product Demo",
        description: "Record product walkthrough video.",
        date: "2025-04-04",
        category: "Presentation"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    name: "Neha Verma",
    email: "employee5@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup CI/CD",
        description: "Integrate GitHub Actions for deployments.",
        date: "2025-04-15",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Log Cleanup",
        description: "Purge old server logs.",
        date: "2025-04-03",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Demo Prep",
        description: "Prepare slides for upcoming demo.",
        date: "2025-04-05",
        category: "Client"
      }
    ],
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    name: "Vikram Singh",
    email: "a@e.com",
    password: "123",
    role: "admin"
  }
];


  

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{

    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin =JSON.parse(localStorage.getItem('admin'))
    return { employees, admin };

  }

  export const addTaskToEmployee = (createdTask, assigneeName) => {
    const { employees } = getLocalStorage();
  
    const updatedEmployees = employees.map(employee => {
      if (employee.name === assigneeName) {
        const updatedTasks = [...employee.tasks, createdTask];
        console.log(employee)
  
        const updatedTaskCount = {
          active: updatedTasks.filter(task => task.active).length,
          newTask: updatedTasks.filter(task => task.newTask).length,
          completed: updatedTasks.filter(task => task.completed).length,
          failed: updatedTasks.filter(task => task.failed).length
        };
  
        return {
          ...employee,
          tasks: updatedTasks,
          taskCount: updatedTaskCount
        };
      }
      return employee;
    });
  
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };