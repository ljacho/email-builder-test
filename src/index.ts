import { TReaderDocument } from "@usewaypoint/email-builder";

import renderToStaticMarkup from "@usewaypoint/email-builder/dist/renderers/renderToStaticMarkup";

// Replace this with the JSON for your Reader document
const CONFIGURATION: TReaderDocument = {
  root: {
    type: "EmailLayout",
    data: {
      backdropColor: "#F8F8F8",
      canvasColor: "#FFFFFF",
      textColor: "#242424",
      fontFamily: "MODERN_SANS",
      childrenIds: ["block-1709578146127"],
    },
  },
  "block-1709578146127": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Hello world",
      },
    },
  },
};

const html = renderToStaticMarkup(CONFIGURATION, { rootBlockId: "root" });

console.log(html);
