# Nuggets

## Basics
- React is a UI Library
- It has unidirectional data flow i.e. state usually lives in one component and trickles down as props
- It is declarative
- It uses a component architecture

## Developing apps
- Decide on components
- Decide the state and where it lives i.e. place state in the appropriate component
- What changes when state changes i.e. what part of the Virtual DOM is rendered when state changes

## Components
- `key` e.g. `<Card key={item.id} item={item} />` is used by react to distinguish between multiple components of the same kind that are rendered at the same time one after another. So if one of them changes, react will only update that particular component and not everything

## State management

- State consists of any change in the app due to a user action
- Consider performance implications when deciding where state lives because if state changes in a component, the change is announced to whichever component that receives the state as props and the component has to re-render

### Adding a clock component

Let’s quickly recap what’s going on and the order in which the methods are called:

1. When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

2. React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.

3. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

4. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

5. If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.