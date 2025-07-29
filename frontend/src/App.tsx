import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { UseCases } from "./components/UseCases";
import { Features } from "./components/Features";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Features />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
