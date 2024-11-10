localStorage.clear()
const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 2, failed: 1, newTask: 0, completed: 3 },
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile data for the monthly sales report.",
        date: "2024-11-10",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Schedule a follow-up meeting with client ABC.",
        date: "2024-11-12",
        category: "Client Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Backup database for the month.",
        date: "2024-11-05",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Presentation",
        description: "Present the Q3 sales figures to the team.",
        date: "2024-11-08",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "System Update",
        description: "Apply updates to the server.",
        date: "2024-11-06",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Inventory Check",
        description: "Verify stock levels.",
        date: "2024-11-09",
        category: "Operations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstname: "Neha",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, failed: 0, newTask: 1, completed: 5 },
    tasks: [
      {
        title: "Vendor Payment",
        description: "Process payment to vendors.",
        date: "2024-11-07",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Product Launch",
        description: "Coordinate the new product launch event.",
        date: "2024-11-11",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Market Research",
        description: "Research market trends.",
        date: "2024-11-13",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Website SEO",
        description: "Optimize website for search engines.",
        date: "2024-11-06",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Staff Training",
        description: "Organize training for new recruits.",
        date: "2024-11-08",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Annual Budget Review",
        description: "Prepare annual budget reports.",
        date: "2024-11-10",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 2, failed: 2, newTask: 0, completed: 1 },
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Launch new campaign on Instagram.",
        date: "2024-11-12",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Internal Audit",
        description: "Conduct audit of company finances.",
        date: "2024-11-08",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Project Documentation",
        description: "Document the requirements for the new project.",
        date: "2024-11-14",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Customer Feedback Analysis",
        description: "Review customer survey results.",
        date: "2024-11-09",
        category: "Customer Service",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Data Migration",
        description: "Migrate data to new server.",
        date: "2024-11-10",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstname: "Anjali",
    email: "employee4@example.com",
    password: "123",
    taskCount:{active:1,failed:2,newTask:1,completed:1},
    tasks: [
      {
        title: "Market Research",
        description: "Conduct market research for the new product.",
        date: "2024-11-16",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed:false
      },
      {
        title: "Budget Planning",
        description: "Plan the budget for the next quarter.",
        date: "2024-11-09",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed:false
      }
    ]
  },
  {
    id: 5,
    firstname: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskCount:{active:2,failed:2,newTask:1,completed:1},

    tasks: [
      {
        title: "Security Audit",
        description: "Perform a security audit on the IT systems.",
        date: "2024-11-10",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed:true
      },
      {
        title: "Recruitment Drive",
        description: "Plan recruitment drive for fresh graduates.",
        date: "2024-11-11",
        category: "HR",
        active: false,
        newTask: true,
        completed: true,
        failed:false
      },
      {
        title: "Inventory Check",
        description: "Perform an inventory check for office supplies.",
        date: "2024-11-08",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed:true
      }
    ]
  }
];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
 export const  setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

 }
 export const getLocalStorage =()=>{
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
     return {employees, admin}
    

 }
  
  