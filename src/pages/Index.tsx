import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import TypingIndicator from "@/components/TypingIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Globe, Flame, RotateCcw } from "lucide-react";

const initialQuizState: QuizState = {
  currentItem: null,
  currentPhrase: null,
  score: 0,
  total: 0,
  streak: 0,
  bestStreak: 0,
  usedIndices: [],
  difficulty: "easy",
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
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const addBotWithDelay = useCallback((text: string, delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, makeMsg(text, "bot")]);
    }, delay);
  }, []);

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
    ]);
    addBotWithDelay(`Great choice! You're learning ${getLanguageLabel(lang)}.\n\nNow pick a practice mode:`);
  };

  const selectMode = (m: Mode) => {
    if (!language) return;
    setMode(m);
    setQuiz(initialQuizState);
    const modeObj = ALL_MODES.find((x) => x.id === m);
    setMessages((prev) => [...prev, makeMsg(`${modeObj?.icon} ${modeObj?.label}`, "user")]);

    if (m === "vocab") {
      const { message, newState } = startVocabQuiz(language, initialQuizState);
      setQuiz(newState);
      addBotWithDelay(message);
    } else if (m === "grammar") {
      addBotWithDelay(getGrammarTip(language));
    } else if (m === "translate") {
      const { message, newState } = startTranslateQuiz(language, initialQuizState);
      setQuiz(newState);
      addBotWithDelay(message);
    } else {
      addBotWithDelay(`💬 Free chat mode! Type anything and I'll respond with useful ${getLanguageLabel(language)} phrases and tips.\n\nType **"back"** anytime to switch modes.`);
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

    if (text.toLowerCase() === "back") {
      setMode(null);
      setQuiz(initialQuizState);
      addBotWithDelay("Sure! Pick a mode:");
      return;
    }

    if (text.toLowerCase() === "switch") {
      setLanguage(null);
      setMode(null);
      setQuiz(initialQuizState);
      addBotWithDelay("Pick a new language:");
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
        addBotWithDelay(message, 400);
        setTimeout(() => {
          const { message: next, newState: ns } = startVocabQuiz(language, newState);
          setQuiz(ns);
          addBotWithDelay(next, 800);
        }, 1400);
      } else {
        const { message, newState } = startVocabQuiz(language, { ...quiz, usedIndices: [] });
        setQuiz(newState);
        addBotWithDelay(message);
      }
    } else if (mode === "grammar") {
      if (text.toLowerCase() === "more") {
        addBotWithDelay(getGrammarTip(language));
      } else {
        addBotWithDelay(`I hear you! Here's what I know:\n\n${getGrammarTip(language).replace("📝 **Grammar Tip:**\n\n", "")}\n\nType **"more"** for another tip.`);
      }
    } else if (mode === "translate") {
      if (quiz.currentPhrase) {
        const { message, newState } = checkTranslateAnswer(text, quiz);
        setQuiz(newState);
        addBotWithDelay(message, 400);
        setTimeout(() => {
          const { message: next, newState: ns } = startTranslateQuiz(language, newState);
          setQuiz(ns);
          addBotWithDelay(next, 800);
        }, 1400);
      } else {
        const { message, newState } = startTranslateQuiz(language, { ...quiz, usedIndices: [] });
        setQuiz(newState);
        addBotWithDelay(message);
      }
    } else {
      addBotWithDelay(getChatResponse(language));
    }
  };

  const showLangPicker = !language;
  const showModePicker = language && !mode;
  const scorePercent = quiz.total > 0 ? Math.round((quiz.score / quiz.total) * 100) : 0;

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-base font-bold text-card-foreground leading-tight">Language Buddy</h1>
            {language && (
              <p className="text-xs text-muted-foreground">{getLanguageLabel(language)} {mode && `· ${ALL_MODES.find((m) => m.id === mode)?.label}`}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {quiz.streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold"
            >
              <Flame className="w-3.5 h-3.5" />
              {quiz.streak}
            </motion.div>
          )}
          {quiz.total > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${scorePercent}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {quiz.score}/{quiz.total}
              </span>
            </div>
          )}
          {language && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                setLanguage(null);
                setMode(null);
                setQuiz(initialQuizState);
                addBot("Pick a new language:");
              }}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <AnimatePresence>
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </AnimatePresence>

        {/* Language picker */}
        {showLangPicker && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mt-3 justify-center"
          >
            {ALL_LANGUAGES.map((lang) => (
              <Button
                key={lang}
                variant="outline"
                size="sm"
                onClick={() => selectLanguage(lang)}
                className="rounded-xl border-border/80 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
              >
                {getLanguageLabel(lang)}
              </Button>
            ))}
          </motion.div>
        )}

        {/* Mode picker */}
        {showModePicker && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-2 mt-3 max-w-xs mx-auto"
          >
            {ALL_MODES.map((m) => (
              <Button
                key={m.id}
                variant="outline"
                onClick={() => selectMode(m.id)}
                className="rounded-xl h-auto py-3 flex-col gap-1 border-border/80 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
              >
                <span className="text-xl">{m.icon}</span>
                <span className="text-xs font-medium">{m.label}</span>
              </Button>
            ))}
          </motion.div>
        )}

        <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border/60 bg-card/80 backdrop-blur-sm px-4 py-3">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode ? "Type your answer..." : "Select a language & mode above"}
            className="flex-1 rounded-xl bg-background border-border/60"
          />
          <Button type="submit" size="icon" className="shrink-0 rounded-xl">
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-[11px] text-muted-foreground mt-1.5 text-center">
          <strong>"back"</strong> switch modes · <strong>"switch"</strong> change language
        </p>
      </div>
    </div>
  );
}
