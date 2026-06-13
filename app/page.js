import fs from 'fs';
import path from 'path';
import AboutContent from './AboutContent';

export const metadata = {
  title: 'Praveen Suhag',
  description: "Praveen Suhag's Portfolio",
};

// The symbol is a single filled path. We read just its `d` on the server and
// hand it to the client component, which draws it like a hand-sketched line
// with Framer Motion (pathLength) before revealing the solid fill.
const symbolPath = fs
  .readFileSync(path.join(process.cwd(), 'public/about/symbol.svg'), 'utf8')
  .match(/\sd="([^"]*)"/)[1];

export default function Home() {
  return <AboutContent symbolPath={symbolPath} />;
}
