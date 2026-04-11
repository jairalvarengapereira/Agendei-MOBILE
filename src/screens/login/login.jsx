import { Alert, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./login.style.js";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.js";
import icon from "../../constants/icon.js";
import Botao from "../../components/botao/botao.jsx";
import api from "../../constants/api.js";
import { COLORs } from "../../constants/theme.js";

function Login(props) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteLogin() {
    try {
      const response = await api.post("/users/login", { email, password });
      if (response.data) {
        api.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        setUser(response.data);
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
          <Text style={styles.subtitle}>Bem-vindo de volta</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formArea}>
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

          <Botao text="Entrar" onPress={ExecuteLogin} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem conta?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
            <Text style={styles.footerLink}> Criar conta agora.</Text>
          </TouchableOpacity>
        </View>

        {/* Copyright */}
        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>© 2026 Jair Alvarenga Pereira.</Text>
          <Text style={styles.copyrightText}>Todos os direitos reservados.</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Login;