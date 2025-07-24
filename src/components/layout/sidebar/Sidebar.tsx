'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Home, Plus, Target } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-full lg:w-64 border-b lg:border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="p-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              빠른 메뉴
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-1">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm lg:text-base"
                >
                  <Home className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">홈</span>
                  <span className="lg:hidden">홈</span>
                </Button>
              </Link>
              <Link href="/goals">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm lg:text-base"
                >
                  <Target className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">목표 관리</span>
                  <span className="lg:hidden">목표</span>
                </Button>
              </Link>
              <Link href="/plans">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm lg:text-base"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">계획 관리</span>
                  <span className="lg:hidden">계획</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              목표 단위
            </h3>
            <div className="space-y-1">
              <Link href="/goals/life">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  인생 목표
                </Button>
              </Link>
              <Link href="/goals/10year">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  10년 목표
                </Button>
              </Link>
              <Link href="/goals/5year">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  5년 목표
                </Button>
              </Link>
              <Link href="/goals/1year">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  1년 목표
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              계획 단위
            </h3>
            <div className="space-y-1">
              <Link href="/plans/quarterly">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  분기 계획
                </Button>
              </Link>
              <Link href="/plans/monthly">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  월 계획
                </Button>
              </Link>
              <Link href="/plans/weekly">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  주 계획
                </Button>
              </Link>
              <Link href="/plans/daily">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  일 계획
                </Button>
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              <span className="hidden lg:inline">새 목표 추가</span>
              <span className="lg:hidden">추가</span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
