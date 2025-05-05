import { View } from 'react-native'
import React from 'react'
import { CircleSmall } from '~/lib/icons'
import { Text } from '~/components/ui/text'

const UserCurrency = ({
  type,
  value,
}: {
  type: 'moment' | 'score'
  value?: number | null
}) => {
  const color = type === 'moment' ? '#2563eb' : '#facc15'

  return (
    <View className="flex flex-row items-center justify-start gap-1">
      <CircleSmall color={color} fill={color} size="16px" />
      <Text>{value ?? 0}</Text>
    </View>
  )
}

export default UserCurrency
