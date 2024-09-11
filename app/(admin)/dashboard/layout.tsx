// app/(admin)/dashboard/layout.tsx

import { ReactNode } from 'react';

export default function DashboardLayout({ childrendashboard }: { childrendashboard: ReactNode }) {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      
      <main className="dashboard-content">
        {childrendashboard}
      </main>

      <footer className="dashboard-footer">
        &copy; 2024 Empresa
      </footer>
    </div>
  );
}
