import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "../../components/generics/styles";
import { HeaderTask } from "../../components/Header";
import { stylesTask } from "../../components/task/styles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { useAppContext } from "../../context/hook";

type RouteTaskParams = {
  DetailsTask: {
    taskId: string;
    description?: string;
    emoji?: string;
  }
}

type FinishOrderRouteProp = RouteProp<RouteTaskParams, 'DetailsTask'>

export const Task = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const route = useRoute<FinishOrderRouteProp>();

  const { loadTasks } = useAppContext()

  const { taskId, description, emoji } = route.params

  const [formDescription, setFormDescription] = useState(description ? description : '')
  const [formEmoji, setFormEmoji] = useState(emoji ? emoji : '')
  const [isLoading, setIsLoading] = useState(false)

  const saveTask = async () => {
    if (formDescription === '') {
      alert('Por favor, forneça uma descrição')
    }

    setIsLoading(true)

    if (taskId !== 'new') {
      const task = doc(db, "tasks", taskId)
      await updateDoc(task, {
        description: formDescription,
        emoji: formEmoji,
      })
      .then(() => {
        setFormDescription('')
        setFormEmoji('')
        alert('Task salva com sucesso!')
        navigation.navigate('Home')
        loadTasks()
      })
      .catch(error => {
        alert('Falha ao salvar task!')
      })
    } else {
      await addDoc(collection(db, "tasks"), {
        description: formDescription,
        emoji: formEmoji,
      })
      .then(() => {
        setFormDescription('')
        setFormEmoji('')
        alert('Task salva com sucesso!')
        navigation.navigate('Home')
        loadTasks()
      })
      .catch(error => {
        alert('Falha ao salvar task!')
      })
    }

    setIsLoading(false)
  }

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
            value={formDescription}
            onChangeText={value => setFormDescription(value)}
            style={styles.formInput}
          />
        </View>
        <View style={styles.itemForm}>
          <Text style={styles.labelForm}>Emoji:</Text>
          <TextInput
            placeholder="Ex: 😁"
            placeholderTextColor="#fff"
            value={formEmoji}
            onChangeText={value => setFormEmoji(value)}
            style={styles.formInput}
          />
        </View>
        <TouchableOpacity style={styles.btnSave} onPress={saveTask}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <Text style={styles.textBtnSave}>Salvar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}