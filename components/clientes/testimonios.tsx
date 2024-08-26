import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";


const Testimonios = () => {
    return (
        <section>
            <h2 className="text-center text-3xl font-bold mb-6">Testimonios</h2>
        <div>
          <Alert className="flex items-start bg-blue-100 p-4 rounded-lg mb-4">
            <Avatar className="mr-4">
              <AvatarImage src="/img/iconoPerfil.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Cliente 1</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the CLI.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      
        <div>
          <Alert className="flex items-start bg-blue-100 p-4 rounded-lg mb-4">
            <Avatar className="mr-4">
              <AvatarImage src="/img/iconoPerfil.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Cliente 2</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the CLI.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      
        <div>
          <Alert className="flex items-start bg-blue-100 p-4 rounded-lg mb-4">
            <Avatar className="mr-4">
              <AvatarImage src="/img/iconoPerfil.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Cliente 3</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the CLI.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </section>
      
      
      
    );
}

export default Testimonios;