import { signIn } from "./actions";

interface Props {
  searchParams: Promise<{ redirectTo?: string; error?: string }>;
}

export default async function LoginPage({ searchParams }: Props) {
  const { redirectTo = "/admin", error } = await searchParams;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white px-6 text-black dark:bg-black dark:text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FDA228 1px, transparent 1px), linear-gradient(90deg, #FDA228 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Brand */}
        <div className="mb-8 text-center">
          <p className="text-3xl font-bold text-[#FDA228]">Meghraj.</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
            Admin Portal
          </p>
        </div>

        <form action={signIn} className="space-y-4">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-black dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border-2 border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-[#FDA228] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-[#FDA228]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-black dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border-2 border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/30 focus:border-[#FDA228] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-[#FDA228]"
            />
          </div>

          {error === "invalid" && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400">
              Invalid email or password.
            </div>
          )}

          <button
            type="submit"
            className="group relative mt-2 w-full overflow-hidden rounded-full bg-[#FDA228] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,162,40,0.4)]"
          >
            <div className="absolute inset-0 translate-x-[-100%] bg-black transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative transition-colors duration-300 group-hover:text-[#FDA228]">
              Sign in →
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
