declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_SECRET: string;
    readonly NEXT_PUBLIC_API: string;
  }
}
