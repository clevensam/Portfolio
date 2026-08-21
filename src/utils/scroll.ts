const cleanUrl = () => {
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
};

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  cleanUrl();
};

export const handleInitialHash = () => {
  if (!window.location.hash) return;
  const id = window.location.hash.slice(1);
  cleanUrl();
  if (!id) return;
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};
