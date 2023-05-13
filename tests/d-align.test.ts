import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { AnswerAdded } from "../generated/schema"
import { AnswerAdded as AnswerAddedEvent } from "../generated/DAlign/DAlign"
import { handleAnswerAdded } from "../src/d-align"
import { createAnswerAddedEvent } from "./d-align-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let promptId = Bytes.fromI32(1234567890)
    let answerId = Bytes.fromI32(1234567890)
    let content = "Example string value"
    let submittedBy = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAnswerAddedEvent = createAnswerAddedEvent(
      promptId,
      answerId,
      content,
      submittedBy
    )
    handleAnswerAdded(newAnswerAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AnswerAdded created and stored", () => {
    assert.entityCount("AnswerAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AnswerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "promptId",
      "1234567890"
    )
    assert.fieldEquals(
      "AnswerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "answerId",
      "1234567890"
    )
    assert.fieldEquals(
      "AnswerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "content",
      "Example string value"
    )
    assert.fieldEquals(
      "AnswerAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "submittedBy",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
