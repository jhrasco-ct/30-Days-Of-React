// 1. What is an event?
// An event is an action or occurrence recognized by a software.

// 2. What is the different between an HTML element event and React event?
// - They differ in syntax.
// - React event cannot return false to prevent default behavior. The preventDefault must be called explicitly.

// 3. Write at least 4 keyboard events?
// onKeyDown, onKeyUp, onKeyPress, onCopy

// 4. Write at least 8 mouse events?
// onMouseMove, onMouseEnter, onDoubleClick, onMouseLeave, onMouseOut, onClick, onDrag, onDrop

// 5. What are the most common mouse and keyboard events?
// onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress,
// onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit

// 6. Write an event specific to input element?
const handleKeyPress = () => {};
<input type="text" onKeyPress={handleKeyPress} />;

// 7. Write an event specific to form element?
const handleSubmit = () => {};
<form onSubmit={handleSubmit}></form>;

// 8. Display the coordinate of the view port when a mouse is moving on the body?
const App = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log(`Coordinate: x: ${event.clientX} y: ${event.clientY}`);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

// 9. What is the difference between onInput, onChange and onBlur?
// - onInput is triggered when an element gets user input
// - onChange is triggered when an element changes its value
// - onBlur is triggered when an object loses focus

// 10. Where do we put the onSubmit event?
// onSubmit event is used in the form element
