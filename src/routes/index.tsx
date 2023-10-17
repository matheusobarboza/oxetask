import React from "react";
import { ActivityIndicator, View } from "react-native";
import { AppRoutes } from "./app.routes";
// import { AuthContext } from "../contexts/AuthContext";
// import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  // const { isAuthenticated, isLoading } = useContext(AuthContext);
  const isAuthenticated = true
  const isLoading = false
  if(isLoading){
    return(
      <View
        style={{
          flex: 1,
          backgroundColor: '#101026',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size={60} color='#ffffff' />
      </View>
    )
  }
  
  return(
    isAuthenticated && <AppRoutes />
  )
}