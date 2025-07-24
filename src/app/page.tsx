import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getRandomQuote, sampleGoals, samplePlans } from '@/lib/data';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar, CheckCircle, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const quote = getRandomQuote();
  const today = new Date();

  const completedGoals = sampleGoals.filter(
    goal => goal.status === 'completed'
  ).length;
  const totalGoals = sampleGoals.length;
  const completedPlans = samplePlans.filter(
    plan => plan.status === 'completed'
  ).length;
  const totalPlans = samplePlans.length;

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* 오늘의 명언 */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="pb-3 lg:pb-6">
          <CardTitle className="text-base lg:text-lg text-blue-900">
            오늘의 명언
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <blockquote className="text-base lg:text-lg italic text-blue-800 mb-2">
            "{quote.text}"
          </blockquote>
          <p className="text-sm text-blue-600">- {quote.author}</p>
        </CardContent>
      </Card>

      {/* 오늘 날짜 */}
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {format(today, 'yyyy년 MM월 dd일', { locale: ko })}
        </h1>
        <p className="text-gray-600 mt-1">
          {format(today, 'EEEE', { locale: ko })}요일
        </p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium">
              총 목표
            </CardTitle>
            <Target className="h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold">{totalGoals}</div>
            <p className="text-xs text-muted-foreground">
              완료: {completedGoals}개
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium">
              총 계획
            </CardTitle>
            <Calendar className="h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold">{totalPlans}</div>
            <p className="text-xs text-muted-foreground">
              완료: {completedPlans}개
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium">
              목표 달성률
            </CardTitle>
            <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold">
              {totalGoals > 0
                ? Math.round((completedGoals / totalGoals) * 100)
                : 0}
              %
            </div>
            <p className="text-xs text-muted-foreground">목표 진행 상황</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs lg:text-sm font-medium">
              계획 달성률
            </CardTitle>
            <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl lg:text-2xl font-bold">
              {totalPlans > 0
                ? Math.round((completedPlans / totalPlans) * 100)
                : 0}
              %
            </div>
            <p className="text-xs text-muted-foreground">계획 진행 상황</p>
          </CardContent>
        </Card>
      </div>

      {/* 빠른 액션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg lg:text-xl">목표 관리</CardTitle>
            <CardDescription className="text-sm">
              인생 목표부터 일일 목표까지 체계적으로 관리하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/goals">
              <Button className="w-full">
                <Target className="h-4 w-4 mr-2" />
                목표 보기
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg lg:text-xl">계획 관리</CardTitle>
            <CardDescription className="text-sm">
              시간 단위로 일정을 관리하고 계획을 세워보세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/plans">
              <Button className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                계획 보기
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
