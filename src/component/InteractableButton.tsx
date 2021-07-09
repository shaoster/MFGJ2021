import { Button, ButtonProps, Paper, Popper } from "@material-ui/core";
import { uniqueId } from "lodash";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { dedent } from "./dedent";

export default function InteractableButton(
  {children, onClick, tutorialMd, showTutorial, onAcknowledge, className, ...remaining} :
  {children: React.ReactNode | undefined, onClick: any, tutorialMd: string | undefined, showTutorial: boolean, onAcknowledge: any} & ButtonProps)
{
  const buttonRef : MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [id] = useState(uniqueId());
  useEffect(() => {
    if (buttonRef.current) {
      setAnchorEl(buttonRef.current);
    }
  }, [buttonRef])
  return <>
    <Button
      {...remaining}
      className={showTutorial ? (className ? `${className} glow` : 'glow') : className}
      aria-describedby={id}
      ref={buttonRef}
      onClick={(el: any) => {
        onClick();
        onAcknowledge();
      }}
    >
      {children}
    </Button>
    <Popper
      id={id}
      anchorEl={anchorEl}
      placement="bottom"
      open={showTutorial} 
      modifiers={{
        arrow: {
          enabled: true,
        }
      }}
    >
      <Paper className="tutorial-popper">
        <ReactMarkdown>
          {dedent(tutorialMd ?? "")}
        </ReactMarkdown>
      </Paper>
    </Popper>
  </>;
}
