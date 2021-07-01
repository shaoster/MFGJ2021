import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { range } from "lodash";
import { ReactElement, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Cards from '../Cards';
import { MAX_HAND_SIZE } from "../Constants";
import { CardId, StepAction } from "../Types";
import { PatternRows } from "./SampleGrid";

export function ActionCard({
  cardId, cardIndex, buttonLabel, onClickCard, onClickEnabled, setSelectedCard, isSelectedCard,
}: {
  cardId: CardId, cardIndex: number, buttonLabel: string, onClickCard: any,
  onClickEnabled: boolean, setSelectedCard: any, isSelectedCard: boolean
} & React.HTMLAttributes<HTMLDivElement>) : ReactElement
{
  const card = Cards[cardId];
  const maybeClassSequence = card.pattern?.map(
    (stepAction: StepAction) => "cell " + StepAction[stepAction] as string
  );
  // TODO: Figure out how to make this nice on touch.
  return <Card
    variant="outlined"
    className="card"
    onClick={() => {
      setSelectedCard(isSelectedCard ? 0 : cardIndex)
    }}
  >
    <CardContent>
      <h2>{card.title}</h2>
      {card.sampleTarget && <span>{card.sampleTarget}</span>}
      {maybeClassSequence && 
        <table className="pattern">
          <tbody>
            <PatternRows
              classSequence={maybeClassSequence}
            />
          </tbody>
        </table>
      }
      <p>{card.description}</p>
    </CardContent> 
    <CardActions>
      <Button
        variant="contained"
        onClick={()=>onClickCard(cardIndex)}
        disabled={!onClickEnabled}
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

const BASIC_CARD_CLASSES = range(MAX_HAND_SIZE).map((i) => "card-hide");

export default function CardSequence({
  cards, buttonLabel, onClickCard, unremovable, className, ...remainingProps
}: {
  cards: Array<CardId>, buttonLabel: string, onClickCard: any, unremovable: number
} & React.HTMLAttributes<HTMLDivElement>) {
  const [selectedCard, setSelectedCard] = useState(cards.length - 1);
  const [lastSelectedCard, setLastSelectedCard] = useState(0);
  const [cardClasses, setCardClasses] = useState(BASIC_CARD_CLASSES);
  useEffect(() => {
    if (cards.length === 0) {
      setCardClasses(BASIC_CARD_CLASSES);
      setLastSelectedCard(0);
      setSelectedCard(0);
      return;
    }
    if (lastSelectedCard === selectedCard) {
      return;
    }
    // We need to do a little bit of state machine magic to get the right animations.
    const newClasses: Array<string> = [...BASIC_CARD_CLASSES]
    for (let i = 0; i < MAX_HAND_SIZE; i++) {
      const computeClass: () => string = () => {
        if (selectedCard > 0) {
          if (i < selectedCard) {
            // To the left of the action. Use hide-card.
            if ((i < lastSelectedCard || lastSelectedCard === 0)) {
              return "stay-hidden";
            } else {
              return "hide";
            }
          } else {
            if (lastSelectedCard > 0 && i >= lastSelectedCard) {
              return "stay-displaced";
            } else {
              return "displace";
            }
          }
        } else {
          if (i < lastSelectedCard) {
            return "stay-hidden";
          } else {
            return "hide";
          }
        }
      };
      const newClass = computeClass();
      newClasses[i] = "card-" + newClass;
    }
    setCardClasses(newClasses);
    setLastSelectedCard(selectedCard);
  }, [cards, selectedCard, lastSelectedCard]);

  const clickCard = (index: number) => {
    if (index >= unremovable) {
      onClickCard(index);
    }
  }

  return <div className={"sequence " + className}>
    <TransitionGroup component={null}>
    {
    cards.map((cardId: CardId, index: number) => 
      <CSSTransition key={index} exit={true} classNames="card" timeout={200}>
        <div className={"card-slot " + cardClasses[index]} style={{zIndex: MAX_HAND_SIZE - index}}>
          <ActionCard
            cardId={cardId}
            cardIndex={index}
            buttonLabel={buttonLabel}
            onClickCard={() => clickCard(index)}
            onClickEnabled={index >= unremovable}
            setSelectedCard={setSelectedCard}
            isSelectedCard={index === selectedCard}
          />
        </div>
      </CSSTransition>
    )
    }
    </TransitionGroup>
  </div>;
};