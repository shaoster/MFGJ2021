import { Button, Card, CardActions, CardContent, Grid } from "@material-ui/core";

import Cards from '../Cards';

export default function CardSequence({
  cards, buttonLabel, onClickCard=undefined, ...remainingProps
}: {cards: Array<string>, buttonLabel: string, onClickCard: any} & React.HTMLAttributes<HTMLDivElement>)
{
  return <Grid container {...remainingProps}>
    {
    cards.map((cardId: string, index: number) => (
      <Card variant="outlined" className="card" key={"card " + index}>
        <CardContent>
          <h2>{Cards[cardId].title}</h2>
          <p>{Cards[cardId].description}</p>
        </CardContent> 
        <CardActions>
          <Button
            variant="contained"
            onClick={()=>onClickCard(index)}
            disabled={!onClickCard}
          >
            {buttonLabel}
          </Button>         
        </CardActions>
      </Card>
    ))
    }
  </Grid>;
};