# `getSnapshotBeforeUpdate`

This method is _rarely_ used. The only scenario:

1.  `setState` updates elements
2.  The difference between the previous elements and updated elements impacts
    your component
3.  You need to check element refs before render and compare them to after the render.

`getSnapshotBeforeUpdate` is _always_ used with `componentDidUpdate`. It gives you the opportunity to catch element differences and pass them to `componentDidUpdate`.
