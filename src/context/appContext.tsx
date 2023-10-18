'use client'

import { createContext, useEffect, useState } from "react"
import { db } from '../services/firebaseConnection'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamsList } from "../routes/app.routes"
import { Task } from "../interfaces/task"

interface IAppContext {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  loadTasks: () => void
}

interface IProps {
  children: React.ReactNode
}

export const AppContext = createContext({} as IAppContext)

export const AppProvider = ({ children }: IProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const tasksList: Task[] = []
    const tasksCollection = collection(db, 'tasks')
    const tasksSnapshot = await getDocs(tasksCollection)
    
    tasksSnapshot.forEach((doc) => {
      const data = doc.data()
      tasksList.push({ taskId: doc.id, description: data.description || '', emoji: data.emoji || '', concluded: data.concluded })
    })

    setTasks(tasksList)
  }

  return (
    <AppContext.Provider value={{
      tasks,
      setTasks,
      loadTasks,
    }}>
      {children}
    </AppContext.Provider>
  )
}