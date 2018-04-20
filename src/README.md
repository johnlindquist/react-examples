# State Object vs Function

Using a `state =>` function is more reliable in async situations that accessing `this.state` and passing in an object. So when you want to get the previous state, best to use `setState(state => ({value: state.value + whatever}))`
