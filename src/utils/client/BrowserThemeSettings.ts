export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark'
}

export class BrowserThemeSettings {
    private static readonly PREFERS_DARK = '(prefers-color-scheme: dark)';

    public static getCurrentThemeMode(): ThemeMode {
        return window.matchMedia(BrowserThemeSettings.PREFERS_DARK).matches ? ThemeMode.DARK : ThemeMode.LIGHT;
    }

    public static onThemeChange(callback: (themeMode: ThemeMode) => void) {
        window?.matchMedia?.(BrowserThemeSettings.PREFERS_DARK).addEventListener('change', () => callback(BrowserThemeSettings.getCurrentThemeMode()));
    }
}
