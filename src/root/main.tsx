import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { About, Contact, Experience, Hero, TechnicalExpertise } from '@sections';
import { Footer } from '@components';
import './globals.scss';

function bootstrap() {
    const rootElement = document.querySelector('#root')!;
    const ROOT = createRoot(rootElement);
    ROOT.render(
        <StrictMode>
            <Hero />
            <About />
            <TechnicalExpertise />
            <Experience />
            <Contact />
            <Footer />
        </StrictMode>
    );
}

bootstrap();
