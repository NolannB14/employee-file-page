import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/contact/3f21c4-marie-dupont")

  // Demo links to test the contact pages
  const demoContacts = [
    { id: "3f21c4", firstName: "Marie", lastName: "Dupont" },
    { id: "a7b8c9", firstName: "Jean", lastName: "Martin" },
  ]

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">Fiches de Contact</h1>
        <p className="text-muted-foreground mb-6 text-center">Sélectionnez un contact pour voir sa fiche</p>
        <div className="space-y-3">
          {demoContacts.map((contact) => {
            const slug = `${contact.id}-${slugify(contact.firstName)}-${slugify(contact.lastName)}`
            return (
              <Button
                key={contact.id}
                asChild
                variant="outline"
                className="w-full border-[#00B7D0] text-black hover:bg-[#00B7D0] hover:text-white bg-transparent"
              >
                <Link href={`/contact/${slug}`}>
                  {contact.firstName} {contact.lastName}
                </Link>
              </Button>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
