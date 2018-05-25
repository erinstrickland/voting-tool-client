const React = require('react')
const ReactDOM = require('react-dom')
const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = require('react-dom/test-utils')
const {default: Voting} = require('../../src/components/Voting')
const {expect} = require('chai')

describe('Voting', () => {
  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = (entry) => votedWith = entry

    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              vote={vote}/>
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])

    expect(votedWith).to.equal('Trainspotting')
  })
  
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    )
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(2)
    expect(buttons[0].textContent).to.equal('Trainspotting')
    expect(buttons[1].textContent).to.equal('28 Days Later')
  })
})