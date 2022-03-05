import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export function SideMenu() {
    let src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    return (
        <Menu>
            <Link to="/dashboard">Dashboard</Link>
            <p>Sustainable Lifestyles</p>
            <p>Gender Equality</p>
            <p>Promotion of a Culture of Peace and Non-Violence</p>
            <p>Global Citizenship</p>
            <p>Appreciation of Cultural Diversity </p>
            <br />
            <p>Favorites</p>
            <p>Settings</p>
            <p>Support</p>
            <hr />
            <img src= { src } alt="Cat" className="avatar" />
            <h5 class="mb-2"><strong>Mr. Whiskers</strong></h5>
            <p class="text-muted">International Teacher</p>
        </Menu>
    );
};
