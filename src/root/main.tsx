import { Suspense, StrictMode, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { About } from '@sections/about';
import { Hero } from '@sections/hero';
import './globals.scss';

const TechnicalExpertise = lazy(() => import('@sections/technical-expertise').then((module) => ({ default: module.TechnicalExpertise })));
const Experience = lazy(() => import('@sections/experience').then((module) => ({ default: module.Experience })));
const Statistics = lazy(() => import('@sections/statistics').then((module) => ({ default: module.Statistics })));
const Contact = lazy(() => import('@sections/contact').then((module) => ({ default: module.Contact })));
const Footer = lazy(() => import('@components/Footer').then((module) => ({ default: module.Footer })));
const sectionFallback = <section className="section__plain" aria-busy={true} style={{ minHeight: '24rem' }} />;

function bootstrap() {
    const rootElement = document.querySelector('#root')!;
    const ROOT = createRoot(rootElement);
    ROOT.render(
        <StrictMode>
            <Hero />
            <main id="main-content" tabIndex={-1}>
                <About />
                <Suspense fallback={sectionFallback}>
                    <TechnicalExpertise />
                </Suspense>
                <Suspense fallback={sectionFallback}>
                    <Experience />
                </Suspense>
                <Suspense fallback={sectionFallback}>
                    <Statistics />
                </Suspense>
                <Suspense fallback={sectionFallback}>
                    <Contact />
                </Suspense>
                <Suspense fallback={sectionFallback}>
                    <Footer />
                </Suspense>
            </main>
        </StrictMode>
    );
}

bootstrap();
