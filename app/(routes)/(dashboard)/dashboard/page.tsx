"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PageDashboard = () => {
    const [username] = useState("Juan Pérez"); // Estado o props para el nombre del usuario

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 shadow-md flex flex-col justify-between">
                {/* Usuario en la parte superior */}
                <div className="p-6">
                    <Avatar className="w-12 h-12 mx-auto mb-4" />
                    <h2 className="text-center text-xl font-semibold">{username}</h2>
                </div>

                {/* Opciones de navegación centradas */}
                <nav className="space-y-2 px-4 flex-1 flex flex-col">
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Productos
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Eventos
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Banner
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Redes
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Misión, Visión y Valores
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Sobre Nosotros
                    </a>
                </nav>

                {/* Botón de cerrar sesión en la parte inferior */}
                <div className="px-4 mb-6">
                    <Button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center">
                        Cerrar Sesión
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Aquí puedes agregar el contenido principal del dashboard */}
            </main>
        </div>
    );
};

export default PageDashboard;