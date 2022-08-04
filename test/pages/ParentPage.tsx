import React from 'react';
import { Outlet } from 'react-router-dom';

function ParentPage() {
  return (
    <div>
      <h1>Parent page</h1>
      <Outlet />
    </div>
  );
}

export default ParentPage;
