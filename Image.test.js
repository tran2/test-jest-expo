import React from 'react'
import { Image } from 'react-native'
import TestRenderer from 'react-test-renderer';


const TestComponent = () => {
    return <Image source={require('./assets/splash.png')} />
}

it('does not crash', async () => {
  let component
  TestRenderer.act(() => {
    component = TestRenderer.create(<TestComponent />)
  })
  expect(component.toJSON()).toBeTruthy()
})
