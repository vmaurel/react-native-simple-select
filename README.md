# React Native Single Select

Simple DropDown menu for React Native App! Your Select Tag for React Native. Fully Customizable too.

## Introduction

React Native Single Select is simple, customizable and easy to use dropdown in React Native. It has been tested on both Android and IOS and works like a charm.

This component has been forked from react-native-chooser and is modified to works as a controlled select

## Installation

```
yarn add react-native-single-select
```

or

```
npm i react-native-single-select --save
```

## Usage

```js
import React, { Component } from "react";
import { Select, Option } from "react-native-single-select";

import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onSelect(value, label) {
    this.setState({ value: value });
  }

  render() {
    const data = [
      { id: "", name: "" },
      { id: "1", name: "Option 1" },
      { id: "2", name: "Option 2" },
      { id: "3", name: "Option 3" },
      { id: "4", name: "Option 4" },
      { id: "5", name: "Option 5" },
    ];
    return (
      <View style={styles.container}>
        <Select
          onSelect={this.onSelect.bind(this)}
          defaultText={this.state.value}
          style={{ borderWidth: 1, borderColor: "green" }}
          textStyle={{}}
          backdropStyle={{ backgroundColor: "#d3d5d6" }}
          optionListStyle={{ backgroundColor: "#F5FCFF" }}
          data={data}
          value={this.state.value}
        />
      </View>
    );
  }
}
```

### Props

#### Props for Select

| Prop Name       | Data Type     | Default Values         | Description                                      |
| --------------- | ------------- | ---------------------- | ------------------------------------------------ |
| onSelect        | function      | null                   | function that executes on selection of an option |
| defaultText     | string        | Click To Select        | Text to show as default text                     |
| style           | object        | null                   | To style the select box.                         |
| backdropStyle   | object        | null                   | To style the overlay                             |
| textStyle       | object        | null                   | To style the text shown in the box               |
| optionListStyle | object        | null                   | To style the selection box                       |
| transparent     | boolean       | false                  | To set the transparent prop on Modal             |
| animationType   | string        | "none"                 | To set the animationType prop on Modal           |
| indicator       | string        | "none", "up" or "down" | "none"                                           | To enable an indicator arrow |
| indicatorColor  | string        | "black"                | The color of the indicator arrow                 |
| indicatorSize   | number        | 10                     | The size of the indicator arrow                  |
| indicatorStyle  | object        | null                   | To style the indicator arrow                     |
| indicatorIcon   | react element | null                   | Show the indicator icon                          |
| selected        | string        | null                   | Give it same value as you give to Option         |
| selectedStyle   | object        | null                   | Apply styles to the selected Option              |

#### Functions for Select

| Function Name         | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| setSelectedText(text) | Set default text in the select option, often used to reset text. |

#### Props for Option

| Prop Name | Data Type | Default Values | Description                           |
| --------- | --------- | -------------- | ------------------------------------- |
| style     | object    | null           | To style each option                  |
| styleText | object    | null           | To style the text shown in the option |

## Demo

### IOS and Android:

<p align="center">
    <img src ="https://raw.githubusercontent.com/gs-akhan/react-native-select/master/dropdown-both.gif" />
</p>

## Contributions

Your contributions and suggestions are heartily♡ welcome. (✿◠‿◠)
