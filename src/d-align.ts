import {
  AnswerAdded as AnswerAddedEvent,
  AnswersRated as AnswersRatedEvent,
  PromptCreated as PromptCreatedEvent,
  PromptQualityEvaluated as PromptQualityEvaluatedEvent
} from "../generated/DAlign/DAlign"
import {
  AnswerAdded,
  AnswersRated,
  PromptCreated,
  PromptQualityEvaluated
} from "../generated/schema"

export function handleAnswerAdded(event: AnswerAddedEvent): void {
  let entity = new AnswerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.promptId = event.params.promptId
  entity.answerId = event.params.answerId
  entity.content = event.params.content
  entity.submittedBy = event.params.submittedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAnswersRated(event: AnswersRatedEvent): void {
  let entity = new AnswersRated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.promptId = event.params.promptId
  entity.winningAnswerId = event.params.winningAnswerId
  entity.losingAnswerId = event.params.losingAnswerId
  entity.newWinnerElo = event.params.newWinnerElo
  entity.newLoserElo = event.params.newLoserElo
  entity.submittedBy = event.params.submittedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePromptCreated(event: PromptCreatedEvent): void {
  let entity = new PromptCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.DAlign_id = event.params.id
  entity.content = event.params.content
  entity.submittedBy = event.params.submittedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePromptQualityEvaluated(
  event: PromptQualityEvaluatedEvent
): void {
  let entity = new PromptQualityEvaluated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.promptId = event.params.promptId
  entity.newTotalQuality = event.params.newTotalQuality
  entity.newNumberOfQualityVotes = event.params.newNumberOfQualityVotes
  entity.submittedBy = event.params.submittedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
