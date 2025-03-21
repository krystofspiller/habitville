import { useAuthActions } from '@convex-dev/auth/react'
import { useState } from 'react'
import { View } from 'react-native'
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { Redirect } from 'expo-router'
import { Input } from '~/components/ui/input'
import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'

export default function SignIn() {
  // TODO: handle errors like incorrect password
  const { signIn } = useAuthActions()
  const [step, setStep] = useState<'signUp' | 'signIn'>('signIn')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View className="flex-1 gap-2 items-center justify-center">
      <AuthLoading>
        <Text>Spinner</Text>
      </AuthLoading>
      <Authenticated>
        <Redirect href="/actions" />
      </Authenticated>
      <Unauthenticated>
        <Text variant="h1">Sign in</Text>
        <Input
          className="w-80"
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          inputMode="email"
          autoCapitalize="none"
        />
        <Input
          className="w-80"
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button
          onPress={() => {
            void signIn('password', { email, password, flow: step })
          }}
        >
          <Text>{step === 'signIn' ? 'Sign in' : 'Sign up'}</Text>
        </Button>
        <Button
          variant="ghost"
          onPress={() => setStep(step === 'signIn' ? 'signUp' : 'signIn')}
        >
          <Text>
            {step === 'signIn' ? 'Sign up instead' : 'Sign in instead'}
          </Text>
        </Button>
      </Unauthenticated>
    </View>
  )
}
