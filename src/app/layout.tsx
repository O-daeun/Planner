import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Planner - 목표와 계획을 관리하세요',
  description: '인생 목표부터 일일 계획까지 체계적으로 관리하는 플래너 앱',
};

// MSW 설정 (개발 환경에서만)
if (process.env.NODE_ENV === 'development') {
  require('../mocks/browser').worker.start({
    onUnhandledRequest: 'bypass',
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
