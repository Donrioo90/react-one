// src/RenderWhen.js
import React from 'react';

// Define the RenderWhen component
export function RenderWhen({ children }) {
  return <>{children}</>;
}

// Define a sub-component for conditional rendering
RenderWhen.If = ({ isTrue, children }) => {
  return isTrue ? <>{children}</> : null;
};
