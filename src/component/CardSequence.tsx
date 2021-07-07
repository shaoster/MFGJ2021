import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { range } from "lodash";
import { ReactElement, useEffect, useReducer } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Cards from '../Cards';
import { MAX_HAND_SIZE } from "../Constants";
import { CardId, StepAction } from "../Types";
import { PatternRows } from "./SampleGrid";

export function ActionCard({
  cardId, cardIndex, buttonLabel, onClickCard, onClickEnabled, viewCard, isSelected, emphasizeButton,
  leftOffset
}: {
  cardId: CardId, cardIndex: number, buttonLabel: string, onClickCard: any,
  onClickEnabled: boolean, viewCard: any, isSelected: boolean, emphasizeButton: boolean,
  leftOffset: number
} & React.HTMLAttributes<HTMLDivElement>) : ReactElement
{
  const card = Cards[cardId];
  const maybeClassSequence = card.pattern?.map(
    (stepAction: StepAction) => "cell " + StepAction[stepAction] as string
  );
  return <Card
    variant="outlined"
    className={"card " + card.sampleTarget + (isSelected ? " selected" : "")}
    onClick={viewCard}
    style={{
      marginLeft: leftOffset + "px"
    }}
  >
    <CardContent>
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
      {onClickEnabled ? 
        <Button
          variant="contained"
          onClick={(evt) => {
            onClickCard(cardIndex);
            evt.stopPropagation();
          }}
          disabled={!isSelected}
          className={emphasizeButton ? "emphasis" : ""}
        >
          {buttonLabel}
        </Button>         
        :
        <div className="card-fixed">
          FIXED
        </div>
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

interface CardInteraction {
  type: string;
  value?: any;
};

interface SequenceState {
  selectedCard: number;
  cardClasses: Array<any>;
  cardCount: number;
  renderedCardCount: number; 
};

const CardInteractionReducer: (lastState: SequenceState, action: CardInteraction) => SequenceState =
  (lastState: SequenceState, action: CardInteraction) => {
    switch (action.type) {
      // These two transitions are purely for tracking transient animation states.
      case 'enter':
        return {
          ...lastState,
          renderedCardCount: lastState.renderedCardCount + 1,
        };
      case 'exited':
        return {
          ...lastState,
          renderedCardCount: lastState.renderedCardCount - 1,
        };
      // This is the race-safe implementation for how to handle card selections.
      case 'select-card': {
        const newCard = action.value !== lastState.selectedCard ? action.value : (
          action.value < lastState.cardCount - 1 ? 
            action.value + 1 : 0 
        );
        const computeClass: (i: number) => string = (i) => {
          if (i < newCard) {
            return "displace";
          } else {
            return "show";
          }
        };
        const newClasses = range(MAX_HAND_SIZE).map((i) => "card-" + computeClass(i));
        return {
          ...lastState,
          cardClasses: newClasses,
          selectedCard: newCard,
        }
      }
      case 'reset': {
        return {
          ...action.value,
          // Preserve the rendered card count?
          renderedCardCount: lastState.renderedCardCount
        };
      }
      default:
        throw new Error("Unrecognized action.");
    }
};

export default function CardSequence({
  cards, buttonLabel, onClickCard, unremovable, className, emphasizeButton, ...remainingProps
}: {
  cards: Array<CardId>, buttonLabel: string, onClickCard: any, unremovable: number, emphasizeButton: boolean
} & React.HTMLAttributes<HTMLDivElement>) {
  const defaultCardClasses = range(MAX_HAND_SIZE).map(() => 'card-show');
  const [sequenceState, dispatch] = useReducer(CardInteractionReducer, {
    cardCount: cards.length,
    selectedCard: 0,
    cardClasses: defaultCardClasses,
    renderedCardCount: cards.length,
  });
  // Sometimes we have an inbound update to cards that we need to reconcile with our controlled
  // sequence state... Just reset.
  useEffect(() => {
    if (cards.length !== sequenceState.cardCount) {
      dispatch({
        type: "reset",
        value: {
          cardCount: cards.length,
          selectedCard: 0,
          cardClasses: defaultCardClasses,
        }
      })
    }
  }, [cards.length, defaultCardClasses, sequenceState.cardCount])
  return <div className={"sequence " + className}>
    <TransitionGroup component={null}>
    {
    cards.map((cardId: CardId, index: number) => 
      <CSSTransition
        key={cardId}
        enter={true}
        exit={true}
        classNames="card"
        timeout={200}
        onEnter={() => dispatch({type: 'enter', value: cards.length})}
        onExited={() => dispatch({type: 'exited', value: cards.length})}
      >
        <div
          className={"card-slot " + sequenceState.cardClasses[index]}
          style={{
            zIndex: MAX_HAND_SIZE - index,
          }}
        >
          <ActionCard
            cardId={cardId}
            cardIndex={index}
            buttonLabel={buttonLabel}
            onClickCard={() => onClickCard(index)}
            onClickEnabled={cards.length - index > unremovable}
            viewCard={() => {
              dispatch({
                type: "select-card",
                value: index,
              });
            }}
            isSelected={index === sequenceState.selectedCard}
            emphasizeButton={emphasizeButton}
            leftOffset={18 * (MAX_HAND_SIZE - sequenceState.renderedCardCount - 1)}
          />
          { cards.length - index > unremovable &&
            <div className="card-order" onClick={() => dispatch({type: "select-card", value: index,})}>
              {cards.length - index - unremovable}
            </div> 
          }
        </div>
      </CSSTransition>
    )
    }
    </TransitionGroup>
  </div>;
};