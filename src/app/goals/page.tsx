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
import { sampleGoals } from '@/lib/data';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CheckCircle, Circle, Clock, Plus, Target } from 'lucide-react';

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'in-progress':
      return <Clock className="h-4 w-4 text-yellow-600" />;
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
    default:
      return '시작 전';
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

export default function GoalsPage() {
  const lifeGoals = sampleGoals.filter(goal => goal.category === 'life');
  const tenYearGoals = sampleGoals.flatMap(
    goal => goal.children?.filter(child => child.category === '10year') || []
  );
  const fiveYearGoals = sampleGoals.flatMap(
    goal => goal.children?.filter(child => child.category === '5year') || []
  );
  const oneYearGoals = sampleGoals.flatMap(
    goal => goal.children?.filter(child => child.category === '1year') || []
  );

  const renderGoalCard = (goal: any) => (
    <Card key={goal.id} className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon(goal.status)}
            <CardTitle className="text-base lg:text-lg">{goal.title}</CardTitle>
          </div>
          <Badge className={getPriorityColor(goal.priority)}>
            {getPriorityText(goal.priority)}
          </Badge>
        </div>
        <CardDescription className="text-sm">
          {goal.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-sm text-muted-foreground space-y-1 lg:space-y-0">
          <span>상태: {getStatusText(goal.status)}</span>
          <span>
            생성일: {format(goal.createdAt, 'yyyy.MM.dd', { locale: ko })}
          </span>
        </div>
        {goal.deadline && (
          <div className="mt-2 text-sm text-muted-foreground">
            마감일: {format(goal.deadline, 'yyyy.MM.dd', { locale: ko })}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">목표 관리</h1>
          <p className="text-muted-foreground text-sm lg:text-base">
            인생 목표부터 일일 목표까지 체계적으로 관리하세요
          </p>
        </div>
        <Button className="w-full lg:w-auto">
          <Plus className="h-4 w-4 mr-2" />새 목표 추가
        </Button>
      </div>

      <Tabs defaultValue="life" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="life" className="text-xs lg:text-sm">
            인생 목표
          </TabsTrigger>
          <TabsTrigger value="10year" className="text-xs lg:text-sm">
            10년 목표
          </TabsTrigger>
          <TabsTrigger value="5year" className="text-xs lg:text-sm">
            5년 목표
          </TabsTrigger>
          <TabsTrigger value="1year" className="text-xs lg:text-sm">
            1년 목표
          </TabsTrigger>
        </TabsList>

        <TabsContent value="life" className="space-y-4">
          <div className="grid gap-4">
            {lifeGoals.length > 0 ? (
              lifeGoals.map(renderGoalCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 인생 목표가 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />첫 목표 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="10year" className="space-y-4">
          <div className="grid gap-4">
            {tenYearGoals.length > 0 ? (
              tenYearGoals.map(renderGoalCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 10년 목표가 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    10년 목표 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="5year" className="space-y-4">
          <div className="grid gap-4">
            {fiveYearGoals.length > 0 ? (
              fiveYearGoals.map(renderGoalCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 5년 목표가 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    5년 목표 추가하기
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="1year" className="space-y-4">
          <div className="grid gap-4">
            {oneYearGoals.length > 0 ? (
              oneYearGoals.map(renderGoalCard)
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Target className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    아직 1년 목표가 없습니다.
                  </p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    1년 목표 추가하기
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
