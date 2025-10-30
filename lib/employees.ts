// Employee data store
export interface Employee {
  id: string
  firstName: string
  lastName: string
  role: string
  email: string
  phone: string
  linkedin?: string
  avatarUrl?: string
  companyLogo?: string
  companyWebsite?: string
}

export const employees: Employee[] = [
  {
    id: "3f21c4",
    firstName: "Marie",
    lastName: "Dupont",
    role: "Directrice Marketing",
    email: "marie.dupont@entreprise.fr",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://linkedin.com/in/marie-dupont",
    avatarUrl: "/professional-woman-portrait.png",
    companyLogo: "/generic-company-logo.png",
    companyWebsite: "https://www.entreprise.fr",
  },
  {
    id: "a7b8c9",
    firstName: "Jean",
    lastName: "Martin",
    role: "Développeur Full Stack",
    email: "jean.martin@entreprise.fr",
    phone: "+33 6 98 76 54 32",
    linkedin: "https://linkedin.com/in/jean-martin",
    avatarUrl: "/professional-man-portrait.png",
    companyLogo: "/generic-company-logo.png",
    companyWebsite: "https://www.entreprise.fr",
  },
]

export function getEmployeeById(id: string): Employee | undefined {
  return employees.find((emp) => emp.id === id)
}
