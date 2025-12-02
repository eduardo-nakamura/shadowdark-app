import type { ReactNode } from 'react';
interface PageContainerProps {
  children: ReactNode;
  // Opcional: Adicionar um título ou classes customizadas
  title?: string;
  className?: string;
}

export default function Page({ children, className = '' }: PageContainerProps) {
    return (
        <div className={`max-w-7xl mx-auto p-4 sm:p-8 lg:p-10 ${className}`}>
            {children}
        </div>
    )
}
