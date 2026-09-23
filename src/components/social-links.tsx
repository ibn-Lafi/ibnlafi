export function SocialLinks({ arabic }: { arabic: boolean }) {
  return (
    <>
      <a className="social-link" href="https://www.tiktok.com/@3li.ai?_r=1&_t=ZS-99yGVJkCQmi" target="_blank" rel="noopener noreferrer" aria-label={arabic ? "تيك توك" : "TikTok"} title={arabic ? "تيك توك" : "TikTok"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75V9.4a6.33 6.33 0 1 0 5.45 6.27V8.68a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07Z" /></svg>
      </a>
      <a className="social-link" href="https://x.com/ibn_lafi?s=11" target="_blank" rel="noopener noreferrer" aria-label={arabic ? "إكس" : "X"} title={arabic ? "إكس" : "X"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" /></svg>
      </a>
    </>
  );
}
