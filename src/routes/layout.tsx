import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="cb-root">
      <header class="cb-header">
        <h1>Snow Clearing</h1>
      </header>
      <main class="cb-content">
        <Slot />
      </main>
      <footer class="cb-footer">
        <button class="cb-button">Grand Total</button>
      </footer>
    </div>
  );
});
