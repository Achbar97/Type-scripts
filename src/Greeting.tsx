// Import React and types for functional components
import React from 'react';

// Step 1: Define an interface for the props to specify their types
interface GreetingProps {
  name: string; // name should be a string
}

// Step 2: Use the interface as the type annotation for the component props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Return JSX as usual
  return <div>Hello, {name}!</div>;
};

export default Greeting;
