import React, { useState } from 'react';
import { ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import ImagemLogin from '@/src/assets/images/img-login.png';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Login() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true);
    setErrorMessage(null);

    if (values.email === 'test@example.com' && values.password === 'password123') {
      setTimeout(() => {
        setLoading(false);
        router.push({pathname: "/screens/Tabs/Home"});
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        setErrorMessage('E-mail ou senha inválidos');
      }, 1000);
    }
  };

  return (
    <ScrollView>
      <View className="flex-1 justify-center items-center mx-4 gap-10">
        <View>
          <Image source={ImagemLogin} className="w-96 h-96" />
        </View>
        <View className="flex flex-col items-center gap-2.5">
          <Text className="color-primary text-6xl font-bold">Bem-vindo</Text>
          <Text className="color-secondaryOne text-xl">Faça login na sua conta</Text>
        </View>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View className="flex flex-col gap-4">
              <Input
                nameClass="border rounded w-96 h-14 px-2"
                icon="mail"
                iconSize={20}
                iconColor="#000000"
                label="E-mail"
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                nameClassText="color-secondaryTwo"
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 text-sm">{errors.email}</Text>
              )}
              <Input
                nameClass="border rounded w-96 h-14 px-2"
                icon="lock-closed"
                iconSize={20}
                iconColor="#000000"
                label="Senha"
                name="password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                nameClassText="color-secondaryTwo"
              />
              {touched.password && errors.password && (
                <Text className="text-red-500 text-sm">{errors.password}</Text>
              )}

              {errorMessage && (
                <Text className="text-red-500 text-sm">{errorMessage}</Text>
              )}

              <Button
                name="Entrar"
                nameClass="bg-primary flex flex-row items-center justify-center rounded-full w-96 h-16"
                nameClassText="color-baseOne uppercase"
                onPress={handleSubmit as () => void}
              />

              {loading && <ActivityIndicator size="small" color="#0000ff" />}
            </View>
          )}
        </Formik>

        <View className="flex flex-row gap-2">
          <Text className="color-secondaryOne text-lg">Não tem uma conta ainda?</Text>
          <Button name="Cadastre-se" nameClassText="border-b" />
        </View>
      </View>
    </ScrollView>
  );
}
