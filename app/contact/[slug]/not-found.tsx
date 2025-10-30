import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <Card className="w-full max-w-md p-8 shadow-lg text-center">
        <AlertCircle className="h-16 w-16 text-[#00B7D0] mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-black mb-2">Contact introuvable</h1>
        <p className="text-muted-foreground mb-6">
          La fiche employé que vous recherchez n'existe pas ou a été supprimée.
        </p>
        <Button asChild className="bg-[#00B7D0] hover:bg-[#00B7D0]/90 text-white">
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </Card>
    </div>
  )
}
