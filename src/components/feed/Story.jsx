import { View, Text, Image, StyleSheet } from "react-native";
import Avatar from '../shared/Avatar'

export default function Story({ username, image }) {
    return (
        <View style={styles.container}>
            <View style={styles.storyBorder}>
                <Avatar
                    image={image}
                    size={60}
                />
            </View>

            <Text
                style={styles.username}
                numberOfLines={1}
            >
                {username}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 75,
        alignItems: "center",
        marginHorizontal: 6,
    },

    storyBorder: {
        width: 68,
        height: 68,
        borderRadius: 34,

        justifyContent: "center",
        alignItems: "center",

        borderWidth: 2.5,
        borderColor: "#E1306C",
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    username: {
        marginTop: 5,
        fontSize: 12,
        color: "#262626",
        width: 70,
        textAlign: "center",
    },
});