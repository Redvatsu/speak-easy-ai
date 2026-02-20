import { useState, useRef, useEffect, useCallback } from "react";
import {
  type Language,
  type Mode,
  type Message,
  type QuizState,
  validateInput,
  getWelcomeMessage,
  getLanguageLabel,
  startVocabQuiz,
  checkVocabAnswer,
  getGrammarTip,
  startTranslateQuiz,
  checkTranslateAnswer,
  getChatResponse,
  ALL_LANGUAGES,
  ALL_MODES,
} from "@/lib/languageEngine";
import ChatMessage from "@/components/ChatMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const initialQuizState: QuizState = {
  currentItem: null,
  currentPhrase: null,
  score: 0,
  total: 0,
  usedIndices: [],
};

let msgId = 0;
const makeMsg = (text: string, sender: "user" | "bot"): Message => ({
  id: String(++msgId),
  text,
  sender,
});

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([makeMsg(getWelcomeMessage(), "bot")]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<Language | null>(null);
  const [mode, setMode] = useState<Mode | null>(null);
  const [quiz, setQuiz] = useState<QuizState>(initialQuizState);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBot = useCallback((text: string) => {
    setMessages((prev) => [...prev, makeMsg(text, "bot")]);
  }, []);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setMode(null);
    setQuiz(initialQuizState);
    setMessages((prev) => [
      ...prev,
      makeMsg(getLanguageLabel(lang), "user"),
      makeMsg(`Great choice! You're learning ${getLanguageLabel(lang)}.\n\nNow pick a practice mode:`,"bot"),
    ]);
  };

  const selectMode = (m: Mode) => {
    if (!language) return;
    setMode(m);
    setQuiz(initialQuizState);
    setMessages((prev) => [...prev, makeMsg(`${ALL_MODES.find((x) => x.id === m)?.icon} ${ALL_MODES.find((x) => x.id === m)?.label}`, "user")]);

    if (m === "vocab") {
      const { message, newState } = startVocabQuiz(language, initialQuizState);
      setQuiz(newState);
      addBot(message);
    } else if (m === "grammar") {
      addBot(getGrammarTip(language));
    } else if (m === "translate") {
      const { message, newState } = startTranslateQuiz(language, initialQuizState);
      setQuiz(newState);
      addBot(message);
    } else {
      addBot(`💬 Free chat mode! Type anything and I'll respond with useful ${getLanguageLabel(language)} phrases and tips.\n\nType **"back"** anytime to switch modes.`);
    }
  };

  const handleSend = () => {
    const validation = validateInput(input);
    if (validation) {
      addBot(validation);
      return;
    }

    const text = input.trim();
    setInput("");
    setMessages((prev) => [...prev, makeMsg(text, "user")]);

    // Handle "back" command
    if (text.toLowerCase() === "back") {
      setMode(null);
      setQuiz(initialQuizState);
      addBot("Sure! Pick a mode:");
      return;
    }

    // Handle "switch" to change language
    if (text.toLowerCase() === "switch") {
      setLanguage(null);
      setMode(null);
      setQuiz(initialQuizState);
      addBot("Pick a new language:");
      return;
    }

    if (!language || !mode) {
      addBot("Please select a language and mode first using the buttons below! 👇");
      return;
    }

    if (mode === "vocab") {
      if (quiz.currentItem) {
        const { message, newState } = checkVocabAnswer(text, quiz);
        setQuiz(newState);
        addBot(message);
        // Auto-next question
        setTimeout(() => {
          const { message: next, newState: ns } = startVocabQuiz(language, newState);
          setQuiz(ns);
          addBot(next);
        }, 1200);
      } else {
        const { message, newState } = startVocabQuiz(language, { ...quiz, usedIndices: [] });
        setQuiz(newState);
        addBot(message);
      }
    } else if (mode === "grammar") {
      if (text.toLowerCase() === "more") {
        addBot(getGrammarTip(language));
      } else {
        addBot(`I hear you! Here's what I know:\n\n${getGrammarTip(language).replace("📝 **Grammar Tip:**\n\n", "")}\n\nType **"more"** for another tip.`);
      }
    } else if (mode === "translate") {
      if (quiz.currentPhrase) {
        const { message, newState } = checkTranslateAnswer(text, quiz);
        setQuiz(newState);
        addBot(message);
        setTimeout(() => {
          const { message: next, newState: ns } = startTranslateQuiz(language, newState);
          setQuiz(ns);
          addBot(next);
        }, 1200);
      } else {
        const { message, newState } = startTranslateQuiz(language, { ...quiz, usedIndices: [] });
        setQuiz(newState);
        addBot(message);
      }
    } else {
      addBot(getChatResponse(language));
    }
  };

  const showLangPicker = !language;
  const showModePicker = language && !mode;

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b bg-card">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <h1 className="text-lg font-semibold text-card-foreground">Language Buddy</h1>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {language && (
            <button onClick={() => { setLanguage(null); setMode(null); setQuiz(initialQuizState); addBot("Pick a new language:"); }}
              className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground hover:opacity-80 transition-opacity">
              {getLanguageLabel(language)}
            </button>
          )}
          {mode && (
            <button onClick={() => { setMode(null); setQuiz(initialQuizState); addBot("Pick a mode:"); }}
              className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground hover:opacity-80 transition-opacity">
              {ALL_MODES.find((m) => m.id === mode)?.icon} {ALL_MODES.find((m) => m.id === mode)?.label}
            </button>
          )}
          {quiz.total > 0 && (
            <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
              {quiz.score}/{quiz.total}
            </span>
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Language picker */}
        {showLangPicker && (
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {ALL_LANGUAGES.map((lang) => (
              <Button key={lang} variant="outline" size="sm" onClick={() => selectLanguage(lang)}>
                {getLanguageLabel(lang)}
              </Button>
            ))}
          </div>
        )}

        {/* Mode picker */}
        {showModePicker && (
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {ALL_MODES.map((m) => (
              <Button key={m.id} variant="outline" size="sm" onClick={() => selectMode(m.id)}>
                {m.icon} {m.label}
              </Button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t bg-card px-4 py-3">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode ? "Type your answer..." : "Select a language & mode above"}
            className="flex-1"
          />
          <Button type="submit" size="icon" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-1.5 text-center">
          Type <strong>"back"</strong> to switch modes · <strong>"switch"</strong> to change language
        </p>
      </div>
    </div>
  );
}
