'use client';

import {
  authApi,
  Goal,
  goalsApi,
  Plan,
  plansApi,
  User,
  userApi,
} from '@/lib/api';
import { useEffect, useState } from 'react';

export default function ApiTest() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 목표 목록 가져오기
  const fetchGoals = async () => {
    setLoading(true);
    try {
      const response = await goalsApi.getGoals();
      setGoals(response.data || []);
      setMessage('목표 목록을 성공적으로 가져왔습니다.');
    } catch (error) {
      setMessage('목표 목록 가져오기 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // 계획 목록 가져오기
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await plansApi.getPlans();
      setPlans(response.data || []);
      setMessage('계획 목록을 성공적으로 가져왔습니다.');
    } catch (error) {
      setMessage('계획 목록 가져오기 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // 사용자 정보 가져오기
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUser();
      setUser(response.data || null);
      setMessage('사용자 정보를 성공적으로 가져왔습니다.');
    } catch (error) {
      setMessage('사용자 정보 가져오기 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // 로그인 테스트
  const testLogin = async () => {
    setLoading(true);
    try {
      const response = await authApi.login('test@example.com', 'password');
      setMessage('로그인 성공: ' + response.data?.user.name);
    } catch (error) {
      setMessage('로그인 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // 새 목표 생성 테스트
  const createTestGoal = async () => {
    setLoading(true);
    try {
      const newGoal = {
        title: '테스트 목표',
        description: 'MSW 테스트를 위한 목표입니다.',
        category: 'personal' as const,
        deadline: '2024-12-31',
        progress: 0,
      };
      const response = await goalsApi.createGoal(newGoal);
      setMessage('새 목표 생성 성공: ' + response.data?.title);
      fetchGoals(); // 목록 새로고침
    } catch (error) {
      setMessage('목표 생성 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchPlans();
    fetchUser();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">MSW API 테스트</h1>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <button
            onClick={fetchGoals}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            목표 목록 새로고침
          </button>
          <button
            onClick={fetchPlans}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            계획 목록 새로고침
          </button>
          <button
            onClick={fetchUser}
            disabled={loading}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
          >
            사용자 정보 새로고침
          </button>
          <button
            onClick={testLogin}
            disabled={loading}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
          >
            로그인 테스트
          </button>
          <button
            onClick={createTestGoal}
            disabled={loading}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            새 목표 생성
          </button>
        </div>

        {message && (
          <div className="p-3 bg-gray-100 rounded mb-4">
            <strong>메시지:</strong> {message}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 목표 목록 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">
            목표 목록 ({goals.length})
          </h2>
          {goals.map(goal => (
            <div key={goal.id} className="border-b py-2">
              <h3 className="font-medium">{goal.title}</h3>
              <p className="text-sm text-gray-600">{goal.description}</p>
              <div className="text-xs text-gray-500">
                진행률: {goal.progress}% | 마감일: {goal.deadline}
              </div>
            </div>
          ))}
        </div>

        {/* 계획 목록 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">
            계획 목록 ({plans.length})
          </h2>
          {plans.map(plan => (
            <div key={plan.id} className="border-b py-2">
              <h3 className="font-medium">{plan.title}</h3>
              <p className="text-sm text-gray-600">{plan.description}</p>
              <div className="text-xs text-gray-500">
                타입: {plan.type} | 날짜: {plan.date}
              </div>
              <div className="text-xs text-gray-500">
                완료된 작업: {plan.tasks.filter(t => t.completed).length}/
                {plan.tasks.length}
              </div>
            </div>
          ))}
        </div>

        {/* 사용자 정보 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">사용자 정보</h2>
          {user ? (
            <div>
              <p>
                <strong>이름:</strong> {user.name}
              </p>
              <p>
                <strong>이메일:</strong> {user.email}
              </p>
              <p>
                <strong>테마:</strong> {user.preferences.theme}
              </p>
              <p>
                <strong>언어:</strong> {user.preferences.language}
              </p>
              <p>
                <strong>알림:</strong>{' '}
                {user.preferences.notifications ? '켜짐' : '꺼짐'}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">사용자 정보를 불러오는 중...</p>
          )}
        </div>
      </div>
    </div>
  );
}
