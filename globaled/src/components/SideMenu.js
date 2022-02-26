import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export function SideMenu() {
  return (
    <Menu>
      <Link to="/dashboard">Dashboard</Link>
    </Menu>
  );
};
