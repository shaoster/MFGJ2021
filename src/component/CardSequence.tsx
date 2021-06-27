import { Button, Card, CardActions, CardContent, Grid } from "@material-ui/core";

import Cards from '../Cards';
import { CardId, StepAction } from "../Types";
import { PatternRows } from "./SampleGrid";

export function ActionCard({
  cardId, cardIndex, buttonLabel, onClickCard=undefined
}: {cardId: CardId, cardIndex: number, buttonLabel: string, onClickCard: any} & React.HTMLAttributes<HTMLDivElement>)
{
  const card = Cards[cardId];
  const maybeClassSequence = card.pattern?.map(
    (stepAction: StepAction) => "cell " + StepAction[stepAction] as string
  );
  return <Card variant="outlined" className="card">
    <CardContent>
      <h2>{card.title}</h2>
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

export default function CardSequence({
  cards, buttonLabel, onClickCard=undefined, ...remainingProps
}: {cards: Array<CardId>, buttonLabel: string, onClickCard: any} & React.HTMLAttributes<HTMLDivElement>)
{
  return <Grid container {...remainingProps}>
    {
    cards.map((cardId: string, index: number) => (
      <ActionCard
        cardId={cardId}
        cardIndex={index}
        buttonLabel={buttonLabel}
        onClickCard={onClickCard}
      />
    ))
    }
  </Grid>;
};