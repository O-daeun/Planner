// API 응답 타입 정의
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
}

// 목표 타입
export interface Goal {
  id: number;
  title: string;
  description: string;
  category: 'career' | 'health' | 'personal' | 'financial' | 'social';
  deadline: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

// 계획 타입
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface Plan {
  id: number;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  date: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
}

// 사용자 타입
export interface User {
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

// API 기본 설정
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// 기본 fetch 함수
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API 요청에 실패했습니다.');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// 목표 관련 API 함수들
export const goalsApi = {
  // 목표 목록 조회
  getGoals: () => fetchApi<Goal[]>('/api/goals'),

  // 목표 상세 조회
  getGoal: (id: number) => fetchApi<Goal>(`/api/goals/${id}`),

  // 목표 생성
  createGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) =>
    fetchApi<Goal>('/api/goals', {
      method: 'POST',
      body: JSON.stringify(goal),
    }),

  // 목표 수정
  updateGoal: (id: number, goal: Partial<Goal>) =>
    fetchApi<Goal>(`/api/goals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(goal),
    }),

  // 목표 삭제
  deleteGoal: (id: number) =>
    fetchApi(`/api/goals/${id}`, {
      method: 'DELETE',
    }),
};

// 계획 관련 API 함수들
export const plansApi = {
  // 계획 목록 조회
  getPlans: () => fetchApi<Plan[]>('/api/plans'),

  // 계획 상세 조회
  getPlan: (id: number) => fetchApi<Plan>(`/api/plans/${id}`),

  // 계획 생성
  createPlan: (plan: Omit<Plan, 'id' | 'createdAt' | 'updatedAt'>) =>
    fetchApi<Plan>('/api/plans', {
      method: 'POST',
      body: JSON.stringify(plan),
    }),
};

// 사용자 관련 API 함수들
export const userApi = {
  // 사용자 정보 조회
  getUser: () => fetchApi<User>('/api/user'),

  // 사용자 정보 수정
  updateUser: (user: Partial<User>) =>
    fetchApi<User>('/api/user', {
      method: 'PUT',
      body: JSON.stringify(user),
    }),
};

// 인증 관련 API 함수들
export const authApi = {
  // 로그인
  login: (email: string, password: string) =>
    fetchApi<{ token: string; user: User }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  // 로그아웃
  logout: () =>
    fetchApi('/api/auth/logout', {
      method: 'POST',
    }),
};
