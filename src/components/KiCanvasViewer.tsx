import React from 'react';
import "./kicanvas.js"

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
    <kicanvas-embed controls="full" controlslist="nooverlay" src={src} />
  )
}