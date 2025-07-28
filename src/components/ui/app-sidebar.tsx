import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
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

// Menu items with submenus.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Goals',
    url: '#',
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
    url: '#',
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
    url: '#',
    icon: User,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarMenuSub>
                      {item.subItems.map(subItem => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <subItem.icon />
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
