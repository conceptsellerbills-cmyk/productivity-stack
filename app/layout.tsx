import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Productivity Stack";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.productivity-stack.com"),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "Expert guides, reviews and tips.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <style>{`
          .site-header{background:#060f08;border-bottom:1px solid rgba(255,255,255,0.07);padding:14px 0;position:sticky;top:0;z-index:100}
          .header-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;gap:24px}
          .site-brand{font-size:1.1rem;font-weight:800;color:#fff;text-decoration:none;white-space:nowrap;display:flex;align-items:center;gap:9px;transition:color 0.15s}
          .site-brand:hover{color:#10b981}
          .site-logo{flex-shrink:0;display:block}
          .cat-nav{position:relative}
          .cat-btn{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#e2e8f0;font-size:0.875rem;font-weight:600;padding:8px 16px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;transition:background 0.15s,border-color 0.15s}
          .cat-btn:hover,.cat-nav:focus-within .cat-btn{background:rgba(255,255,255,0.1);border-color:#10b981;color:#10b981}
          .cat-btn svg{transition:transform 0.2s}
          .cat-nav:hover .cat-btn svg,.cat-nav:focus-within .cat-btn svg{transform:rotate(180deg)}
          .cat-dropdown{display:none;position:absolute;top:calc(100% + 8px);left:0;background:#1a1d2e;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:8px;min-width:220px;box-shadow:0 16px 48px rgba(0,0,0,0.5);z-index:200;max-height:70vh;overflow-y:auto}
          .cat-nav:hover .cat-dropdown,.cat-nav:focus-within .cat-dropdown{display:block}
          .cat-dropdown a{display:block;padding:9px 14px;border-radius:8px;color:#c8cad8;font-size:0.875rem;text-decoration:none;transition:background 0.1s,color 0.1s;white-space:nowrap}
          .cat-dropdown a:hover{background:rgba(255,255,255,0.06);color:#10b981}
          .site-footer{border-top:1px solid rgba(255,255,255,0.07);padding:24px 0;margin-top:60px}
          .site-footer p{color:#6b7280;font-size:0.82rem;text-align:center}
        `}</style>
        <header className="site-header">
          <div className="header-inner">
            <a href="/" className="site-brand">
              <svg className="site-logo" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
              {SITE_NAME}
            </a>
            <nav className="cat-nav" tabIndex={0}>
              <button className="cat-btn" aria-haspopup="true">
                Categories
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4"/></svg>
              </button>
              <div className="cat-dropdown" role="menu">
              <a href="/category/task-management">📋 Task Management</a>
              <a href="/category/note-taking">📝 Note-Taking Apps</a>
              <a href="/category/calendar">📅 Calendar & Scheduling</a>
              <a href="/category/time-tracking">⏱️ Time Tracking</a>
              <a href="/category/collaboration">🤝 Team Collaboration</a>
              <a href="/category/file-management">📁 File Management</a>
              <a href="/category/ai-productivity">🤖 AI Productivity Tools</a>
              <a href="/category/email-management">✉️ Email Management</a>
              <a href="/category/goal-setting">🎯 Goal Setting & OKRs</a>
              <a href="/category/focus">🧘 Focus & Deep Work</a>
              <a href="/category/project-management">📊 Project Management</a>
              <a href="/category/automation">🔄 Automation Tools</a>
              </div>
            </nav>
          </div>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
