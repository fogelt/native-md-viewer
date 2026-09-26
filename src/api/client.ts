import { Configuration, MarkdownApi } from "@/api";

const config = new Configuration({
  basePath:
    process.env.EXPO_PUBLIC_API_BASE_URL ||
    "http://localhost:8080",
});

export const markdownApi = new MarkdownApi(config);