import type { DetailedHTMLProps, HTMLAttributes } from "react";

// Allow usage of the lottie-player web component in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        autoplay?: boolean;
        background?: string;
        controls?: boolean;
        loop?: boolean;
        mode?: string;
        renderer?: "svg" | "canvas" | "html";
        speed?: string | number;
        src?: string;
      };
    }
  }
}

export {};
