import React from "react"
import { Text, TouchableOpacity, View, FlatList } from "react-native"
import Ionicons from '@expo/vector-icons/FontAwesome';
import { styles } from "../../components/task/styles"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { useAppContext } from "../../context/hook";
import { Task as ITask } from "../../interfaces/task";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function Task() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const { tasks } = useAppContext()

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id))
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }: { item: ITask }) => (
          <View style={styles.containerTasks}>
            <Text 
              style={styles.descriptionTask}
              onPress={() => {
                navigation.navigate('Details', {
                  taskId: item.taskId,
                  description: item.description,
                })
              }}
            >
              {item.description}
            </Text>
            <TouchableOpacity
              style={styles.btnDeleteTasks}
              onPress={() => {
                deleteTask(item.taskId)
              }}
            >
              <Ionicons name="trash" size={25} color="#DB4437" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={[styles.btnNewTask, styles.shadowProp]}
        onPress={() => navigation.navigate('NewTask')}
      >
        <Text style={styles.btnIcon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

