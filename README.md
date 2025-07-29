# 📝 Planner 프로젝트 개요

---

## 📌 버전 구성

1. **프론트: 목표 관리**
   - 목표 단위:
     - 인생
     - 10년 단위
     - 5년 단위
     - 1년 단위
     - 분기 단위
     - 월 단위
     - 주 단위
     - 일 단위

2. **프론트: 계획표**
   - 시간 단위 일정 관리 (예: 하루 시간표, 루틴 등)

3. **기타**
   - 로그인 기능
   - 데이터베이스 연동

---

## 🧭 페이지 구조

### 첫 로딩 (데이터 다 불러올 때까지 1~2초간)

- 오늘의 명언 표시

### `/` (메인 페이지)

- 현재 날짜 표시
- 인생 목표 잘 보이게 표시 (누르면 인생목표 페이지로 이동)
- 버킷리스트 표시 (누르면 버킷리스트 페이지로 이동)
- 오늘의 계획 (30분 단위로 표시 -> 칸 누르면 추가되고, 드래그해서 시간 늘릴 수 있게)

### `/goals` (목표 페이지)

- 인생목표
- 10년
- 5년
- 1년

-> 각 목표 추가/수정/삭제 기능 추가

### `/plans` (계획 페이지)

- 분기
- 월
- 주
- 일

-> 각 계획 추가/수정/삭제 기능 추가

---

## 🛠️ 기술 스택

### Frontend

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (커스텀 디자인 시스템)
- **Radix UI** (접근성 UI 컴포넌트)
- **Lucide React** (아이콘)
- **date-fns** (날짜 처리)
- **class-variance-authority (cva)** (컴포넌트 변형)
- **clsx + tailwind-merge** (클래스 병합)

### Development

- **Turbopack** (빠른 개발 서버)
- **Fast Refresh** (핫 리로딩)
- **MSW (Mock Service Worker)** (API 목업)

### API Mocking

- **MSW**를 사용한 개발 환경 API 목업
- 목표, 계획, 사용자 관련 API 엔드포인트 구현
- 실제 백엔드 없이 프론트엔드 개발 가능

---

## 📁 프로젝트 구조

```
planner/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 메인 레이아웃 (반응형)
│   │   ├── page.tsx            # 홈페이지
│   │   ├── goals/page.tsx      # 목표 관리 페이지
│   │   ├── plans/page.tsx      # 계획 관리 페이지
│   │   └── api-test/page.tsx   # API 테스트 페이지
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   └── Header.tsx  # 헤더 (반응형)
│   │   │   └── sidebar/
│   │   │       └── Sidebar.tsx # 사이드바 (반응형)
│   │   ├── api-test.tsx        # API 테스트 컴포넌트
│   │   └── ui/
│   │       ├── button.tsx      # 버튼 컴포넌트
│   │       ├── card.tsx        # 카드 컴포넌트
│   │       ├── tabs.tsx        # 탭 컴포넌트
│   │       └── badge.tsx       # 배지 컴포넌트
│   ├── lib/
│   │   ├── utils.ts            # 유틸리티 함수
│   │   ├── data.ts             # 샘플 데이터
│   │   └── api.ts              # API 유틸리티 함수
│   ├── mocks/
│   │   ├── handlers.ts         # MSW API 핸들러
│   │   └── browser.ts          # MSW 브라우저 설정
│   └── types/
│       └── index.ts            # TypeScript 타입 정의
├── public/                     # MSW 워커 스크립트
├── tailwind.config.ts          # Tailwind 설정
└── package.json
```

---

## 🎨 UI/UX 특징

### 디자인 시스템

- **커스텀 CSS 변수** 기반 색상 시스템
- **일관된 컴포넌트** 구조
- **접근성** 고려한 Radix UI 사용

### 반응형 디자인

- **모바일 우선** 접근법
- **브레이크포인트**:
  - 모바일: `< 1024px`
  - 데스크톱: `≥ 1024px`
- **적응형 레이아웃**:
  - 모바일: 세로 배치
  - 데스크톱: 가로 배치

### 컴포넌트 특징

- **Button**: 다양한 variant와 size 지원
- **Card**: 일관된 카드 레이아웃
- **Tabs**: 탭 기반 네비게이션
- **Badge**: 상태 및 우선순위 표시

---

## 📊 데이터 구조

### Goal (목표)

```typescript
interface Goal {
  id: string;
  title: string;
  description?: string;
  category: GoalCategory;
  priority: 'high' | 'medium' | 'low';
  status: 'not-started' | 'in-progress' | 'completed';
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
  parentId?: string;
  children?: Goal[];
}
```

### Plan (계획)

```typescript
interface Plan {
  id: string;
  title: string;
  description?: string;
  category: PlanCategory;
  startTime?: Date;
  endTime?: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'high' | 'medium' | 'low';
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🚀 실행 방법

### 개발 서버

```bash
# Turbopack으로 빠른 개발 서버 실행
npm run dev
# 또는
pnpm dev
```

### 프로덕션 빌드

```bash
npm run build
npm start
```

---

## ✅ 구현 완료 기능

### ✅ 기본 구조

- [x] Next.js 15 App Router 설정
- [x] TypeScript 설정
- [x] Tailwind CSS v4 설정
- [x] 반응형 레이아웃

### ✅ UI 컴포넌트

- [x] Button 컴포넌트 (cva 기반)
- [x] Card 컴포넌트
- [x] Tabs 컴포넌트
- [x] Badge 컴포넌트
- [x] 유틸리티 함수 (cn)

### ✅ 페이지 구현

- [x] 메인 레이아웃 (Header + Sidebar)
- [x] 홈페이지 (대시보드)
- [x] 목표 관리 페이지
- [x] 계획 관리 페이지

### ✅ 반응형 디자인

- [x] 모바일 헤더 (햄버거 메뉴)
- [x] 모바일 사이드바 (3개 버튼)
- [x] 적응형 그리드 레이아웃
- [x] 반응형 타이포그래피

### ✅ 데이터 & 타입

- [x] TypeScript 인터페이스 정의
- [x] 샘플 데이터 구현
- [x] 날짜 포맷팅 (date-fns)

### ✅ API Mocking

- [x] MSW 설정 및 초기화
- [x] 목표 관련 API 엔드포인트 (CRUD)
- [x] 계획 관련 API 엔드포인트 (CRUD)
- [x] 사용자 관련 API 엔드포인트
- [x] 인증 관련 API 엔드포인트
- [x] API 유틸리티 함수 구현
- [x] API 테스트 컴포넌트 구현

---

## 🔄 다음 단계

### 🚧 예정 기능

- [ ] 목표/계획 추가/수정/삭제 기능
- [ ] 목표 계층 구조 구현
- [ ] 로그인/회원가입
- [ ] 데이터베이스 연동
- [ ] 실시간 데이터 동기화
- [ ] 다크 모드 지원

### 🚧 추가 페이지

- [ ] `/goals/life` - 인생 목표 상세
- [ ] `/goals/10year` - 10년 목표 상세
- [ ] `/goals/5year` - 5년 목표 상세
- [ ] `/goals/1year` - 1년 목표 상세
- [ ] `/plans/daily` - 일일 계획 상세
- [ ] `/plans/weekly` - 주간 계획 상세
- [ ] `/plans/monthly` - 월간 계획 상세
- [ ] `/plans/quarterly` - 분기 계획 상세

---

## ✅ 참고 사항

- 각 목표 단위는 별도의 페이지로 구성될 예정
- 목표는 계층 구조를 가지며, 연관된 하위 목표를 포함할 수 있음
- 시간 계획표는 목표와 별도로 구성되어 시간 단위 일정 관리에 초점
- **모바일 우선 반응형 디자인** 적용
- **접근성** 고려한 UI 컴포넌트 사용

## 📝 README.md 업데이트 완료!

지금까지 작업한 모든 내용을 체계적으로 정리했습니다:

### 추가된 섹션들:

1. **🛠️ 기술 스택** - 사용된 모든 라이브러리와 도구
2. ** 프로젝트 구조** - 파일 구조와 역할 설명
3. **🎨 UI/UX 특징** - 디자인 시스템과 반응형 특징
4. **📊 데이터 구조** - TypeScript 인터페이스 정의
5. **🚀 실행 방법** - 개발/프로덕션 실행 명령어
6. **✅ 구현 완료 기능** - 체크리스트 형태로 완료된 기능들
7. ** 다음 단계** - 향후 개발 계획

### 주요 특징:

- **모바일 우선 반응형 디자인** ✅
- **Next.js 15 + React 19** 최신 기술 스택 ✅
- **Tailwind CSS v4** 커스텀 디자인 시스템 ✅
- **TypeScript** 타입 안전성 ✅
- **접근성** 고려한 Radix UI 컴포넌트 ✅

이제 커밋하시면 됩니다! 🚀

```bash
git add .
git commit -m "feat: 반응형 Planner 앱 구현 완료

- Next.js 15 + React 19 기반 반응형 앱 구현
- 모바일 우선 디자인 적용
- 목표/계획 관리 페이지 구현
- Tailwind CSS v4 + Radix UI 컴포넌트
- TypeScript 타입 정의 및 샘플 데이터"
```
