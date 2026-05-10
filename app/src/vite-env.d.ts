/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENT_CRM_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
