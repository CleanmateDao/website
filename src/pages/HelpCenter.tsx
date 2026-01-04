import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Wallet,
  MapPin,
  Trophy,
  Users,
  Settings,
  ChevronRight,
  Mail,
  Flame,
  ArrowLeft,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

type CategoryKey =
  | "Getting Started"
  | "Cleanups"
  | "Streaks"
  | "Rewards"
  | "Wallet"
  | "Account";

const categories: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: CategoryKey;
  description: string;
  count: number;
}[] = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "New to CleanMate? Start here",
    count: 8,
  },
  {
    icon: MapPin,
    title: "Cleanups",
    description: "Organizing & joining events",
    count: 12,
  },
  {
    icon: Flame,
    title: "Streaks",
    description: "Daily sustainable actions",
    count: 6,
  },
  {
    icon: Trophy,
    title: "Rewards",
    description: "B3TR tokens & earnings",
    count: 6,
  },
  {
    icon: Wallet,
    title: "Wallet",
    description: "Connecting & managing wallets",
    count: 5,
  },
  {
    icon: Settings,
    title: "Account",
    description: "Profile & settings",
    count: 9,
  },
];

const articles: { title: string; category: CategoryKey; content: string }[] = [
  {
    title: "How to organize your first cleanup",
    category: "Getting Started",
    content:
      'To organize your first cleanup:\n\n1. Navigate to the Dashboard and click "Organize Cleanup"\n2. Fill in basic details: title, description, and category\n3. Set the location using the interactive map\n4. Choose a date and time\n5. Add optional cover images\n6. Submit your event for others to discover\n\nOnce published, participants can apply to join your cleanup. You\'ll be notified of new applications and can accept or reject them.',
  },
  {
    title: "Recording your first streak video or photo",
    category: "Streaks",
    content:
      'Recording a streak is simple:\n\n1. Open the Streaks page on your mobile device\n2. Tap "New Streak" to start\n3. Click on the tips icon to see the tips for the streak\n4. Press and hold the record button or take a photo\n5. Record for up to 5 seconds while performing your sustainable action\n6. Preview and submit your video or photo\n\nYour streak will be reviewed by moderators within 24-48 hours.',
  },
  {
    title: "Understanding B3TR token rewards",
    category: "Rewards",
    content:
      "B3TR tokens are CleanMate's reward currency:\n\n• Cleanup organizers earn 50 B3TR per completed event\n• Additional 10 B3TR per verified participant\n• Participants earn based on contribution and ratings\n• Streaks earn varying amounts when approved\n\nRewards become available after moderator verification. Claim your rewards to your connected VeChain wallet or bank account.",
  },
  {
    title: "Connecting your VeChain wallet",
    category: "Wallet",
    content:
      'To connect your wallet:\n\n1. Go to Settings > Account\n2. Click "Login"\n3. Choose to login with socials or Wallet\n4. Approve the connection in your wallet app.',
  },
  {
    title: "What is a Streaker Code?",
    category: "Streaks",
    content:
      "Your Streaker Code is a unique identifier for validation:\n\n• Found in the Streaks section of the app\n• Must be visible in every streak video\n• Proves you personally performed the action\n• Write it on paper and hold it while recording\n\nWithout a visible Streaker Code, your streak submission will be rejected.",
  },
  {
    title: "Creating your profile",
    category: "Getting Started",
    content:
      "Complete your profile during onboarding:\n\n1. Add your full name or organization name and email\n2. Set your location for nearby cleanups\n3. Connect your wallet\n4. Complete KYC for organizing cleanups\n\nA complete profile helps you connect with the community and unlock all features.",
  },
  {
    title: "Claiming your rewards",
    category: "Rewards",
    content:
      'To claim your earned rewards:\n\n1. Go to the Rewards page\n2. View your pending and available balance\n3. Click "Claim" on available rewards\n4. Choose your payment method (wallet or bank)\n5. Confirm the transaction\n\nWallet claims are instant. Bank transfers may take 2-3 business days.',
  },
  {
    title: "Finding cleanups near you",
    category: "Cleanups",
    content:
      "Discover nearby cleanups:\n\n1. Open the Cleanups page\n2. Use Map view for visual discovery\n3. Or switch to List view for detailed filtering\n4. Filter by status, date, or category\n5. Click on a cleanup to see details\n6. Apply to join events that interest you\n\nYour profile location helps show relevant nearby events.",
  },
];

const faqs: { question: string; answer: string; category: CategoryKey }[] = [
  {
    question: "What are Streaks and how do they work?",
    answer:
      "Streaks are short 5-second videos of sustainable actions you can record daily on your mobile device. Actions include proper waste disposal, recycling, crafting from waste materials, or composting. Each approved streak earns you B3TR tokens. Your unique Streaker Code must be visible in the video for validation.",
    category: "Streaks",
  },
  {
    question: "What is a Streaker Code?",
    answer:
      "A Streaker Code is your unique identifier that must be shown in every streak video for validation. It proves that you personally performed the sustainable action. You can find your Streaker Code in the Streaks section of the app. Write it on a piece of paper and hold it up while recording your action.",
    category: "Streaks",
  },
  {
    question: "How do I record a streak video?",
    answer:
      'Open the Streaks page on your mobile device and tap "New Streak". First, review the rules (you can skip this after the first time). Then, press and hold the record button for up to 5 seconds while performing your sustainable action. Make sure your Streaker Code is visible in the frame. Preview your video and submit it for review.',
    category: "Streaks",
  },
  {
    question: "Why can I only submit streaks on mobile?",
    answer:
      "Streaks are designed for quick, on-the-go recording of real-world sustainable actions. Mobile devices provide the best experience for capturing these moments with your camera. You can still view your streak history and statistics on any device.",
    category: "Streaks",
  },
  {
    question: "How do I create my first cleanup event?",
    answer:
      'To create a cleanup event, go to the Dashboard and click "Organize Cleanup". Fill in the basic information (title, description, category), set the location using the map, choose a date and time, and optionally add cover images. Once submitted, your event will be visible to other users who can apply to join.',
    category: "Cleanups",
  },
  {
    question: "How do B3TR token rewards work?",
    answer:
      "B3TR tokens are earned by participating in cleanups, organizing events, and submitting approved streaks. Organizers earn 50 B3TR per completed cleanup, plus 10 B3TR for each verified participant. Participants earn tokens based on their contribution and organizer ratings. Streaks earn varying B3TR amounts when approved.",
    category: "Rewards",
  },
  {
    question: "What is proof of work and how do I submit it?",
    answer:
      "Proof of work consists of photos or videos showing your participation in a cleanup. After completing a cleanup, you can submit proof through the cleanup detail page. Include clear images of the cleanup area before and after, or photos of you actively participating. Moderators review submissions within 1-3 days.",
    category: "Cleanups",
  },
  {
    question: "How do I connect my wallet to receive rewards?",
    answer:
      'Go to Settings > Wallets to connect your VeChain wallet. You can either use the "Connect Wallet" button to connect via WalletConnect or manually enter your wallet address. Make sure to use a VeChain-compatible wallet to receive B3TR tokens.',
    category: "Wallet",
  },
  {
    question: "Can I participate without a wallet?",
    answer:
      "Yes! You can join cleanups and submit streaks without connecting a wallet. However, you will need to connect a VeChain wallet to claim your B3TR token rewards. You can add your wallet anytime in Settings.",
    category: "Wallet",
  },
  {
    question: "How do I find cleanups near me?",
    answer:
      "The Cleanups page shows events on both a map and list view. Use the map to visually find nearby events, or switch to list view and use filters to search by location, date, or category. The platform uses your set location from your profile to suggest nearby events.",
    category: "Cleanups",
  },
  {
    question: "How does the rating system work?",
    answer:
      "After a cleanup ends, organizers rate participants on a 1-5 star scale based on their contribution, punctuality, and teamwork. These ratings build your reputation and may affect future reward amounts. Participants can also provide feedback on event organization.",
    category: "Cleanups",
  },
  {
    question: "How do I complete KYC verification?",
    answer:
      "Go to Settings > KYC to complete verification. You'll need to provide a government-issued ID (National ID or Passport), a clear photograph, date of birth, address details, and proof of address. KYC verification typically takes 1-3 business days.",
    category: "Account",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Navigate to Settings > Profile to update your personal information including name, bio, and location. Changes are saved automatically. Some fields may require re-verification if modified.",
    category: "Account",
  },
  {
    question: "How do referrals work?",
    answer:
      "Share your unique referral code with friends. When they sign up and complete their first cleanup or streak, you both earn bonus B3TR tokens. Find your referral code in Settings > Referrals (requires verified email).",
    category: "Account",
  },
];

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof articles)[0] | null
  >(null);
  const [expandedFaq, setExpandedFaq] = useState<string>("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category: CategoryKey) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const handleArticleClick = (article: (typeof articles)[0]) => {
    setSelectedArticle(article);
  };

  const handlePopularArticleClick = (title: string) => {
    const article = articles.find((a) => a.title === title);
    if (article) {
      setSelectedArticle(article);
    } else {
      // Find related FAQ and expand it
      const relatedFaq = faqs.findIndex((f) =>
        f.question
          .toLowerCase()
          .includes(title.toLowerCase().split(" ").slice(0, 3).join(" "))
      );
      if (relatedFaq !== -1) {
        setExpandedFaq(`faq-${relatedFaq}`);
        document
          .getElementById(`faq-${relatedFaq}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleEmailSupport = () => {
    window.location.href =
      "mailto:support@cleanmate.app?subject=Help%20Request";
    toast.success("Opening email client...");
  };

  const handleLiveChat = () => {
    navigate("/app/ai-chat", {
      state: { prefillMessage: "I need help with..." },
    });
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Search */}
      <section className="bg-muted/50 border-b border-border pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              How can we help you?
            </h1>
            <p className="text-muted-foreground mb-8">
              Search our knowledge base or browse categories below
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-2xl"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Active Filter Banner */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                <Button variant="ghost" size="icon" onClick={clearFilters}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <span className="font-medium">Viewing: {selectedCategory}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-auto"
                >
                  Clear filter
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories */}
        {!selectedCategory && !searchQuery && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6">Browse by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group"
                      onClick={() => handleCategoryClick(category.title)}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{category.title}</h4>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {category.description}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {category.count} articles
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Articles (shown when category selected or searching) */}
        {(selectedCategory || searchQuery) && filteredArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6">
              {searchQuery
                ? "Matching Articles"
                : `${selectedCategory} Articles`}
            </h3>
            <Card className="border-border/50">
              <CardContent className="p-0">
                {filteredArticles.map((article, index) => (
                  <div
                    key={article.title}
                    onClick={() => handleArticleClick(article)}
                    className={`flex items-center justify-between p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                      index !== filteredArticles.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{article.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {article.category}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Popular Articles (only when no filter) */}
        {!selectedCategory && !searchQuery && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6">Popular Articles</h3>
            <Card className="border-border/50">
              <CardContent className="p-0">
                {articles.slice(0, 5).map((article, index) => (
                  <div
                    key={article.title}
                    onClick={() => handlePopularArticleClick(article.title)}
                    className={`flex items-center justify-between p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                      index !== 4 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{article.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {article.category}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold mb-6">
            {selectedCategory
              ? `${selectedCategory} FAQs`
              : "Frequently Asked Questions"}
          </h3>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            value={expandedFaq}
            onValueChange={setExpandedFaq}
          >
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                id={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No results found{searchQuery && ` for "${searchQuery}"`}
              </p>
              <p className="text-sm text-muted-foreground">
                Try a different search term or browse categories
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </motion.section>

        {/* Contact Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Still need help?
                    </h3>
                    <p className="text-muted-foreground">
                      Our support team is here to assist you
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={handleEmailSupport}
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </Button>
                  <Button className="gap-2" onClick={handleLiveChat}>
                    <MessageCircle className="w-4 h-4" />
                    Live Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
