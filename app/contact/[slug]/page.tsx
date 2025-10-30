import { notFound } from "next/navigation"
import { Mail, Phone, Linkedin, Download } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { getEmployeeById, type Employee } from "@/lib/employees"

function getEmployee(slug: string): Employee | null {
  // Extract ID from slug (format: id-firstname-lastname)
  const id = slug.split("-")[0]
  return getEmployeeById(id) || null
}

export default async function ContactPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const employee = getEmployee(slug)

  if (!employee) {
    notFound()
  }

  const fullName = `${employee.firstName} ${employee.lastName}`
  const initials = `${employee.firstName[0]}${employee.lastName[0]}`.toUpperCase()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <Card className="w-full max-w-md p-8 shadow-lg">
        {/* Company Logo */}
        {employee.companyLogo && (
          <div className="flex justify-center mb-6">
            <Image
              src={employee.companyLogo || "/placeholder.svg"}
              alt="Logo de l'entreprise"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        )}

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <Avatar className="h-32 w-32 mb-4">
            <AvatarImage src={employee.avatarUrl || "/placeholder.svg"} alt={fullName} />
            <AvatarFallback className="text-2xl bg-[#00B7D0] text-white">{initials}</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold text-black mb-1">{fullName}</h1>
          <p className="text-muted-foreground text-base">{employee.role}</p>
        </div>

        {/* Contact Actions */}
        <div className="space-y-3 mb-6">
          {/* Email Button */}
          <Button
            asChild
            variant="outline"
            className="w-full justify-start gap-3 h-12 border-[#00B7D0] text-black hover:bg-[#00B7D0] hover:text-white transition-colors bg-transparent"
          >
            <a href={`mailto:${employee.email}`} aria-label="Envoyer un email">
              <Mail className="h-5 w-5" />
              <span className="flex-1 text-left">{employee.email}</span>
            </a>
          </Button>

          {/* Phone Button */}
          <Button
            asChild
            variant="outline"
            className="w-full justify-start gap-3 h-12 border-[#00B7D0] text-black hover:bg-[#00B7D0] hover:text-white transition-colors bg-transparent"
          >
            <a href={`tel:${employee.phone}`} aria-label="Appeler">
              <Phone className="h-5 w-5" />
              <span className="flex-1 text-left">{employee.phone}</span>
            </a>
          </Button>

          {/* LinkedIn Button */}
          {employee.linkedin && (
            <Button
              asChild
              variant="outline"
              className="w-full justify-start gap-3 h-12 border-[#00B7D0] text-black hover:bg-[#00B7D0] hover:text-white transition-colors bg-transparent"
            >
              <a
                href={employee.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le profil LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="flex-1 text-left">Profil LinkedIn</span>
              </a>
            </Button>
          )}

          {/* Add to Contacts Button */}
          <Button asChild className="w-full gap-3 h-12 bg-[#00B7D0] hover:bg-[#00B7D0]/90 text-white">
            <a
              href={`/api/vcard/${employee.id}`}
              download={`${employee.firstName}-${employee.lastName}.vcf`}
              aria-label="Ajouter au carnet"
            >
              <Download className="h-5 w-5" />
              Ajouter au carnet
            </a>
          </Button>
        </div>

        {/* Company Website Footer */}
        {employee.companyWebsite && (
          <div className="pt-6 border-t border-border text-center">
            <a
              href={employee.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#00B7D0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#00B7D0] focus:ring-offset-2 rounded"
            >
              Visiter le site de l'entreprise
            </a>
          </div>
        )}
      </Card>
    </div>
  )
}
