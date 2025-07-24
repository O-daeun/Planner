import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { samplePlans } from '@/lib/data';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import {
  Calendar,
  CheckCircle,
  Circle,
  Clock,
  Plus,
  XCircle,
} from 'lucide-react';

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'in-progress':
      return <Clock className="h-4 w-4 text-yellow-600" />;
    case 'cancelled':
      return <XCircle className="h-4 w-4 text-red-600" />;
    default:
      return <Circle className="h-4 w-4 text-gray-400" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed':
      return '완료';
    case 'in-progress':
      return '진행중';
    case 'cancelled':
      return '취소됨';
    default:
      return '대기중';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-green-100 text-green-800';
  }
};

const getPriorityText = (priority: string) => {
  switch (priority) {
    case 'high':
      return '높음';
    case 'medium':
      return '보통';
    default:
      return '낮음';
  }
};

export default function PlansPage() {
  const dailyPlans = samplePlans.filter(plan => plan.category === 'daily');
  const weeklyPlans = samplePlans.filter(plan => plan.category === 'weekly');
  const monthlyPlans = samplePlans.filter(plan => plan.category === 'monthly');
  const quarterlyPlans = samplePlans.filter(
    plan => plan.category === 'quarterly'
  );

  const renderPlanCard = (plan: any) => (
    <Card key={plan.id} className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon(plan.status)}
            <CardTitle className="text-base lg:text-lg">{plan.title}</CardTitle>
          </div>
          <Badge className={getPriorityColor(plan.priority)}>
            {getPriorityText(plan.priority)}
          </Badge>
        </div>
        <CardDescription className="text-sm">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-sm text-muted-foreground space-y-1 lg:space-y-0">
            <span>상태: {getStatusText(plan.status)}</span>
            <span>
              생성일: {format(plan.createdAt, 'yyyy.MM.dd', { locale: ko })}
            </span>
          </div>
          {plan.startTime && plan.endTime && (
            <div className="text-sm text-muted-foreground">
              시간: {format(plan.startTime, 'HH:mm', { locale: ko })} -{' '}
              {format(plan.endTime, 'HH:mm', { locale: ko })}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">계획 관리</h1>
          <p className="text-muted-foreground text-sm lg:text-base">
            시간 단위로 일정을 관리하고 계획을 세워보세요
          </p>
        </div>
        <Button className="w-full lg:w-auto">
          <Plus className="h-4 w-4 mr-2" />새 계획 추가
        </Button>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="daily" className="text-xs lg:text-sm">
            일 계획
          </TabsTrigger>
          <TabsTrigger value="weekly" className="text-xs lg:text-sm">
            주 계획
          </TabsTrigger>
          <TabsTrigger value="monthly" className="text-xs lg:text-sm">
            월 계획
          </TabsTrigger>
          <TabsTrigger value="quarterly" className="text-xs lg:text-sm">
            분기 계획
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-4">
          <div className="grid gap-4">
            {dailyPlans.length > 0 ? (
              dailyPlans.map(renderPlanCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 일일 계획이 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    일일 계획 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <div className="grid gap-4">
            {weeklyPlans.length > 0 ? (
              weeklyPlans.map(renderPlanCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 주간 계획이 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    주간 계획 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <div className="grid gap-4">
            {monthlyPlans.length > 0 ? (
              monthlyPlans.map(renderPlanCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 월간 계획이 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    월간 계획 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="quarterly" className="space-y-4">
          <div className="grid gap-4">
            {quarterlyPlans.length > 0 ? (
              quarterlyPlans.map(renderPlanCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 분기 계획이 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    분기 계획 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
