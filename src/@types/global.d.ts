// これがないとwindow.rpcがts errorになるがなぜ？
// Property 'rpc' does not exist on type 'Window & typeof globalThis'.ts(2339)
import { IpcRenderer } from 'electron';

declare global {
  interface Window {
    rpc: {
      test: (s: string) => void
    },
  }
}
