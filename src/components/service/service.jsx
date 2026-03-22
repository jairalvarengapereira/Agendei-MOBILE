import { View, Text } from "react-native";
import Botao from "../botao/botao";
import { styles } from "./service.style";

function Service(props){
  return <View style={styles.service}>
    <View style={styles.containerText}>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.price}>
        {
          new Intl.NumberFormat("pt-br", {style:"currency",currency:"BRL"}).format(props.price)
        }
      </Text>
    </View>

    <View style={styles.containerButton}>
      <Botao text='Agendar' onPress={() => props.onPress(props.id_service)} ></Botao>
    </View>
  </View>
}

export default Service;