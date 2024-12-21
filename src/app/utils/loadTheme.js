export async function loadTheme() {
  const themeName = process.env.NEXT_PUBLIC_THEME || 'default';
  const response = await fetch('/assets/themes.json');
  const themes = await response.json();
  return themes[themeName] || themes.default;
}
