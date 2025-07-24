import { Header } from '@/components/layout/header/Header';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Planner - 목표와 계획을 관리하세요',
  description: '인생 목표부터 일일 계획까지 체계적으로 관리하는 플래너 앱',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <main className="flex-1 p-4 lg:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
