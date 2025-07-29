import { http, HttpResponse } from 'msw';
import { mockGoals, mockPlans, mockUser } from './mockdata';

// API 핸들러들
export const handlers = [
  // 목표 관련 API
  http.get('/api/goals', () => {
    return HttpResponse.json({
      success: true,
      data: mockGoals,
      message: '목표 목록을 성공적으로 가져왔습니다.',
    });
  }),

  http.get('/api/goals/:id', ({ params }) => {
    const goal = mockGoals.find(g => g.id === Number(params.id));
    if (!goal) {
      return HttpResponse.json(
        { success: false, message: '목표를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    return HttpResponse.json({
      success: true,
      data: goal,
      message: '목표를 성공적으로 가져왔습니다.',
    });
  }),

  http.post('/api/goals', async ({ request }) => {
    const body = (await request.json()) as any;
    const newGoal = {
      id: mockGoals.length + 1,
      ...body,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
    };
    mockGoals.push(newGoal);
    return HttpResponse.json(
      {
        success: true,
        data: newGoal,
        message: '목표가 성공적으로 생성되었습니다.',
      },
      { status: 201 }
    );
  }),

  http.put('/api/goals/:id', async ({ params, request }) => {
    const body = (await request.json()) as any;
    const goalIndex = mockGoals.findIndex(g => g.id === Number(params.id));
    if (goalIndex === -1) {
      return HttpResponse.json(
        { success: false, message: '목표를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    mockGoals[goalIndex] = {
      ...mockGoals[goalIndex],
      ...body,
      updatedAt: new Date().toISOString().split('T')[0],
    };
    return HttpResponse.json({
      success: true,
      data: mockGoals[goalIndex],
      message: '목표가 성공적으로 수정되었습니다.',
    });
  }),

  http.delete('/api/goals/:id', ({ params }) => {
    const goalIndex = mockGoals.findIndex(g => g.id === Number(params.id));
    if (goalIndex === -1) {
      return HttpResponse.json(
        { success: false, message: '목표를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    mockGoals.splice(goalIndex, 1);
    return HttpResponse.json({
      success: true,
      message: '목표가 성공적으로 삭제되었습니다.',
    });
  }),

  // 계획 관련 API
  http.get('/api/plans', () => {
    return HttpResponse.json({
      success: true,
      data: mockPlans,
      message: '계획 목록을 성공적으로 가져왔습니다.',
    });
  }),

  http.get('/api/plans/:id', ({ params }) => {
    const plan = mockPlans.find(p => p.id === Number(params.id));
    if (!plan) {
      return HttpResponse.json(
        { success: false, message: '계획을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    return HttpResponse.json({
      success: true,
      data: plan,
      message: '계획을 성공적으로 가져왔습니다.',
    });
  }),

  http.post('/api/plans', async ({ request }) => {
    const body = (await request.json()) as any;
    const newPlan = {
      id: mockPlans.length + 1,
      ...body,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
    };
    mockPlans.push(newPlan);
    return HttpResponse.json(
      {
        success: true,
        data: newPlan,
        message: '계획이 성공적으로 생성되었습니다.',
      },
      { status: 201 }
    );
  }),

  // 사용자 관련 API
  http.get('/api/user', () => {
    return HttpResponse.json({
      success: true,
      data: mockUser,
      message: '사용자 정보를 성공적으로 가져왔습니다.',
    });
  }),

  http.put('/api/user', async ({ request }) => {
    const body = await request.json();
    Object.assign(mockUser, body, {
      updatedAt: new Date().toISOString().split('T')[0],
    });
    return HttpResponse.json({
      success: true,
      data: mockUser,
      message: '사용자 정보가 성공적으로 수정되었습니다.',
    });
  }),

  // 인증 관련 API
  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as any;
    if (body?.email === 'test@example.com' && body?.password === 'password') {
      return HttpResponse.json({
        success: true,
        data: {
          token: 'mock-jwt-token',
          user: mockUser,
        },
        message: '로그인이 성공했습니다.',
      });
    }
    return HttpResponse.json(
      { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
      { status: 401 }
    );
  }),

  http.post('/api/auth/logout', () => {
    return HttpResponse.json({
      success: true,
      message: '로그아웃이 성공했습니다.',
    });
  }),
];
