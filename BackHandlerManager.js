// BackHandlerManager.js
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigate, useLocation } from 'react-router-native';

const BackHandlerManager = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackPress = () => {
      // Get the current route
      const currentRoute = location.pathname;

      // Define custom logic based on the current route
      if (currentRoute === '/screen1') {
        // Handle back gesture for a specific route (e.g., prevent navigation)
        return true; // Prevent default navigation behavior
      } else {
        // Navigate back to the previous screen for other routes
        navigate(-1);
        return true;
      }
    };

    // Add the custom back handler
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Clean up the event listener when the component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [location, navigate]);

  return null; // This component doesn't render anything
};

export default BackHandlerManager;
