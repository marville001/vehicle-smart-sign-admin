import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Roles']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Admins',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Others']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Products',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Product',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
]

export default _nav
