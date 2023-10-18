import { Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/FontAwesome';
import { stylesHome } from "./styles";

export const EmptyTasksList = () => {
  return (
    <View style={stylesHome.containerEmpty}>
      <Ionicons name="check-circle" size={40} color="#17E0BC" />
      <Text style={stylesHome.textEmpty}>Não há tarefas a serem feitas</Text>
    </View>
  )
}