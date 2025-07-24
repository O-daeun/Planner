import { Button } from '@/components/ui/button';
import { Calendar, Home, Menu, Target } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Target className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Planner</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />홈
              </Button>
            </Link>
            <Link href="/goals">
              <Button variant="ghost" size="sm">
                <Target className="h-4 w-4 mr-2" />
                목표
              </Button>
            </Link>
            <Link href="/plans">
              <Button variant="ghost" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                계획
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
