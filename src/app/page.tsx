import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getRandomQuote, sampleGoals } from '@/lib/data';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar, Plus, Target } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const quote = getRandomQuote();
  const today = new Date();

  // 인생 목표 (가장 중요한 것들)
  const lifeGoals = sampleGoals
    .filter(goal => goal.category === 'life')
    .slice(0, 3);

  // 버킷리스트 (10년 목표 중 일부)
  const bucketList = sampleGoals
    .flatMap(
      goal => goal.children?.filter(child => child.category === '10year') || []
    )
    .slice(0, 3);

  // 오늘의 계획을 30분 단위로 생성
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        slots.push({
          time,
          formatted: format(time, 'HH:mm', { locale: ko }),
          hasPlan: Math.random() > 0.7, // 30% 확률로 계획이 있음
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="space-y-6">
      {/* 오늘의 명언 */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-blue-900">오늘의 명언</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <blockquote className="text-lg italic text-blue-800 mb-2">
            "{quote.text}"
          </blockquote>
          <p className="text-sm text-blue-600">- {quote.author}</p>
        </CardContent>
      </Card>

      {/* 오늘 날짜 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          {format(today, 'yyyy년 MM월 dd일', { locale: ko })}
        </h1>
        <p className="text-gray-600 mt-1">
          {format(today, 'EEEE', { locale: ko })}요일
        </p>
      </div>

      {/* 인생 목표 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Target className="h-5 w-5" />
            인생 목표
          </CardTitle>
          <CardDescription>
            가장 중요한 인생 목표들을 확인하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {lifeGoals.length > 0 ? (
              lifeGoals.map(goal => (
                <div key={goal.id} className="p-3 bg-gray-50 rounded-lg">
                  <h3 className="font-medium">{goal.title}</h3>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                아직 인생 목표가 없습니다.
              </p>
            )}
            <Link href="/goals">
              <Button variant="outline" className="w-full">
                목표 관리하기
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* 버킷리스트 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Target className="h-5 w-5" />
            버킷리스트
          </CardTitle>
          <CardDescription>꼭 이루고 싶은 10년 목표들</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {bucketList.length > 0 ? (
              bucketList.map(goal => (
                <div key={goal.id} className="p-3 bg-yellow-50 rounded-lg">
                  <h3 className="font-medium">{goal.title}</h3>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                아직 버킷리스트가 없습니다.
              </p>
            )}
            <Link href="/goals">
              <Button variant="outline" className="w-full">
                버킷리스트 관리하기
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* 오늘의 계획 (30분 단위) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            오늘의 계획
          </CardTitle>
          <CardDescription>
            30분 단위로 계획을 관리하세요. 칸을 클릭하여 계획을 추가할 수
            있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-1">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`
                  aspect-square border rounded cursor-pointer transition-colors
                  ${
                    slot.hasPlan
                      ? 'bg-blue-100 border-blue-300 hover:bg-blue-200'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }
                `}
                title={`${slot.formatted} - 클릭하여 계획 추가`}
              >
                <div className="text-xs p-1 text-center">{slot.formatted}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" />
              계획 추가
            </Button>
            <Link href="/plans">
              <Button size="sm" variant="outline">
                계획 관리하기
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
