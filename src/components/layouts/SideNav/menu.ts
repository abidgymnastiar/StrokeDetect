import type { IconType } from 'react-icons/lib';
import {
  LuActivity,
  LuCircuitBoard,
  LuCodesandbox,
  LuFileText,
  LuFingerprint,
  LuGitBranch,
  LuLayoutPanelLeft,
  LuMonitorDot,
  LuShare2,
  LuShieldCheck,
  LuSquareUserRound,
} from 'react-icons/lu';

export type MenuItemType = {
  key: string;
  label: string;
  isTitle?: boolean;
  href?: string;
  children?: MenuItemType[];

  icon?: IconType;
  parentKey?: string;
  target?: string;
  isDisabled?: boolean;
};

export const menuItemsData: MenuItemType[] = [
  {
    key: 'Overview',
    label: 'Overview',
    isTitle: true,
  },
  {
    key: 'Dashboards',
    label: 'Dashboards',
    icon: LuMonitorDot,
    href: '/admin/dashboards',
  },
  {
    key: 'Reports',
    label: 'Reports',
    icon: LuFileText,
    href: '/admin/reports',
  },
  {
    key: 'Apps',
    label: 'Apps',
    isTitle: true,
  },
  {
    key: 'Users',
    label: 'Users',
    icon: LuSquareUserRound,
    href: '/admin/users',
  },
  {
    key: 'Detection Results',
    label: 'Detection Results',
    icon: LuActivity,
    href: '/admin/detection-results',
  },
  {
    key: 'C4.5 Model',
    label: 'C4.5 Model',
    icon: LuGitBranch,
    href: '/admin/c45-model',
  },
  {
    key: 'HR Management',
    label: 'HR Management',
    icon: LuCircuitBoard,
    children: [
      { key: 'Employee List', label: 'Employee List', href: '/admin/employee' },
      { key: 'Holidays', label: 'Holidays', href: '/admin/holidays' },
      {
        key: 'Leave Manage',
        label: 'Leave Manage',
        href: '#',
        children: [
          { key: 'By Employee', label: 'By Employee', href: '/admin/leave-employee' },
          {
            key: 'Add Leave(Employee)',
            label: 'Add Leave(Employee)',
            href: '/admin/create-leave-employee',
          },
          { key: 'By HR', label: 'By HR', href: '/admin/leave' },
          { key: 'Add Leave(HR)', label: 'Add Leave(HR)', href: '/admin/create-leave' },
        ],
      },
      {
        key: 'Attendance',
        label: 'Attendance',
        href: '#',
        children: [
          { key: 'Attendance(HR)', label: 'Attendance(HR)', href: '/admin/attendance' },
          { key: 'Main Attendance', label: 'Main Attendance', href: '/admin/attendance-main' },
        ],
      },
      { key: 'Department', label: 'Department', href: '/admin/department' },
      {
        key: 'Sales',
        label: 'Sales',
        href: '#',
        children: [
          { key: 'Estimates', label: 'Estimates', href: '/admin/sales-estimates' },
          { key: 'Payments', label: 'Payments', href: '/admin/sales-payments' },
          { key: 'Expenses', label: 'Expenses', href: '/admin/sales-expenses' },
        ],
      },
      {
        key: 'Payroll',
        label: 'Payroll',
        href: '#',
        children: [
          {
            key: 'Employee Salary',
            label: 'Employee Salary',
            href: '/admin/payroll-employee-salary',
          },
          { key: 'Payslip', label: 'Payslip', href: '/admin/payroll-payslip' },
          { key: 'Create Payslip', label: 'Create Payslip', href: '/admin/create-payslip' },
        ],
      },
    ],
  },
  {
    key: 'Invoice',
    label: 'Invoice',
    icon: LuFileText,
    children: [
      { key: 'Overview', label: 'Overview', href: '/admin/overview' },
      { key: 'List Invoice', label: 'List Invoice', href: '/admin/list' },
      { key: 'Add Invoice', label: 'Add Invoice', href: '/admin/add-new' },
    ],
  },
  {
    key: 'Extra',
    label: 'Extra',
    isTitle: true,
  },
  {
    key: 'Pages',
    label: 'Pages',
    icon: LuCodesandbox,
    children: [
      { key: 'Starter Page', label: 'Starter Page', href: '/admin/starter' },
      { key: 'Pricing', label: 'Pricing', href: '/admin/pricing' },
      { key: 'FAQ', label: 'FAQ', href: '/admin/faqs' },
      { key: 'Maintenance', label: 'Maintenance', href: '/maintenance' },
      { key: 'Timeline', label: 'Timeline', href: '/admin/timeline' },
      { key: 'Coming Soon', label: 'Coming Soon', href: '/coming-soon' },
      { key: '404', label: '404', href: '/404' },
      { key: 'Offline', label: 'Offline', href: '/offline' },
    ],
  },
];
