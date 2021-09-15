import dynamic from 'next/dynamic';
export * from './hooks';
export * from './options';
export const Editor = dynamic(
  () => import('./editor').then((mod) => mod.EditorContainer),
  {
    ssr: false,
  },
);
