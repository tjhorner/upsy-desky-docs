import BrowserOnly from "@docusaurus/BrowserOnly";
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'kicanvas-embed': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function KiCanvasViewer({ src = "" }) {
  return (
    <BrowserOnly>
      {() => {
        require("./kicanvas")
        return <kicanvas-embed controls="full" controlslist="nooverlay" src={src} />
      }}
    </BrowserOnly>
  )
}