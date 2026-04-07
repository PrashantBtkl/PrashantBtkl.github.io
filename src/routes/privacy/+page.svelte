<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy – JoltBot</title>
</svelte:head>

<div class="page-wrapper">
  <a class="back-link" href="{base}/">← Back</a>

  <h1>Privacy Policy</h1>
  <p class="subtitle">JoltBot Chrome Extension &middot; Effective: April 7, 2026</p>

  <div class="section-card">
    <h2>1. Overview</h2>
    <p>
      JoltBot is a Chrome extension that provides an AI writing assistant accessible from any webpage.
      It uses Google Sign-In for authentication and the Google Gemini API to generate responses.
      This policy describes what data is collected, how it is stored, which third-party services are
      involved, and what rights you have over your data.
    </p>
  </div>

  <div class="section-card">
    <h2>2. Data We Collect</h2>

    <h3>Sent to JoltBot servers when you use the extension</h3>
    <ul>
      <li>Your Google OAuth access token (sent once at sign-in to authenticate your account)</li>
      <li>Your Google profile: name and email address (retrieved from Google at sign-in)</li>
      <li>Your messages and prompts sent to the AI</li>
      <li>Your &ldquo;memory&rdquo; context: a free-form personal context string you configure in the extension popup</li>
      <li>Your active &ldquo;skills&rdquo;: named text snippets (up to 5,000 characters each) you configure as reusable AI context</li>
      <li>Session metadata: session name and conversation turn count</li>
    </ul>

    <h3>Stored locally in your browser (chrome.storage.local)</h3>
    <ul>
      <li>Your Google profile: name, email, and profile picture URL</li>
      <li>Your Google OAuth access token</li>
      <li>Your active session identifier</li>
      <li>Your memory context text</li>
    </ul>

    <p class="note">
      <strong>Note:</strong> Individual conversation messages are <strong>not</strong> stored on JoltBot servers.
      Only the turn count per session is recorded server-side. Conversation continuity is maintained
      via a reference ID returned by the Gemini API.
    </p>
  </div>

  <div class="section-card">
    <h2>3. How Your Data Is Stored</h2>

    <h3>Server-side (Cloudflare D1 SQLite)</h3>
    <ul>
      <li><strong>users</strong>: your Google account identifier (OAuth sub), name, email, and account timestamps</li>
      <li><strong>sessions</strong>: session UUID, name, turn count, last Gemini interaction ID, and timestamps</li>
      <li><strong>skills</strong>: skill UUID, name, context text, description, and active status</li>
    </ul>

    <h3>Browser-side</h3>
    <p>
      Data is stored in Chrome extension local storage, which is isolated to the extension and
      inaccessible to any website you visit.
    </p>

    <p>
      Cloudflare Workers runtime logs, if any, are ephemeral and not retained persistently.
    </p>
  </div>

  <div class="section-card">
    <h2>4. Third-Party Services</h2>

    <ul>
      <li>
        <strong>Google OAuth2 API</strong> &mdash; Used to authenticate your sign-in and fetch your
        profile (name, email, account ID, profile picture). Governed by
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s Privacy Policy</a>.
      </li>
      <li>
        <strong>Google Gemini API</strong> (<code>generativelanguage.googleapis.com</code>) &mdash;
        Your prompts, memory context, and active skills are sent to Gemini to generate responses.
        Requests are made with <code>store: true</code>, meaning Google retains conversation turns on
        their infrastructure to support multi-turn conversation continuity. This data is governed by
        <a href="https://ai.google.dev/terms" target="_blank" rel="noopener noreferrer">Google&rsquo;s Gemini API Terms of Service</a>.
      </li>
      <li>
        <strong>DuckDuckGo</strong> &mdash; Queried only when you explicitly use the
        <code>/websearch()</code> command in a prompt. No personal identifiers are included in
        this request. Governed by
        <a href="https://duckduckgo.com/privacy" target="_blank" rel="noopener noreferrer">DuckDuckGo&rsquo;s Privacy Policy</a>.
      </li>
    </ul>
  </div>

  <div class="section-card">
    <h2>5. Chrome Permissions</h2>

    <ul>
      <li>
        <strong>storage</strong> &mdash; Stores your session, memory, and profile data locally in
        the extension&rsquo;s isolated storage.
      </li>
      <li>
        <strong>identity</strong> &mdash; Enables Google Sign-In via Chrome&rsquo;s built-in OAuth
        flow.
      </li>
      <li>
        <strong>clipboardRead</strong> &mdash; Your clipboard is read only when you explicitly type
        <code>/clipboard</code> in a prompt. The clipboard content is sent to Gemini as part of
        that prompt and is not stored.
      </li>
      <li>
        <strong>&lt;all_urls&gt;</strong> (host permission) &mdash; The extension&rsquo;s content
        script runs on all pages so you can invoke JoltBot from any tab. The extension does
        <strong>not</strong> read or transmit page content unless you explicitly trigger
        <code>/jolt</code>.
      </li>
    </ul>

    <p class="note">
      The extension logs the current page URL, your raw prompt, and the AI response to the
      browser&rsquo;s developer console for debugging. These logs are local to your browser and
      are never transmitted to any server.
    </p>
  </div>

  <div class="section-card">
    <h2>6. Data Retention and Deletion</h2>
    <ul>
      <li>
        Local browser data persists until you uninstall the extension or clear extension storage
        via Chrome Settings &rarr; Extensions &rarr; JoltBot &rarr; Clear storage.
      </li>
      <li>
        Server-side data (account, sessions, skills) persists until you request deletion.
      </li>
      <li>
        To request deletion, contact the developer (see Section 8). Your user record, all sessions,
        and all skills will be permanently removed.
      </li>
    </ul>
  </div>

  <div class="section-card">
    <h2>7. Your Rights</h2>
    <ul>
      <li>You may request access to the data stored about you at any time.</li>
      <li>You may request permanent deletion of your account and all associated data at any time.</li>
      <li>
        You may revoke JoltBot&rsquo;s access to your Google account at any time via
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>.
        This will invalidate your stored token and sign you out of JoltBot.
      </li>
      <li>No data is sold or shared with third parties beyond the service integrations described in Section 4.</li>
    </ul>
  </div>

  <div class="section-card">
    <h2>8. Contact</h2>
    <p>
      For questions, data access requests, or deletion requests, reach out via:
    </p>
    <ul>
      <li><a href="https://github.com/PrashantBtkl" target="_blank" rel="noopener noreferrer">GitHub &mdash; PrashantBtkl</a></li>
      <li><a href="https://linkedin.com/in/prashant-bhatkal" target="_blank" rel="noopener noreferrer">LinkedIn &mdash; Prashant Bhatkal</a></li>
    </ul>
  </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

.page-wrapper {
  font-family: "Hind Siliguri", sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-link {
  display: inline-block;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  padding: 4px 10px;
  margin-bottom: 16px;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #cedaed;
}

h1 {
  font-family: "Hind Siliguri", sans-serif;
  color: #333;
  margin-bottom: 4px;
}

.subtitle {
  color: #666;
  margin-bottom: 24px;
}

.section-card {
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

h2 {
  font-family: "Hind Siliguri", sans-serif;
  color: #333;
  margin-top: 0;
  margin-bottom: 12px;
}

h3 {
  font-family: "Hind Siliguri", sans-serif;
  color: #444;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 1rem;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

ul {
  color: #666;
  line-height: 1.6;
  padding-left: 20px;
  margin-bottom: 12px;
}

li {
  margin-bottom: 6px;
}

a {
  color: #333;
  text-decoration: underline;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  padding: 1px 2px;
}

a:hover {
  background-color: #cedaed;
}

code {
  font-size: 0.9em;
  background-color: #e0e0e0;
  padding: 1px 5px;
  border-radius: 4px;
}

.note {
  background-color: #e8edf5;
  border-left: 3px solid #a0b4d0;
  border-radius: 4px;
  padding: 10px 14px;
  margin-top: 12px;
  margin-bottom: 0;
}
</style>
