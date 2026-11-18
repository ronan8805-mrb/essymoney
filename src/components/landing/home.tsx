import { Header } from "./header";
import { Hero } from "./hero";
import { Faq, Footer, Join, Story } from "./sections";

export function HomePage() {
  return (
    <div className="min-h-svh bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <Story />
        <Join />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
