import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons
                    name="camera-outline"
                    size={28}
                    color="#000"
                />
            </TouchableOpacity>

            <Image
                source={require("../../../assets/Instagram Logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.rightIcons}>
                <TouchableOpacity>
                    <Feather
                        name="tv"
                        size={25}
                        color="#000"
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons
                        name="paper-plane-outline"
                        size={25}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#DBDBDB",
        backgroundColor: "#FFF",
    },

    logo: {
        width: 110,
        height: 40,
    },

    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 18,
    },
});