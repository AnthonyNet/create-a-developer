"use client";
import React from "react";
import { useState } from "react";
import Sandpack, { CustomProps } from "./SandPack__Original";
import { amethyst } from "@codesandbox/sandpack-themes";
import { preview_Css } from "../exercises/preview_Css";
import { Setup_Props } from "./interface/NaucMe_SandPack";

interface Props {
  app: string;
  filter: string;
  filter_Answer: string;
}

const Playground = ({ app, filter, filter_Answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const handleClick = () => {
    setShowAnswer((showAnswer) => !showAnswer);
  };

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
        code: showAnswer ? filter_Answer : filter,
        active: true,
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

  return (
    <section className="w-screen h-screen">
      <div className="sandP_Btn w-[240px] h-[40px]  absolute z-10 right-0 md:left-0 md:bottom-0 my-1  flex items-start">
        <button onClick={handleClick}>Ukaž odpověď</button>
        <button onClick={() => setShowAnswer(false)}>Restart</button>
      </div>
      <Sandpack {...Setup_Props} theme={amethyst} />
    </section>
  );
};

export default Playground;
