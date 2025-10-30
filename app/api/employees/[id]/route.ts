import { type NextRequest, NextResponse } from "next/server"
import { getEmployeeById } from "@/lib/employees"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const employee = getEmployeeById(id)

    if (!employee) {
      return NextResponse.json({ error: "Employé introuvable" }, { status: 404 })
    }

    return NextResponse.json(employee)
  } catch (error) {
    console.error("[v0] Error fetching employee:", error)
    return NextResponse.json({ error: "Une erreur est survenue" }, { status: 500 })
  }
}
