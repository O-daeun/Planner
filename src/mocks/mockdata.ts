// 목업 데이터 타입 정의
export interface MockGoal {
  id: number;
  title: string;
  description: string;
  category: 'career' | 'health' | 'personal' | 'financial' | 'social';
  deadline: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export interface MockTask {
  id: number;
  title: string;
  completed: boolean;
}

export interface MockPlan {
  id: number;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  date: string;
  tasks: MockTask[];
  createdAt: string;
  updatedAt: string;
}

export interface MockUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  preferences: {
    theme: 'light' | 'dark';
    language: 'ko' | 'en';
    notifications: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

// 목업 데이터
export const mockGoals: MockGoal[] = [
  {
    id: 1,
    title: '프로그래밍 마스터하기',
    description: 'React, TypeScript, Node.js를 완벽하게 익히기',
    category: 'career',
    deadline: '2024-12-31',
    progress: 60,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
  },
  {
    id: 2,
    title: '건강한 라이프스타일',
    description: '규칙적인 운동과 건강한 식습관 만들기',
    category: 'health',
    deadline: '2024-06-30',
    progress: 30,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10',
  },
  {
    id: 3,
    title: '독서 습관 만들기',
    description: '월 2권 이상 책 읽기',
    category: 'personal',
    deadline: '2024-12-31',
    progress: 45,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-12',
  },
];

export const mockPlans: MockPlan[] = [
  {
    id: 1,
    title: '일일 계획',
    description: '오늘 해야 할 일들',
    type: 'daily',
    date: '2024-01-15',
    tasks: [
      { id: 1, title: '코딩 공부', completed: true },
      { id: 2, title: '운동하기', completed: false },
      { id: 3, title: '독서하기', completed: false },
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 2,
    title: '주간 계획',
    description: '이번 주 목표',
    type: 'weekly',
    date: '2024-01-15',
    tasks: [
      { id: 1, title: '프로젝트 기획', completed: true },
      { id: 2, title: '디자인 시스템 구축', completed: false },
      { id: 3, title: 'API 설계', completed: false },
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
];

export const mockUser: MockUser = {
  id: 1,
  name: '김플래너',
  email: 'planner@example.com',
  avatar: '/api/avatars/1',
  preferences: {
    theme: 'light',
    language: 'ko',
    notifications: true,
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-15',
};
