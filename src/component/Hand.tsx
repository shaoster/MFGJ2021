import { Button, Card, CardActions, CardContent, Grid } from "@material-ui/core";

export default function Hand({
  hand, onClickCard=undefined, ...remainingProps
}: {hand: Array<string>, onClickCard: any} & React.HTMLAttributes<HTMLDivElement>)
{
  return <Grid container {...remainingProps}>
    {
    hand.map((cardName: string, handSlot: number) => (
      <Grid item xs={1}>
        <Card variant="outlined" className="card">
          <CardContent>
            <h2>{cardName}</h2>
          </CardContent> 
          <CardActions>
            <Button
              variant="contained"
              onClick={()=>onClickCard(handSlot)}
              disabled={!onClickCard}
            >
              Play
            </Button>         
          </CardActions>
        </Card>
      </Grid>
    ))
    }
  </Grid>;
};