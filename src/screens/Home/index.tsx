import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View, FlatList } from "react-native"
import Ionicons from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { useAppContext } from "../../context/hook";
import { Task as ITask } from "../../interfaces/task";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { HeaderTask } from "../../components/Header";
import { styles } from "../../components/generics/styles";
import { stylesHome } from "../../components/home/styles";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [isLoading, setIsLoading] = useState(false)

  const { tasks, loadTasks } = useAppContext()

  const deleteTask = async (id: string) => {
    setIsLoading(true)
    await deleteDoc(doc(db, "tasks", id))
      .then(() => {
        loadTasks()
      })
      .catch(error => {
        alert('Falha ao excluir task!')
      })
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <HeaderTask title="OxeTask" />
      <FlatList
        refreshing={isLoading}
        onRefresh={() => {
          loadTasks()
        }}
        style={{ paddingTop: 20, maxHeight: '72%' }}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }: { item: ITask }) => (
          <View style={[stylesHome.containerTasks, styles.shadowProp]}>
            <BouncyCheckbox
              size={28}
              fillColor="#17E0BC"
              unfillColor="#FFFFFF"
              innerIconStyle={{ borderWidth: 3, borderColor: '#e1e1e1' }}
              isChecked={item.concluded}
              onPress={(isChecked: boolean) => {}}
            />
            <View style={stylesHome.containerDescription}>
              <Text>{item.emoji}</Text>
              <Text 
                style={[
                  stylesHome.textDescription,
                  {
                    textDecorationLine: item.concluded ? 'line-through' : 'none',
                  }
                ]}
              >
                {item.description}
              </Text>
            </View>

            <View style={stylesHome.containerIcons}>
              <TouchableOpacity
                style={[stylesHome.btnDeleteTasks, { backgroundColor: '#17E0BC' }]}
                onPress={() => {
                  navigation.navigate('Task', {
                    description: item.description,
                    taskId: item.taskId,
                    emoji: item.emoji,
                  })
                }}
              >
                <Ionicons name="pencil-square-o" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[stylesHome.btnDeleteTasks, { borderTopRightRadius: 20, borderBottomRightRadius: 20, }]}
                onPress={() => {
                  deleteTask(item.taskId)
                }}
              >
                <Ionicons name="trash" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={[stylesHome.btnNewTask, styles.shadowProp]}
        onPress={() => navigation.navigate('Task', {
          taskId: 'new',
        })}
      >
        <Text style={stylesHome.btnIcon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

