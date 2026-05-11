import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 text-black dark:bg-black dark:text-white">
      {/* Background grid — same as hero */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FDA228 1px, transparent 1px), linear-gradient(90deg, #FDA228 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#FDA228]">
          404
        </p>
        <h1 className="mb-4 text-6xl font-bold tracking-tight sm:text-8xl">
          Page not found
        </h1>
        <p className="mb-10 text-base text-neutral-500 dark:text-neutral-400 sm:text-lg">
          This page doesn&apos;t exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
