import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "Eden Quest",
  slug: "eden-quest",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.communione.edenquest",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
    package: "com.communione.edenquest",
  },
  extra: {
    eas: {
      projectId: "2760fec8-3c7b-4d61-b8d8-71a897dc308d",
    },
    apiUrl: process.env.API_URL,
    clerkPublishableKey:
      "pk_test_YXJ0aXN0aWMtbGFjZXdpbmctMjcuY2xlcmsuYWNjb3VudHMuZGV2JA",
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
