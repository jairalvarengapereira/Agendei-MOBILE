import { Alert, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./account.style.js";
import { useState } from "react";
import icon from "../../constants/icon.js";
import Botao from "../../components/botao/botao.jsx";
import api from "../../constants/api.js";
import { COLORs } from "../../constants/theme.js";

function Account(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteAccount() {
    try {
      const response = await api.post("/users", { name, email, password });
      if (response.data) {
        Alert.alert("Usuário criado com sucesso!");
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: COLORs.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView 
        contentContainerStyle={styles.container} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.headerArea}>
          <Image source={icon.logo} style={styles.logo} />
          <Text style={styles.subtitle}>Crie a sua conta gratuitamente</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formArea}>
          <View style={styles.containerInput}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              placeholder="Seu nome completo"
              placeholderTextColor={COLORs.textSecondary}
              style={styles.input}
              onChangeText={(texto) => setName(texto)}
            />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              placeholder="seu@email.com"
              placeholderTextColor={COLORs.textSecondary}
              style={styles.input}
              onChangeText={(texto) => setEmail(texto)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              placeholder="••••••••"
              placeholderTextColor={COLORs.textSecondary}
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(texto) => setPassword(texto)}
            />
          </View>

          <Botao text="Criar conta" onPress={ExecuteAccount} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem conta?</Text>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.footerLink}> Fazer login.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Account;