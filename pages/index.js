import dynamic from 'next/dynamic';
const DidipaiPresale = dynamic(() => import('../components/DidipaiPresale'), { ssr: false });

export default function Home() {
  return <DidipaiPresale />;
}
