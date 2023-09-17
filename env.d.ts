declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_SECRET: string;
    readonly NEXT_PUBLIC_API: string;
    readonly NEXT_PUBLIC_VK_ID: number;
    readonly NEXT_PUBLIC_VK_SECURE: string;
    readonly NEXT_PUBLIC_VK_SERVICE: string;
    readonly NEXT_PUBLIC_YANDEX_CLIENT_ID: string;
    readonly NEXT_PUBLIC_YANDEX_CLIENT_SECRET: string;
    readonly NEXT_PUBLIC_YANDEX_REDIRECT: string;
  }
}
