import { useAuthActions } from '@convex-dev/auth/react'
import { useState } from 'react'
import { Text, Button, TextInput, View } from 'react-native'
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { Redirect } from 'expo-router'

export default function SignIn() {
  const { signIn } = useAuthActions()
  const [step, setStep] = useState<'signUp' | 'signIn'>('signIn')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View className="flex-1 items-center justify-center">
      <AuthLoading>
        <Text>Spinner</Text>
      </AuthLoading>
      <Authenticated>
        <Redirect href="/dashboard" />
      </Authenticated>
      <Unauthenticated>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          inputMode="email"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button
          title={step === 'signIn' ? 'Sign in' : 'Sign up'}
          onPress={() => {
            void signIn('password', { email, password, flow: step })
          }}
        />
        <Button
          title={step === 'signIn' ? 'Sign up instead' : 'Sign in instead'}
          onPress={() => setStep(step === 'signIn' ? 'signUp' : 'signIn')}
        />
      </Unauthenticated>
    </View>
  )
}
