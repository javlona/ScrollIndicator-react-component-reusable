# React Scroll Indicator :scroll:

Enhance your React project with this easy-to-use and customizable Scroll Indicator! Perfect for showing the progress of scrolling on your webpage. Simply copy the component into your project, and you're good to go! :rocket:

## Features :sparkles:

- **Customizable Scroll Background Color**: Match the scroll indicator with your site's theme.
- **Customizable Bar Color**: Choose a bar color that stands out or blends in with your design.
- **Customizable Bar Height**: Adjust the height of the scroll bar for greater visibility or subtlety.

## Installation :wrench:

No installation required! Just copy the `ScrollIndicator.jsx` file into your React project and import it where you need it.

## Usage :computer:

To use the Scroll Indicator in your React project, simply import the component and include it in your JSX like so:

```jsx
import ScrollIndicator from './path/to/ScrollIndicator';

const App = () => {
  return (
    <div>
      <ScrollIndicator
        scrollBgColor="#efefef" // Scroll background color
        barColor="#ff6347" // Bar color
        barHeight="5px" // Bar height
      />
      {/* Your content here */}
    </div>
  );
};
export default App;

```

## Props :gear:

| Prop          | Type   | Description                       | Default Value |
|---------------|--------|-----------------------------------|---------------|
| `scrollBgColor` | `string` | Background color of the scroll.  | `"#efefef"`     |
| `barColor`      | `string` | Color of the scroll indicator.   | `"#ff6347"`     |
| `barHeight`     | `string` | Height of the scroll indicator.  | `"5px"`         |

## Contributing :handshake:

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License :page_facing_up:

Distributed under the MIT License. See `LICENSE` for more information.

## Show Your Support :star2:

Give a ⭐️ if this project helped you!
