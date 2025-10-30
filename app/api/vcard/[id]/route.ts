import { type NextRequest, NextResponse } from "next/server"
import { getEmployeeById, type Employee } from "@/lib/employees"

// Mock data - should match the employees API
const mockEmployees = [
  {
    id: "3f21c4",
    firstName: "Marie",
    lastName: "Dupont",
    role: "Directrice Marketing",
    email: "marie.dupont@entreprise.fr",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://linkedin.com/in/marie-dupont",
    avatarUrl: "/professional-woman-portrait.png",
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
  },
]

function generateVCard(employee: Employee): string {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${employee.lastName};${employee.firstName};;;`,
    `FN:${employee.firstName} ${employee.lastName}`,
    `TITLE:${employee.role}`,
    `EMAIL;TYPE=INTERNET,WORK:${employee.email}`,
    `TEL;TYPE=CELL,WORK:${employee.phone}`,
    employee.linkedin ? `URL;TYPE=WORK:${employee.linkedin}` : "",
    employee.avatarUrl ? `PHOTO;VALUE=URI:${employee.avatarUrl}` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n")

  return vcard
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const employee = getEmployeeById(id)

    if (!employee) {
      return NextResponse.json({ error: "Employé introuvable" }, { status: 404 })
    }

    const vcard = generateVCard(employee)

    return new NextResponse(vcard, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": `attachment; filename="${employee.firstName}-${employee.lastName}.vcf"`,
      },
    })
  } catch (error) {
    console.error("[v0] Error generating vCard:", error)
    return NextResponse.json({ error: "Une erreur est survenue" }, { status: 500 })
  }
}
