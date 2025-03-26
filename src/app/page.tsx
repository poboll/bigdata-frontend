import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to BigData
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Useful tools for Escape from Tarkov players, including our popular GoonsTracker
        </p>
        <Link
          href="/goonstracker"
          className="bg-primary px-8 py-3 text-lg font-bold hover:bg-primary/80 transition-colors"
        >
          Try GoonsTracker
        </Link>
      </div>
    </div>
  );
}
