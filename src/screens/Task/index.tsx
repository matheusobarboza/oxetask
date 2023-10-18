import { RouteProp, useRoute } from "@react-navigation/native";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "../../components/generics/styles";
import { HeaderTask } from "../../components/Header";
import { stylesTask } from "../../components/task/styles";
import { StatusBar } from "expo-status-bar";

type RouteTaskParams = {
  DetailsTask: {
    taskId: string;
    description?: string;
    emoji?: string;
  }
}

type FinishOrderRouteProp = RouteProp<RouteTaskParams, 'DetailsTask'>

export const Task = () => {
  const route = useRoute<FinishOrderRouteProp>();
  const { taskId, description, emoji } = route.params

  return (
    <View style={[styles.container, { backgroundColor: '#141315' }]}>
      <StatusBar
        style="light"
        backgroundColor="#141315"
        translucent={false}
      />
      <HeaderTask title={route.params?.taskId !== 'new' ? 'Editar Task' : 'Nova Task'} />
      <View style={stylesTask.containerForm}>
        <View style={styles.itemForm}>
          <Text style={styles.labelForm} >Descrição:</Text>
          <TextInput
            placeholder="Ex: fazer o dever de casa"
            placeholderTextColor="#fff"
            value={description}
            style={styles.formInput}
          />
        </View>
        <View style={styles.itemForm}>
          <Text style={styles.labelForm}>Emoji:</Text>
          <TextInput
            placeholder="Ex: 😁 (Dica: no windows usa Windows+.)"
            placeholderTextColor="#fff"
            value={emoji}
            style={styles.formInput}
          />
        </View>
        <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.textBtnSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}