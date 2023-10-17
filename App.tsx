import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { AppProvider } from './src/context/appContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar
          style="light"
          backgroundColor="#1d1d2e"
          translucent={false}
        />
        <Routes />
      </AppProvider>
    </NavigationContainer>

  );
}
