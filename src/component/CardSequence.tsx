import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { range } from "lodash";
import { ReactElement, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Cards from '../Cards';
import { MAX_HAND_SIZE } from "../Constants";
import { CardId, StepAction } from "../Types";
import { PatternRows } from "./SampleGrid";

export function ActionCard({
  cardId, cardIndex, buttonLabel, onClickCard, onClickEnabled, viewCard, isSelected
}: {
  cardId: CardId, cardIndex: number, buttonLabel: string, onClickCard: any,
  onClickEnabled: boolean, viewCard: any, isSelected: boolean
} & React.HTMLAttributes<HTMLDivElement>) : ReactElement
{
  const card = Cards[cardId];
  const maybeClassSequence = card.pattern?.map(
    (stepAction: StepAction) => "cell " + StepAction[stepAction] as string
  );
  // TODO: Figure out how to make this nice on touch.
  return <Card
    variant="outlined"
    className={"card" + (isSelected ? " selected" : "")}
    onClick={viewCard}
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
    </CardContent> 
    <CardActions>
      {onClickEnabled && 
      <Button
        variant="contained"
        onClick={()=>onClickCard(cardIndex)}
        disabled={!isSelected}
      >
        {buttonLabel}
      </Button>         
      }
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

const BASIC_CARD_CLASSES = range(MAX_HAND_SIZE).map((i) => "card-show");

export default function CardSequence({
  cards, buttonLabel, onClickCard, unremovable, className, ...remainingProps
}: {
  cards: Array<CardId>, buttonLabel: string, onClickCard: any, unremovable: number
} & React.HTMLAttributes<HTMLDivElement>) {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cardClasses, setCardClasses] = useState(BASIC_CARD_CLASSES);
  const [lastCardCount, setLastCardCount] = useState(cards.length);
  useEffect(() => {
    if (cards.length !== lastCardCount) {
      setCardClasses(BASIC_CARD_CLASSES);
      setSelectedCard(0);
      setLastCardCount(cards.length);
      return;
    }
    // We need to do a little bit of state machine magic to get the right animations.
    const newClasses: Array<string> = [...BASIC_CARD_CLASSES]
    for (let i = 0; i < MAX_HAND_SIZE; i++) {
      const computeClass: () => string = () => {
        if (i < selectedCard) {
          return "displace";
        } else {
          return "show";
        }
      }
      const newClass = computeClass();
      newClasses[i] = "card-" + newClass;
    }
    setCardClasses(newClasses);
  }, [cards, lastCardCount, selectedCard]);

  const clickCard = (index: number) => {
    if (index >= unremovable) {
      onClickCard(index);
    }
  }

  return <div className={"sequence " + className}>
    <TransitionGroup component={null}>
    {
    cards.map((cardId: CardId, index: number) => 
      <CSSTransition key={cardId + ":" + index} exit={true} classNames="card" timeout={200}>
        <div
          className={"card-slot " + cardClasses[index]}
          style={{zIndex: MAX_HAND_SIZE - index, marginTop: (index * 4) + "px"}}
        >
          <ActionCard
            cardId={cardId}
            cardIndex={index}
            buttonLabel={buttonLabel}
            onClickCard={() => clickCard(index)}
            onClickEnabled={index >= unremovable}
            viewCard={() => {
              const newCard = index !== selectedCard ? index : (
                index < cards.length - 1 ? 
                  index + 1 : 0 
              );
              setSelectedCard(newCard);
            }}
            isSelected={index === selectedCard}
          />
        </div>
      </CSSTransition>
    )
    }
    </TransitionGroup>
  </div>;
};