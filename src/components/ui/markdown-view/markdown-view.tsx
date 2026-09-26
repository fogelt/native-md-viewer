import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

interface MarkdownViewProps {
  content: string;
  className?: string;
}

const styles = {
  body: {
    color: "#27272a",
    fontSize: 16,
    lineHeight: 24,
  },
  heading1: {
    color: "#18181b",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700" as const,
    marginTop: 12,
    marginBottom: 12,
  },
  heading2: {
    color: "#18181b",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700" as const,
    marginTop: 10,
    marginBottom: 10,
  },
  heading3: {
    color: "#18181b",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "700" as const,
    marginTop: 8,
    marginBottom: 8,
  },
  paragraph: {
    color: "#27272a",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 0,
    marginBottom: 10,
  },
  bullet_list: {
    marginTop: 0,
    marginBottom: 8,
  },
  ordered_list: {
    marginTop: 0,
    marginBottom: 8,
  },
  list_item: {
    marginBottom: 4,
  },
  blockquote: {
    borderLeftColor: "#d4d4d8",
    borderLeftWidth: 4,
    paddingLeft: 12,
    marginVertical: 8,
  },
  code_block: {
    backgroundColor: "#18181b",
    color: "#f4f4f5",
    padding: 12,
    borderRadius: 8,
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 8,
  },
  code_inline: {
    backgroundColor: "#f4f4f5",
    color: "#27272a",
    fontFamily: "monospace",
    paddingHorizontal: 4,
  },
  link: {
    color: "#2563eb",
  },
  strong: {
    fontWeight: "700" as const,
  },
  em: {
    fontStyle: "italic" as const,
  },
  hr: {
    backgroundColor: "#e4e4e7",
    height: 1,
    marginVertical: 12,
  },
};

export function MarkdownView({
  content,
  className,
}: MarkdownViewProps) {
  return (
    <ScrollView
      className={`flex-1 ${className ?? ""}`}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator
      nestedScrollEnabled
    >
      <Markdown style={styles}>{content}</Markdown>
    </ScrollView>
  );
}