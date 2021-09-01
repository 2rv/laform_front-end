import dynamic from 'next/dynamic';

export const TextEditor = dynamic(() => import('./edittor'), { ssr: true });
