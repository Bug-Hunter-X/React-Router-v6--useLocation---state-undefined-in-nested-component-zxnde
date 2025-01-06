In React Router Dom v6, attempting to access the `useLocation` hook's `state` property directly within a component that's not directly rendered by a route might lead to unexpected behavior or `undefined` values. This is because the `state` property is only populated when navigating to a route using a `navigate` call with the `state` property set.  If you try to access it in a component that is a child of a component that was routed to without that state, it won't have access.

```javascript
// Incorrect usage
function MyComponent() {
  const location = useLocation();
  const state = location.state; // Might be undefined
  console.log(state);
  return <div>My Component</div>;
}
```