import { Header } from "./header";
import { Hero } from "./hero";
import { Faq, Footer, Join, Reviews, Story } from "./sections";

export function HomePage() {
  return (
    <div className="min-h-svh bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <Story />
        <Reviews />
        <Join />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
