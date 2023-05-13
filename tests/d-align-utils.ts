import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AnswerAdded,
  AnswersRated,
  PromptCreated,
  PromptQualityEvaluated
} from "../generated/DAlign/DAlign"

export function createAnswerAddedEvent(
  promptId: Bytes,
  answerId: Bytes,
  content: string,
  submittedBy: Address
): AnswerAdded {
  let answerAddedEvent = changetype<AnswerAdded>(newMockEvent())

  answerAddedEvent.parameters = new Array()

  answerAddedEvent.parameters.push(
    new ethereum.EventParam("promptId", ethereum.Value.fromFixedBytes(promptId))
  )
  answerAddedEvent.parameters.push(
    new ethereum.EventParam("answerId", ethereum.Value.fromFixedBytes(answerId))
  )
  answerAddedEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  answerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "submittedBy",
      ethereum.Value.fromAddress(submittedBy)
    )
  )

  return answerAddedEvent
}

export function createAnswersRatedEvent(
  promptId: Bytes,
  winningAnswerId: Bytes,
  losingAnswerId: Bytes,
  newWinnerElo: BigInt,
  newLoserElo: BigInt,
  submittedBy: Address
): AnswersRated {
  let answersRatedEvent = changetype<AnswersRated>(newMockEvent())

  answersRatedEvent.parameters = new Array()

  answersRatedEvent.parameters.push(
    new ethereum.EventParam("promptId", ethereum.Value.fromFixedBytes(promptId))
  )
  answersRatedEvent.parameters.push(
    new ethereum.EventParam(
      "winningAnswerId",
      ethereum.Value.fromFixedBytes(winningAnswerId)
    )
  )
  answersRatedEvent.parameters.push(
    new ethereum.EventParam(
      "losingAnswerId",
      ethereum.Value.fromFixedBytes(losingAnswerId)
    )
  )
  answersRatedEvent.parameters.push(
    new ethereum.EventParam(
      "newWinnerElo",
      ethereum.Value.fromSignedBigInt(newWinnerElo)
    )
  )
  answersRatedEvent.parameters.push(
    new ethereum.EventParam(
      "newLoserElo",
      ethereum.Value.fromSignedBigInt(newLoserElo)
    )
  )
  answersRatedEvent.parameters.push(
    new ethereum.EventParam(
      "submittedBy",
      ethereum.Value.fromAddress(submittedBy)
    )
  )

  return answersRatedEvent
}

export function createPromptCreatedEvent(
  id: Bytes,
  content: string,
  submittedBy: Address
): PromptCreated {
  let promptCreatedEvent = changetype<PromptCreated>(newMockEvent())

  promptCreatedEvent.parameters = new Array()

  promptCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  promptCreatedEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  promptCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "submittedBy",
      ethereum.Value.fromAddress(submittedBy)
    )
  )

  return promptCreatedEvent
}

export function createPromptQualityEvaluatedEvent(
  promptId: Bytes,
  newTotalQuality: BigInt,
  newNumberOfQualityVotes: BigInt,
  submittedBy: Address
): PromptQualityEvaluated {
  let promptQualityEvaluatedEvent = changetype<PromptQualityEvaluated>(
    newMockEvent()
  )

  promptQualityEvaluatedEvent.parameters = new Array()

  promptQualityEvaluatedEvent.parameters.push(
    new ethereum.EventParam("promptId", ethereum.Value.fromFixedBytes(promptId))
  )
  promptQualityEvaluatedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalQuality",
      ethereum.Value.fromUnsignedBigInt(newTotalQuality)
    )
  )
  promptQualityEvaluatedEvent.parameters.push(
    new ethereum.EventParam(
      "newNumberOfQualityVotes",
      ethereum.Value.fromUnsignedBigInt(newNumberOfQualityVotes)
    )
  )
  promptQualityEvaluatedEvent.parameters.push(
    new ethereum.EventParam(
      "submittedBy",
      ethereum.Value.fromAddress(submittedBy)
    )
  )

  return promptQualityEvaluatedEvent
}
