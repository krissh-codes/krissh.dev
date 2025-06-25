import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from '@components';
import { About, Contact, Experience, Hero, Projects, Statistics, TechnicalExpertise } from '@sections';
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
            <Statistics />
            <Projects />
            <Contact />
            <Footer />
        </StrictMode>
    );
}

bootstrap();
