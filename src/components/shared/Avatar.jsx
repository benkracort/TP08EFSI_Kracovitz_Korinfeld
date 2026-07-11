import { Image, StyleSheet } from "react-native";

export default function Avatar({ image, size = 40 }) {
    return (
        <Image
            source={{ uri: image }}
            style={[
                styles.avatar,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 0.5,
        borderColor: "#DBDBDB",
    },
});