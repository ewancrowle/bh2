import {Player} from "./player";
import {Answer} from "./question";

export type Game = {
    host: string;
    state: GamePhase;
    players: Player[];

    timeStart?: Date;

    points: { [user: string]: number };

    roundCount?: number;
    round?: Round;
};

export type Round = {
    answerOptions: { [player: string]: string[] }; // for each user an array of possible answer ids
    selectedAnswers: { [player: string]: string }; // selected answer for each user
    submittedAnswers: Answer[];
    bestAnswerId: string;
};

export type GamePhase =
    | "WAITING_LOBBY"
    | "ROUND_CARD_SELECTION"
    | "ROUND_IN_PROGRESS"
    | "ROUND_JUDGING"
    | "ROUND_RESULT"
    | "ENDED";
