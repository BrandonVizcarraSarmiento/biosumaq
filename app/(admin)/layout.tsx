// /app/admin/layout.tsx
import { ReactNode } from "react";


export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>
          
        <main>{children}</main>
      
      </body>
    </html>
  );
}
