"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const PageLogin = () => {
  return (
<div className="flex min-h-screen items-center justify-center p-4  bg-center  " style={{ backgroundImage: 'url(/img/HamburgesaFishfood.jpg)' }}>
  <Card className="w-full max-w-md shadow-md rounded-lg bg-[rgba(255,255,255,0.6)] bg-opacity-80 ">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-semibold text-gray-800">Iniciar Sesión</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="space-y-4">
        <Input
          type="text"
          placeholder="Usuario"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-blue-300 dark:bg-transparent text-black placeholder:text-black   "
        />
        <Input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-blue-300 dark:bg-transparent text-black placeholder:text-black  "
        />
        <Button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Ingresar
        </Button>
      </form>
    </CardContent>
  </Card>
</div>

  );
};

export default PageLogin;