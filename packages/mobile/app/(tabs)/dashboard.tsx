import { api } from "~/convex/_generated/api";
import { useQuery } from "convex/react";
import { View } from "react-native";
import { Text } from '~/components/ui/text';

export default function Dashboard() {
  const tasks = useQuery(api.tasks.get);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl text-card-foreground font-semibold leading-none tracking-tight">Dashboard</Text>
      <Text className="text-sm text-muted-foreground" />
      {tasks?.map((item) => <Text key={item._id}>{item.text}</Text>)}
    </View>
  )
}
