import { Alert, View, Text } from "react-native";
import { styles } from "./abaprofile.style";
import api from "../../constants/api";
import { useContext, useState, useEffect } from "react";
import Botao from "../../components/botao/botao";
import { AuthContext } from "../../contexts/auth.js";

function AbaProfile() {
  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function LoadProfile() {
    try {
      const response = await api.get("/users/profile/");
      if (response.data?.name) {
        setName(response.data.name);
        setEmail(response.data.email);
      }
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { marginBottom: 20 }]}>Meu Perfil</Text>
      </View>

      {/* Nome */}
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>{name}</Text>
      </View>

      {/* Email */}
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={[styles.item, styles.logoutArea]}>
        <Botao text="Desconectar" theme="danger" onPress={LogOut} />
      </View>
    </View>
  );
}

export default AbaProfile;