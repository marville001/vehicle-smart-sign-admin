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
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Users',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add User',
        to: '/new_user',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
]

export default _nav
