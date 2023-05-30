"use client";
import React from "react";
import { useState } from "react";
import Sandpack, { CustomProps } from "./SandPack__Original";
import { amethyst } from "@codesandbox/sandpack-themes";
import { preview_Css } from "../exercises/preview_Css";
import { useSandpack } from "@codesandbox/sandpack-react";

interface Props {
  app: string;
  exercise: string;
  answer: string;
}

const Playground = ({ app, exercise, answer }: Props) => {
  const Setup_Props: CustomProps = {
    customProps: {
      showOpenInCodeSandbox: false,
    },
    options: {
      resizablePanels: true,
      editorHeight: "99.75vh",
      showConsole: true,
      showConsoleButton: true,
      showLineNumbers: true,
      editorWidthPercentage: 50,
      closableTabs: true,
      showTabs: true,
      /*visibleFiles: ["/filter.js", "/style.css"],
			activeFile: "/filter.js",*/
      showInlineErrors: true, // What is this doing?
      //externalResources: ["https://cdn.tailwindcss.com"] eRRoRs
    },
    files: {
      "/App.js": {
        code: app,
        //readOnly: true,
        hidden: true,
      },

      "/filter.js": {
        code: exercise,
        active: true,
      },

      "/filterAnswer.js": {
        code: answer,
        hidden: true,
      },

      "/style.css": {
        code: preview_Css,
        //active: true,
        hidden: true,
      },
    },
    template: "react",
    theme: amethyst,
  };

  return <Sandpack {...Setup_Props} theme={amethyst} />;
};

export default Playground;
