'use client';

import { useState } from 'react';
import { BrowserThemeSettings } from '@utils/client';

export default function CompanyLogo({ companyName, customSize = 150 }: { companyName: string; customSize?: number }) {
    const [themeMode, setThemeMode] = useState(BrowserThemeSettings.getCurrentThemeMode());
    BrowserThemeSettings.onThemeChange(setThemeMode);

    return (
        <img
            src={`/images/logos/${companyName}/${themeMode}.svg`}
            alt={`${companyName}`}
            width={customSize}
            height={customSize}
            loading="lazy"
            style={{ height: 'auto' }}
        />
    );
}
