import { Button, Card, CardActions, CardContent, Grid, Zoom } from "@material-ui/core";
import { times } from "lodash";
import { ReactElement } from "react";

import Cards from '../Cards';
import { MAX_HAND_SIZE } from "../Constants";
import { CardId, StepAction } from "../Types";
import { PatternRows } from "./SampleGrid";

export function ActionCard({
  cardId, cardIndex, buttonLabel, onClickCard
}: {cardId: CardId, cardIndex: number, buttonLabel: string, onClickCard: any} & React.HTMLAttributes<HTMLDivElement>)
: ReactElement {
  const card = Cards[cardId];
  const maybeClassSequence = card.pattern?.map(
    (stepAction: StepAction) => "cell " + StepAction[stepAction] as string
  );
  return <Card variant="outlined" className="card">
    <CardContent>
      <h2>{card.title}</h2>
      {card.sampleTarget && <span>{card.sampleTarget}</span>}
      {maybeClassSequence && 
        <table className="pattern">
          <PatternRows
            classSequence={maybeClassSequence}
          />
        </table>
      }
      <p>{card.description}</p>
    </CardContent> 
    <CardActions>
      <Button
        variant="contained"
        onClick={()=>onClickCard(cardIndex)}
        disabled={!onClickCard}
      >
        {buttonLabel}
      </Button>         
    </CardActions>
  </Card>;
};

export function EmptyCardSlot(): ReactElement {
  return <Card variant="outlined" className="card empty">
    <CardContent>
      &nbsp;
    </CardContent> 
  </Card>
}

export default function CardSequence({
  cards, buttonLabel, onClickCard, unremovable, ...remainingProps
}: {
  cards: Array<CardId>, buttonLabel: string, onClickCard: any, unremovable: number
} & React.HTMLAttributes<HTMLDivElement>) {
  // The <div></div> wrappers below are a material-ui workaround.
  // See https://stackoverflow.com/questions/57078732/material-ui-fade-component-does-not-show-hide-or-fade-components
  return <Grid container {...remainingProps}>
    {
    cards.map((cardId: string, index: number) => 
      <Zoom in={true} key={"transition " + index}>
        <div>
          <ActionCard
            cardId={cardId}
            cardIndex={index}
            buttonLabel={buttonLabel}
            onClickCard={index >= unremovable ? onClickCard : undefined}
            key={"actionCard " + index}
          />
        </div>
      </Zoom>
    )
    }
    {
      times(MAX_HAND_SIZE - cards.length, () => null).map(
        (_, index) =>
        <Zoom in={true} key={"transition " + (cards.length + index)}>
          <div>
            <EmptyCardSlot key={cards.length + index}/>
          </div>
        </Zoom>
      )
    }
  </Grid>;
};