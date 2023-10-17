import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Task from "../screens/Task";
import { Details } from "../screens/Details";
import { NewTask } from "../screens/NewTask";

export type StackParamsList = {
  Task: undefined;
  Details: {
    taskId: string,
    description: string,
  };
  NewTask: undefined;
}

const Stack = createNativeStackNavigator<StackParamsList>();

export function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Task" 
        component={Task}
        options={{
          title: 'Tarefas',
          headerTintColor: '#F96E46',
        }}
      />
      <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: '#1d1d2e'
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="NewTask" 
        component={NewTask}
      />

    </Stack.Navigator>
  )
}