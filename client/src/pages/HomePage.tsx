import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <Layout>
      <div className="-mt-20"> {/* Offset the Layout padding for Hero to be full screen */}
        <Hero />
      </div>
    </Layout>
  );
}
