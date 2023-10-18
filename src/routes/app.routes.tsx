import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Task } from "../screens/Task";
import Home from "../screens/Home";

export type StackParamsList = {
  Home: undefined;
  Task: {
    taskId: string,
    description?: string,
    emoji?: string
  };
}

const Stack = createNativeStackNavigator<StackParamsList>();

export function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Task"
        component={Task}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}