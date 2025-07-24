export interface Goal {
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

export type GoalCategory =
  | 'life'
  | '10year'
  | '5year'
  | '1year'
  | 'quarterly'
  | 'monthly'
  | 'weekly'
  | 'daily';

export interface Plan {
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

export type PlanCategory = 'quarterly' | 'monthly' | 'weekly' | 'daily';

export interface Quote {
  text: string;
  author: string;
}
