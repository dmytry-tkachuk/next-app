import themeConfig from '@styles/themes';

export function setTheme() {
  const themeEnv = process.env.NEXT_PUBLIC_THEME || 'default';
  const theme = themeConfig[themeEnv];

  if (!theme) {
    console.error(`Theme "${themeEnv}" not found in theme.json`);
    return;
  }

  // Устанавливаем CSS-переменные
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}
