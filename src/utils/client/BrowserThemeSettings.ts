'use client';

export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark'
}

export default class BrowserThemeSettings {
    private static readonly PREFERS_DARK = '(prefers-color-scheme: dark)';

    public static getCurrentThemeMode(): ThemeMode {
        if (BrowserThemeSettings.isClient() && window.matchMedia(BrowserThemeSettings.PREFERS_DARK).matches) {
            return ThemeMode.DARK;
        } else {
            return ThemeMode.LIGHT;
        }
    }

    public static onThemeChange(callback: (themeMode: ThemeMode) => void) {
        if (BrowserThemeSettings.isClient()) {
            window?.matchMedia?.(BrowserThemeSettings.PREFERS_DARK).addEventListener('change', () => callback(BrowserThemeSettings.getCurrentThemeMode()));
        }
    }

    private static isClient() {
        return typeof window !== 'undefined';
    }
}
