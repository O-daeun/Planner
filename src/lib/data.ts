import { Goal, Plan, Quote } from '@/types';

export const quotes: Quote[] = [
  {
    text: '목표를 향해 한 걸음씩 나아가는 것이 가장 확실한 성공의 길이다.',
    author: '로버트 슐러',
  },
  {
    text: '계획이 없는 목표는 단지 소망일 뿐이다.',
    author: '앙투안 드 생텍쥐페리',
  },
  {
    text: '오늘 할 수 있는 일을 내일로 미루지 마라.',
    author: '벤자민 프랭클린',
  },
  {
    text: '성공의 비밀은 목표의 일관성에 있다.',
    author: '벤자민 디즈레일리',
  },
  {
    text: '작은 진전이라도 매일 이루어내면 큰 변화를 만들 수 있다.',
    author: '로버트 콜리어',
  },
];

export const sampleGoals: Goal[] = [
  {
    id: '1',
    title: '건강한 삶 살기',
    description: '신체적, 정신적 건강을 유지하며 행복한 삶을 살기',
    category: 'life',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    children: [
      {
        id: '1-1',
        title: '규칙적인 운동 습관 만들기',
        description: '주 3회 이상 운동하기',
        category: '10year',
        priority: 'high',
        status: 'in-progress',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        parentId: '1',
      },
      {
        id: '1-2',
        title: '건강한 식습관 형성',
        description: '균형 잡힌 영양소 섭취하기',
        category: '10year',
        priority: 'medium',
        status: 'not-started',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        parentId: '1',
      },
    ],
  },
  {
    id: '2',
    title: '개발자로서 성장하기',
    description: '전문적인 개발 능력을 향상시키고 새로운 기술을 습득하기',
    category: 'life',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    children: [
      {
        id: '2-1',
        title: '풀스택 개발자 되기',
        description: '프론트엔드와 백엔드 모두 능숙하게 다루기',
        category: '5year',
        priority: 'high',
        status: 'in-progress',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        parentId: '2',
      },
      {
        id: '2-2',
        title: '오픈소스 프로젝트 기여하기',
        description: '의미 있는 오픈소스 프로젝트에 기여하기',
        category: '1year',
        priority: 'medium',
        status: 'not-started',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        parentId: '2',
      },
    ],
  },
];

export const samplePlans: Plan[] = [
  {
    id: '1',
    title: '오늘의 운동',
    description: '30분 조깅하기',
    category: 'daily',
    startTime: new Date('2024-01-15T07:00:00'),
    endTime: new Date('2024-01-15T07:30:00'),
    status: 'pending',
    priority: 'high',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: '프로젝트 회의',
    description: '팀과 함께 프로젝트 진행상황 논의',
    category: 'daily',
    startTime: new Date('2024-01-15T14:00:00'),
    endTime: new Date('2024-01-15T15:00:00'),
    status: 'pending',
    priority: 'high',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    title: '이번 주 목표 설정',
    description: '주간 목표를 정하고 우선순위 정하기',
    category: 'weekly',
    status: 'pending',
    priority: 'medium',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
];

export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
