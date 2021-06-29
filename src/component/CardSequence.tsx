import { Button, Card, CardActions, CardContent, Grid } from "@material-ui/core";
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
  return <Grid container {...remainingProps}>
    {
    cards.map((cardId: string, index: number) => 
      <ActionCard
        cardId={cardId}
        cardIndex={index}
        buttonLabel={buttonLabel}
        onClickCard={index >= unremovable ? onClickCard : undefined}
        key={index}
      />
    )
    }
    {
      times(MAX_HAND_SIZE - cards.length, () => null).map(
        (_, index) => <EmptyCardSlot key={cards.length + index}/>
      )
    }
  </Grid>;
};