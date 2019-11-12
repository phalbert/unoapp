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

- Consider performance implications when deciding where state lives because if state changes in a component, the change is announced to whichever component that receives the state as props and the component has to re-render

```mermaid
graph TD
    ((1)) --> ((2))
    ((1)) --> ((3))
    ((2)) --> ((4))
    ((2)) --> ((5))
    ((2)) --> ((7))
    ((3)) --> ((6))
    ((3)) --> ((8))
    ((5)) --> ((9))
    ((5)) --> ((10))
```
 