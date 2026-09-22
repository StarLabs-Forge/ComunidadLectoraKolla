'use client';

// NOTA: Este componente venia de una plantilla de UI (animate-ui) pero no se
// usa en ninguna pagina del proyecto. Sus imports originales (sheet, tooltip,
// highlight) rompian el build en Vercel porque nunca se agregaron esos
// archivos al repo. Se dejo como stub minimo para no romper el build mientras
// no se necesite. Si en el futuro se quiere usar un sidebar real, hay que
// reconstruirlo desde cero o desde la libreria animate-ui original.

import * as React from 'react';

export function Sidebar({ children }: { children?: React.ReactNode }) {
  return <div data-sidebar="sidebar-stub">{children}</div>;
}

export default Sidebar;
