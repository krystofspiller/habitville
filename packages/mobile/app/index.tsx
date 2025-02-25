import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.get);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {tasks?.map(({ _id, text }) => <Text key={_id}>{text}</Text>)}
    </View>
  )
}
