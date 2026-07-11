import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileGrid from "../components/profile/ProfileGrid";

import LoaderMessage from "../components/shared/LoaderMessage";
import ErrorMessage from "../components/shared/ErrorMessage";

import userData from "../data/userData";
import { getCats } from "../services/catApi";

export default function ProfileScreen() {
    const navigation = useNavigation();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const data = await getCats();
            setPosts(data);
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoaderMessage />;
    }

    if (error) {
        return <ErrorMessage />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader user={userData} />

            <ProfileGrid
                posts={posts}
                navigation={navigation}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
});