import {
  Calendar,
  CalendarDays,
  CalendarRange,
  Flag,
  Home,
  Mountain,
  Settings,
  Sparkles,
  Target,
  User,
} from 'lucide-react';

export const sideMenuItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Goals',
    url: '/goals',
    icon: Target,
    subItems: [
      {
        title: 'Life Goals',
        url: '/goals/life',
        icon: Sparkles,
      },
      {
        title: '10 Year Goals',
        url: '/goals/10year',
        icon: Mountain,
      },
      {
        title: 'Yearly Goals',
        url: '/goals/yearly',
        icon: Flag,
      },
      {
        title: 'Monthly Goals',
        url: '/goals/monthly',
        icon: Calendar,
      },
    ],
  },
  {
    title: 'Plans',
    url: '/plans',
    icon: Calendar,
    subItems: [
      {
        title: 'Weekly Plans',
        url: '/plans/weekly',
        icon: CalendarRange,
      },
      {
        title: 'Daily Plans',
        url: '/plans/daily',
        icon: CalendarDays,
      },
    ],
  },
  {
    title: 'My Page',
    url: '/my-page',
    icon: User,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

// 브레드크럼 아이템 타입 정의
export interface BreadcrumbItem {
  title: string;
  url: string;
}

// 현재 경로에 맞는 브레드크럼 데이터를 생성하는 함수
export function getBreadcrumbData(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];

  // 홈 페이지인 경우
  if (pathname === '/' || pathname === '') {
    return [{ title: 'Home', url: '/' }];
  }

  // 경로를 세그먼트로 분할
  const segments = pathname.split('/').filter(Boolean);

  // 전체 경로에 대해 메뉴 아이템을 찾기
  const fullPath = `/${segments.join('/')}`;

  // 메인 메뉴에서 정확히 일치하는 아이템 찾기
  const mainItem = sideMenuItems.find(item => item.url === fullPath);
  if (mainItem) {
    return [{ title: mainItem.title, url: mainItem.url }];
  }

  // 서브아이템에서 정확히 일치하는 아이템 찾기
  for (const item of sideMenuItems) {
    if (item.subItems) {
      const subItem = item.subItems.find(sub => sub.url === fullPath);
      if (subItem) {
        return [
          { title: item.title, url: item.url },
          { title: subItem.title, url: subItem.url },
        ];
      }
    }
  }

  // 메뉴에 없는 경로인 경우 세그먼트별로 생성
  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    // 메뉴에서 해당 경로를 찾기
    const menuItem = sideMenuItems.find(item => item.url === currentPath);
    if (menuItem) {
      breadcrumbs.push({ title: menuItem.title, url: menuItem.url });
    } else {
      // 서브아이템에서 찾기
      const parentItem = sideMenuItems.find(item =>
        item.subItems?.some(sub => sub.url === currentPath)
      );
      if (parentItem) {
        const subItem = parentItem.subItems!.find(
          sub => sub.url === currentPath
        );
        if (subItem) {
          // 부모 아이템이 아직 추가되지 않았다면 추가
          if (!breadcrumbs.some(b => b.url === parentItem.url)) {
            breadcrumbs.push({ title: parentItem.title, url: parentItem.url });
          }
          breadcrumbs.push({ title: subItem.title, url: subItem.url });
        }
      } else {
        // 메뉴에 없는 경로인 경우 세그먼트 이름을 그대로 사용
        const title = segment.charAt(0).toUpperCase() + segment.slice(1);
        breadcrumbs.push({ title, url: currentPath });
      }
    }
  }

  return breadcrumbs;
}
