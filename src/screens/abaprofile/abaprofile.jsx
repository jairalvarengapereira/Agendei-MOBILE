import { Alert, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./abaprofile.style";
import api from "../../constants/api";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Botao from "../../components/botao/botao";
import { AuthContext } from "../../contexts/auth.js";

function formatPhone(value) {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 6) return `(${numbers.slice(0,2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0,2)}) ${numbers.slice(2,7)}-${numbers.slice(7,11)}`;
}

function formatCep(value) {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 5) return numbers;
  return `${numbers.slice(0,5)}-${numbers.slice(5,8)}`;
}

function AbaProfile(props) {
  const { setUser, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [cep, setCep] = useState("");
  const [logr, setLogr] = useState("");
  const [num, setNum] = useState("");
  const [compl, setCompl] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);
  const [loading, setLoading] = useState(true);

  async function LoadProfile() {
    try {
      setLoading(true);
      const response = await api.get("/users/profile/");
      if (response.data) {
        setName(response.data.name || "");
        setEmail(response.data.email || "");
        setFone(response.data.fone || "");
        setCep(response.data.cep || "");
        setLogr(response.data.logr || "");
        setNum(response.data.num || "");
        setCompl(response.data.compl || "");
        setBairro(response.data.bairro || "");
        setCidade(response.data.cidade || "");
        setUf(response.data.uf || "");
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleEditMode() {
    await LoadProfile();
    setEditMode(true);
  }

  async function searchCep() {
    if (cep.length < 8) return;
    
    setLoadingCep(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data && !response.data.erro) {
        setLogr(response.data.logradouro || "");
        setBairro(response.data.bairro || "");
        setCidade(response.data.localidade || "");
        setUf(response.data.uf || "");
      }
    } catch (error) {
      // Silencioso - não mostra erro para o usuário
    } finally {
      setLoadingCep(false);
    }
  }

  async function SaveProfile() {
    try {
      await api.put(`/users/${user.id_user}`, {
        name,
        fone,
        cep,
        logr,
        num,
        compl,
        bairro,
        cidade,
        uf
      });
      Alert.alert("Perfil atualizado com sucesso!");
      setEditMode(false);
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  }

  async function LogOut() {
    api.defaults.headers.common["Authorization"] = "";
    setUser({});
  }

  useEffect(() => {
    LoadProfile();
  }, []);

  if (editMode) {
    return (
      <KeyboardAvoidingView 
        style={{ flex: 1, backgroundColor: COLORs.background }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={true}
        >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Editar Perfil</Text>
        </View>

        <View style={styles.editItem}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.editItem}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={fone}
            onChangeText={(text) => setFone(formatPhone(text))}
            placeholder="(31) 99999-9999"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>

        <View style={styles.editItem}>
          <Text style={styles.label}>CEP {loadingCep && "(buscando...)"}</Text>
          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={(text) => setCep(formatCep(text))}
            placeholder="30100-000"
            placeholderTextColor="#666"
            keyboardType="numeric"
            onEndEditing={searchCep}
            maxLength={9}
          />
        </View>

        <View style={styles.editItem}>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.input}
            value={logr}
            onChangeText={setLogr}
            placeholder="Rua, Avenida..."
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.editItem, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Número</Text>
            <TextInput
              style={styles.input}
              value={num}
              onChangeText={setNum}
              placeholder="Nº"
              placeholderTextColor="#666"
            />
          </View>
          <View style={[styles.editItem, { flex: 1 }]}>
            <Text style={styles.label}>Complemento</Text>
            <TextInput
              style={styles.input}
              value={compl}
              onChangeText={setCompl}
              placeholder="Apto, sala..."
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <View style={styles.editItem}>
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.input}
            value={bairro}
            onChangeText={setBairro}
            placeholder="Bairro"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.editItem, { flex: 2, marginRight: 8 }]}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              value={cidade}
              onChangeText={setCidade}
              placeholder="Cidade"
              placeholderTextColor="#666"
            />
          </View>
          <View style={[styles.editItem, { flex: 0.5 }]}>
            <Text style={styles.label}>UF</Text>
            <TextInput
              style={styles.input}
              value={uf}
              onChangeText={setUf}
              placeholder="MG"
              placeholderTextColor="#666"
              autoCapitalize="characters"
              maxLength={2}
            />
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelBtn} onPress={() => setEditMode(false)}>
            <Text style={styles.cancelBtnText}>Cancelar</Text>
          </TouchableOpacity>
          <View style={styles.saveBtn}>
            <Botao text="Salvar" onPress={SaveProfile} />
          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleEditMode}>
        <Text style={styles.editButtonText}>✏️ Editar</Text>
      </TouchableOpacity>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Nome</Text>
        <Text style={styles.itemText}>{name}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>E-mail</Text>
        <Text style={styles.itemText}>{email}</Text>
      </View>

      {fone ? (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Telefone</Text>
          <Text style={styles.itemText}>{formatPhone(fone)}</Text>
        </View>
      ) : null}

      {cep ? (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>CEP</Text>
          <Text style={styles.itemText}>{formatCep(cep)}</Text>
        </View>
      ) : null}

      {logr ? (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Endereço</Text>
          <Text style={styles.itemText}>
            {logr}, {num} {compl ? `- ${compl}` : ''} - {bairro}
          </Text>
          <Text style={styles.itemText}>{cidade}/{uf}</Text>
        </View>
      ) : null}

      <View style={[styles.item, styles.logoutArea]}>
        <Botao text="Desconectar" theme="danger" onPress={LogOut} />
      </View>
    </View>
  );
}

export default AbaProfile;