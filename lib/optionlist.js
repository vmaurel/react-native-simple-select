import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ViewPropTypes,
  Dimensions,
} from "react-native"

export default class OptionList extends Component {
  static defaultProps = {
    onSelect: () => {},
  }
  static propTypes = {
    style: ViewPropTypes.style,
    onSelect: PropTypes.func,
  }

  render() {
    const { style, children, onSelect, selectedStyle, selected } = this.props
    let height = 0
    const screenHeight = Math.round(Dimensions.get("window").height)
    if (children && children.length > 1) {
      const maxHeight = children.length * 42
      height = screenHeight * 0.3 < maxHeight ? screenHeight * 0.3 : maxHeight
    }
    const renderedItems = React.Children.map(children, (item, key) => {
      if (!item) return null
      return (
        <TouchableOpacity
          key={key}
          style={{ borderWidth: 0 }}
          onPress={() => onSelect(item.props.children, item.props.value)}
        >
          <View style={[{ borderWidth: 0 }, item.props.value === selected ? selectedStyle : null]}>
            {item}
          </View>
        </TouchableOpacity>
      )
    })

    return (
      <View style={[styles.scrollView, { height: height }, style]}>
        <ScrollView automaticallyAdjustContentInsets={false} bounces={false}>
          {renderedItems}
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  scrollView: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#d9dadc",
  },
})
