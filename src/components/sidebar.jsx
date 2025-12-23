'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon, PlusIcon, TrashIcon, MessageSquareIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Sidebar({ currentConversationId, onNewChat, onLoadConversation, onDeleteConversation, refreshTrigger }) {
  const [conversations, setConversations] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadConversations();
  }, [refreshTrigger]);

  useEffect(() => {
    if (open) {
      loadConversations();
    }
  }, [open]);

  const loadConversations = () => {
    const stored = localStorage.getItem('conversations');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConversations(parsed);
      } catch (e) {
        setConversations([]);
      }
    } else {
      setConversations([]);
    }
  };

  const handleDelete = (id) => {
    const stored = localStorage.getItem('conversations');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const filtered = parsed.filter(c => c.id !== id);
        localStorage.setItem('conversations', JSON.stringify(filtered));
        setConversations(filtered);
        onDeleteConversation(id);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleNewChat = () => {
    setOpen(false);
    onNewChat();
  };

  const handleLoadConversation = (conversation) => {
    setOpen(false);
    onLoadConversation(conversation);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Conversations</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-2">
          <Button onClick={handleNewChat} className="w-full justify-start gap-2">
            <PlusIcon className="h-4 w-4" />
            New Chat
          </Button>
          <ScrollArea className="h-[calc(100vh-150px)] mt-4">
            <div className="flex flex-col gap-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    currentConversationId === conversation.id
                      ? 'bg-secondary'
                      : 'hover:bg-secondary/50'
                  } cursor-pointer transition-colors`}
                >
                  <div
                    className="flex items-center gap-2 flex-1 min-w-0"
                    onClick={() => handleLoadConversation(conversation)}
                  >
                    <MessageSquareIcon className="h-4 w-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{conversation.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(conversation.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(conversation.id);
                    }}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {conversations.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No conversations yet
                </p>
              )}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}

