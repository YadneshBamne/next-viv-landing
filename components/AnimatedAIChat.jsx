// components/AnimatedAIChat.jsx
import { useEffect, useState, useRef, useCallback, useTransition } from 'react';
import Link from 'next/link';
import {
  ImageIcon,
  MonitorIcon,
  Sparkles,
  Atom,
  Paperclip,
  Mic,
  SendIcon,
  XIcon,
  LoaderIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Textarea from '@/components/Textarea';
import CommandSuggestionItem from '@/components/CommandSuggestionItem';
import TypingDots from '@/components/TypingDots';

function useAutoResizeTextarea({ minHeight, maxHeight }) {
  const textareaRef = useRef(null);

  const adjustHeight = useCallback(
    (reset) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

export default function AnimatedAIChat() {
  const [value, setValue] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [recentCommand, setRecentCommand] = useState(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });
  const commandPaletteRef = useRef(null);

  const commandSuggestions = [
    {
      icon: <ImageIcon className="w-4 h-4" />,
      label: 'Clone UI',
      description: 'Generate a UI from a screenshot',
      prefix: '/clone',
    },
    {
      icon: <Atom className="w-4 h-4" />,
      label: 'Research',
      description: 'Import a design from Figma',
      prefix: '/research',
    },
    {
      icon: <MonitorIcon className="w-4 h-4" />,
      label: 'Create Page',
      description: 'Generate a new web page',
      prefix: '/page',
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      label: 'Improve',
      description: 'Improve existing UI design',
      prefix: '/improve',
    },
  ];

  useEffect(() => {
    if (value.startsWith('/') && !value.includes(' ')) {
      setShowCommandPalette(true);
      const matchingSuggestionIndex = commandSuggestions.findIndex((cmd) =>
        cmd.prefix.startsWith(value)
      );
      if (matchingSuggestionIndex >= 0) {
        setActiveSuggestion(matchingSuggestionIndex);
      } else {
        setActiveSuggestion(-1);
      }
    } else {
      setShowCommandPalette(false);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const commandButton = document.querySelector('[data-command-button]');
      if (
        commandPaletteRef.current &&
        !commandPaletteRef.current.contains(target) &&
        !commandButton?.contains(target)
      ) {
        setShowCommandPalette(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (showCommandPalette) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSuggestion((prev) => (prev < commandSuggestions.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : commandSuggestions.length - 1));
      } else if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        if (activeSuggestion >= 0) {
          const selectedCommand = commandSuggestions[activeSuggestion];
          setValue(selectedCommand.prefix + ' ');
          setShowCommandPalette(false);
          setRecentCommand(selectedCommand.label);
          setTimeout(() => setRecentCommand(null), 3500);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setShowCommandPalette(false);
      }
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        handleSendMessage();
      }
    }
  };

  const handleSendMessage = () => {
    if (value.trim()) {
      startTransition(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setValue('');
          adjustHeight(true);
        }, 3000);
      });
    }
  };

  const handleAttachFile = () => {
    const mockFileName = `file-${Math.floor(Math.random() * 1000)}.pdf`;
    setAttachments((prev) => [...prev, mockFileName]);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const selectCommandSuggestion = (index) => {
    const selectedCommand = commandSuggestions[index];
    setValue(selectedCommand.prefix + ' ');
    setShowCommandPalette(false);
    setRecentCommand(selectedCommand.label);
    setTimeout(() => setRecentCommand(null), 2000);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto relative px-2">
      <motion.div
        className="space-y-10 sm:space-y-12 md:space-y-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-9xl font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/40 pb-1">
              VIV AI
            </h1>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
          <motion.p
            className="text-sm text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Secure, fast, and reliable AI chat experience
          </motion.p>
        </div>

        <motion.div
          className="relative backdrop-blur-2xl bg-white/[0.02] rounded-2xl border border-white/[0.05] shadow-2xl"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <AnimatePresence>
            {showCommandPalette && (
              <motion.div
                ref={commandPaletteRef}
                className="absolute left-4 right-4 bottom-full mb-2 backdrop-blur-xl bg-black/90 rounded-lg z-50 shadow-lg border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.15 }}
              >
                <div className="py-1 bg-black/95">
                  {commandSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={suggestion.prefix}
                      className={cn(
                        'flex items-center gap-2 px-9 py-2 text-xs transition-colors cursor-pointer',
                        activeSuggestion === index ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                      )}
                      onClick={() => selectCommandSuggestion(index)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center text-white/60">{suggestion.icon}</div>
                      <div className="font-medium">{suggestion.label}</div>
                      <div className="text-white/40 text-xs ml-1">{suggestion.prefix}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask ViV AI a question..."
              containerClassName="w-full"
              className={cn(
                'w-full px-4 py-3',
                'resize-none',
                'bg-transparent',
                'border-none',
                'text-white/90 text-sm',
                'focus:outline-none',
                'placeholder:text-white/20',
                'min-h-[60px]'
              )}
              style={{ overflow: 'hidden' }}
              showRing={false}
            />
          </div>

          <AnimatePresence>
            {attachments.length > 0 && (
              <motion.div
                className="px-4 pb-3 flex gap-2 flex-wrap"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {attachments.map((file, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-xs bg-white/[0.03] py-1.5 px-3 rounded-lg text-white/70"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <span>{file}</span>
                    <button
                      onClick={() => removeAttachment(index)}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <XIcon className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4 border-t border-white/[0.05] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={handleAttachFile}
                whileTap={{ scale: 0.94 }}
                className="p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group"
              >
                <Paperclip className="w-4 h-4" />
                <motion.span
                  className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="button-highlight"
                />
              </motion.button>
              <motion.button
                type="button"
                data-command-button
                whileTap={{ scale: 0.94 }}
                className={cn(
                  'p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group',
                  showCommandPalette && 'bg-white/10 text-white/90'
                )}
              >
                <Mic className="w-4 h-4" />
                <motion.span
                  className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="button-highlight"
                />
              </motion.button>
            </div>

            <Link href="https://chat.cosinv.com/">
              <motion.button
                type="button"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={isTyping || !value.trim()}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  'flex items-center gap-2 cursor-pointer',
                  value.trim()
                    ? 'bg-white text-[#0A0A0B] shadow-lg shadow-white/10'
                    : 'bg-white/[0.05] text-white/40'
                )}
              >
                {isTyping ? (
                  <LoaderIcon className="w-4 h-4 animate-[spin_2s_linear_infinite]" />
                ) : (
                  <SendIcon className="w-4 h-4" />
                )}
                <span>Send</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {commandSuggestions.map((suggestion, index) => (
            <motion.button
              key={suggestion.prefix}
              onClick={() => selectCommandSuggestion(index)}
              className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] hover:bg-white/[0.05] rounded-lg text-sm text-white/60 hover:text-white/90 transition-all relative group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {suggestion.icon}
              <span>{suggestion.label}</span>
              <motion.div
                className="absolute inset-0 border border-white/[0.05] rounded-lg"
                initial={false}
                animate={{ opacity: [0, 1], scale: [0.98, 1] }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isTyping && (
          <motion.div
            className="fixed bottom-8 left-1/2 mx-auto transform -translate-x-1/2 backdrop-blur-2xl bg-white/[0.02] rounded-full px-4 py-2 shadow-lg border border-white/[0.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-7 rounded-full bg-white/[0.05] flex items-center justify-center text-center">
                <span className="text-xs font-medium text-white/90 mb-0.5">VIV</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>Thinking</span>
                <TypingDots />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}