import dynamic from 'next/dynamic';

export const ReactEditor = dynamic(() => import('./react-editor'), {
  ssr: false,
});
