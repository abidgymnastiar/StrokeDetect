import type { IStaticMethods } from 'preline/dist';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

declare module '*.css';
declare module '*.scss';

export {};
