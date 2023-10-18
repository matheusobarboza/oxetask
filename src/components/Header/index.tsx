import { View, Text } from "react-native"
import { styles } from "../generics/styles"

interface IProps {
  title: string
}

export const HeaderTask = ({ title }: IProps) => {
  return (
    <View style={styles.headerTask}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}