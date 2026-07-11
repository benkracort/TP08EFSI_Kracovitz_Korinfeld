import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/layout/Header";
import Stories from "../components/feed/Stories";
import Feed from "../components/feed/Feed";

import LoaderMessage from "../components/shared/LoaderMessage";
import ErrorMessage from "../components/shared/ErrorMessage";

import { getCats } from "../services/catApi";

export default function HomeScreen() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const data = await getCats();
            setPosts(data);
        } catch (err) {
            setError(true);
            console.log(err);
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
            <Header />

            <Stories posts={posts} />

            <Feed posts={posts} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
});