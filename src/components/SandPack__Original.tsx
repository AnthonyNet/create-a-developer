/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect, useRef, Fragment } from "react";
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
  SandpackStack,
  SandpackLayout,
  RoundedButton,
  ConsoleIcon,
  SandpackProvider,
  useClassNames,
  SANDBOX_TEMPLATES,
} from "@codesandbox/sandpack-react";

import type {
  CodeEditorProps,
  SandpackInternal,
  SandpackInternalOptions,
  TemplateFiles,
  SandpackFiles,
  SandpackPredefinedTemplate,
  SandpackProps,
} from "@codesandbox/sandpack-react";

import { css, THEME_PREFIX } from "../styles";

type Props = SandpackProps & {
  customProps: { showOpenInCodeSandbox: boolean };
};

const Sandpack = ({
  customProps,
  options,
  template,
  customSetup,
  files,
  theme,
  ...props
}: Props) => {
  options ??= {};

  /* This was DEFAULT SETUP HERE

	options.resizablePanels??= true;
	options.editorWidthPercentage ??= 50;
	options.showConsole ??= false; */

  // This option here is mandatory, otherwise TS gets mad

  options.resizablePanels = true;
  options.editorWidthPercentage = 50;
  options.showConsole = true;

  const rtlLayout = options?.rtl ?? false;
  const codeEditorOptions: CodeEditorProps = {
    showTabs: options.showTabs,
    showLineNumbers: options.showLineNumbers,
    showInlineErrors: options.showInlineErrors,
    wrapContent: options.wrapContent,
    closableTabs: options.closableTabs,
    initMode: options.initMode,
    extensions: options.codeEditor?.extensions,
    extensionsKeymap: options.codeEditor?.extensionsKeymap,
    readOnly: options.readOnly,
    showReadOnly: options.showReadOnly,
    additionalLanguages: options.codeEditor?.additionalLanguages,
  };

  const providerOptions: SandpackInternalOptions<
    SandpackFiles,
    SandpackPredefinedTemplate
  > = {
    /**
     * TS-why: Type 'string | number | symbol' is not assignable to type 'string'
     */
    activeFile: options.activeFile as unknown as string,
    visibleFiles: options.visibleFiles as unknown as string[],
    recompileMode: options.recompileMode,
    recompileDelay: options.recompileDelay,
    autorun: options.autorun,
    autoReload: options.autoReload,
    bundlerURL: options.bundlerURL,
    startRoute: options.startRoute,
    skipEval: options.skipEval,
    fileResolver: options.fileResolver,
    initMode: options.initMode,
    initModeObserverOptions: options.initModeObserverOptions,
    externalResources: options.externalResources,
    logLevel: options.logLevel,
    classes: options.classes,
  };

  /**
   * Console visibility SETUP
   */
  const [consoleVisibility, setConsoleVisibility] = useState(
    options.showConsole
  );
  const [counter, setCounter] = useState(0);
  const hasRightColumn = options.showConsole || options.showConsoleButton;

  //Template SETUP
  /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
  const templateFiles = SANDBOX_TEMPLATES[template!] ?? {};
  const mode = (
    options?.layout
      ? options?.layout
      : "mode" in templateFiles
      ? templateFiles.mode
      : "preview"
  ) as typeof options.layout;

  //Console HIDE/SHOW Switch SETUP
  const actionsChildren = options.showConsoleButton ? (
    <ConsoleCounterButton
      counter={counter}
      onClick={(): void => setConsoleVisibility((prev) => !prev)}
    />
  ) : undefined;

  /**
   * Resizable SETUP
   */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const dragEventTargetRef = useRef<any>(null);

  const [horizontalSize, setHorizontalSize] = useState(
    options.editorWidthPercentage
  );
  const [verticalSize, setVerticalSize] = useState(70);

  const RightColumn = hasRightColumn ? SandpackStack : Fragment;
  const rightColumnStyle = {
    flexGrow: 100 - horizontalSize,
    flexShrink: 100 - horizontalSize,
    flexBasis: 0,
    width: 10 - horizontalSize + "%",
    gap: consoleVisibility ? 1 : 0,
    height: options.editorHeight, // use the original editor height
  };

  const topRowStyle = hasRightColumn
    ? {
        flexGrow: verticalSize,
        flexShrink: verticalSize,
        flexBasis: 0,
        overflow: "hidden",
      }
    : rightColumnStyle;

  const onDragMove = (event: MouseEvent): void => {
    if (!dragEventTargetRef.current) return;

    const container = dragEventTargetRef.current.parentElement as
      | HTMLDivElement
      | undefined;

    if (!container) return;

    const direction = dragEventTargetRef.current.dataset.direction as
      | "horizontal"
      | "vertical";
    const isHorizontal = direction === "horizontal";

    const { left, top, height, width } = container.getBoundingClientRect();
    const offset = isHorizontal
      ? ((event.clientX - left) / width) * 100
      : ((event.clientY - top) / height) * 100;
    const boundaries = Math.min(Math.max(offset, 25), 75);

    if (isHorizontal) {
      setHorizontalSize(rtlLayout ? 100 - boundaries : boundaries);
    } else {
      setVerticalSize(boundaries);
    }

    container.querySelectorAll(`.${THEME_PREFIX}-stack`).forEach((item) => {
      (item as HTMLDivElement).style.pointerEvents = "none";
    });
  };

  const stopDragging = (): void => {
    const container = dragEventTargetRef.current?.parentElement as
      | HTMLDivElement
      | undefined;

    if (!container) return;

    container.querySelectorAll(`.${THEME_PREFIX}-stack`).forEach((item) => {
      (item as HTMLDivElement).style.pointerEvents = "";
    });

    dragEventTargetRef.current = null;
  };

  useEffect(() => {
    if (!options?.resizablePanels) return;
    document.body.addEventListener("mousemove", onDragMove);
    document.body.addEventListener("mouseup", stopDragging);

    return (): void => {
      document.body.removeEventListener("mousemove", onDragMove);
      document.body.removeEventListener("mouseup", stopDragging);
    };
  }, [options]);

  useEffect(() => {
    setConsoleVisibility(options?.showConsole ?? false);
  }, [options.showConsole]);

  const rightColumnProps = hasRightColumn
    ? { className: THEME_PREFIX + "-preset-column", style: rightColumnStyle }
    : {};

  const classNames = useClassNames();

  return (
    <SandpackProvider
      key={template}
      customSetup={customSetup}
      files={files as TemplateFiles<SandpackPredefinedTemplate>}
      options={providerOptions}
      template={template}
      theme={theme}
      {...props}
    >
      <SandpackLayout
        className={
          rtlLayout ? classNames("rtl-layout", [rtlLayoutClassName]) : ""
        }
      >
        <SandpackCodeEditor
          {...codeEditorOptions}
          style={{
            height: options.editorHeight, // use the original editor height
            flexGrow: horizontalSize,
            flexShrink: horizontalSize,
            flexBasis: 0,
            overflow: "hidden",
          }}
        />

        {options.resizablePanels && (
          <div
            className={classNames("resize-handler", [
              dragHandler({ direction: "horizontal" }),
            ])}
            data-direction="horizontal"
            onMouseDown={(event): void => {
              dragEventTargetRef.current = event.target;
            }}
            style={{
              left: `calc(${
                rtlLayout ? 100 - horizontalSize : horizontalSize
              }% - 5px)`,
            }}
          />
        )}

        {/* @ts-ignore */}
        <RightColumn {...rightColumnProps}>
          {mode === "preview" && (
            <SandpackPreview
              actionsChildren={actionsChildren}
              showNavigator={options.showNavigator}
              showRefreshButton={options.showRefreshButton}
              style={topRowStyle}
              //added externally for NaucMeIT
              //Hide the Open in Original CodeSandbox button
              showOpenInCodeSandbox={customProps.showOpenInCodeSandbox}
            />
          )}

          {mode === "tests" && (
            <SandpackTests
              actionsChildren={actionsChildren}
              style={topRowStyle}
            />
          )}

          {mode === "console" && (
            <SandpackConsole
              actionsChildren={actionsChildren}
              style={topRowStyle}
              standalone
            />
          )}

          {(options.showConsoleButton || consoleVisibility) && (
            <>
              {options.resizablePanels && consoleVisibility && (
                <div
                  className={classNames("resize-handler", [
                    dragHandler({ direction: "vertical" }),
                  ])}
                  data-direction="vertical"
                  onMouseDown={(event): void => {
                    dragEventTargetRef.current = event.target;
                  }}
                  style={{ top: `calc(${verticalSize}% - 5px)` }}
                />
              )}

              <div
                className={classNames("console-wrapper", [consoleWrapper])}
                style={{
                  flexGrow: consoleVisibility ? 100 - verticalSize : 0,
                  flexShrink: consoleVisibility ? 100 - verticalSize : 0,
                  flexBasis: 0,
                }}
              >
                <SandpackConsole
                  onLogsChange={(logs): void => setCounter(logs.length)}
                  showHeader={false}
                />
              </div>
            </>
          )}
        </RightColumn>
      </SandpackLayout>
    </SandpackProvider>
  );
};

const dragHandler = css({
  position: "absolute",
  zIndex: "$top",

  variants: {
    direction: {
      vertical: {
        right: 0,
        left: 0,
        height: 10,
        cursor: "ns-resize",
      },
      horizontal: {
        top: 0,
        bottom: 0,
        width: 10,
        cursor: "ew-resize",
      },
    },
  },

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

const ConsoleCounterButton: React.FC<{
  onClick: () => void;
  counter: number;
}> = ({ onClick, counter }) => {
  return (
    <RoundedButton className={buttonCounter.toString()} onClick={onClick}>
      <ConsoleIcon />
      {counter > 0 && <strong>{counter}</strong>}
    </RoundedButton>
  );
};

const buttonCounter = css({
  position: "relative",

  strong: {
    background: "$colors$clickable",
    color: "$colors$surface1",
    minWidth: 12,
    height: 12,
    padding: "0 2px",
    borderRadius: 12,
    fontSize: 8,
    lineHeight: "12px",
    position: "absolute",
    top: 0,
    right: 0,
    fontWeight: "normal",
  },
});

const consoleWrapper = css({
  width: "100%",
  overflow: "hidden",
});

const rtlLayoutClassName = css({
  flexDirection: "row-reverse",

  "@media screen and (max-width: 768px)": {
    flexFlow: "wrap-reverse !important",
    flexDirection: "initial",
  },
});

export default Sandpack;
