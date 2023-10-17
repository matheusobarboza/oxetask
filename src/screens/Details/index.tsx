import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

type RouteDetailParams = {
  DetailsTask: {
    taskId: string;
    description: string;
  }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'DetailsTask'>

export const Details = () => {
  const route = useRoute<FinishOrderRouteProp>();

  return (
    <View>
      <Text>{route.params?.description}</Text>
    </View>
  )
}