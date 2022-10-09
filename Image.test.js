import React from 'react'
import { Image } from 'react-native'
import TestRenderer from 'react-test-renderer';


const TestComponent = () => {
    return <Image source={require('./assets/splash.png')} />
}

it('does not crash', () => {
  const component = TestRenderer.create(<TestComponent />)
  expect(true).toBe(true)
})
