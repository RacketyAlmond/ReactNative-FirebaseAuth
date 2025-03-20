import React, { useState } from "react";
import { View } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import AuthScreen from "./src/screens/AuthScreen";
import BirthdateScreen from "./src/screens/BirthdateScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

interface User {
    uid: string;
    email: string;
}

const App = () => {
    const [screen, setScreen] = useState<"Auth" | "Birthdate" | "Profile">("Auth");
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <AuthProvider>
            <View style={{ flex: 1 }}>
                {screen === "Auth" && <AuthScreen onAuthenticated={(user) => { setCurrentUser(user); setScreen("Birthdate"); }} />}
                {screen === "Birthdate" && <BirthdateScreen user={currentUser!} onComplete={() => setScreen("Profile")} />}
                {screen === "Profile" && <ProfileScreen user={currentUser!} />}
            </View>
        </AuthProvider>
    );
};

export default App;
