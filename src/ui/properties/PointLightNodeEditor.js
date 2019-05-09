import React, { Component } from "react";
import PropTypes from "prop-types";
import NodeEditor from "./NodeEditor";
import InputGroup from "../inputs/InputGroup";
import ColorInput from "../inputs/ColorInput";
import NumericInputGroup from "../inputs/NumericInputGroup";
import LightShadowProperties from "./LightShadowProperties";

export default class PointLightNodeEditor extends Component {
  static propTypes = {
    editor: PropTypes.object,
    node: PropTypes.object
  };

  static iconClassName = "fa-lightbulb";

  static description = "A light which emits in all directions from a single point.";

  onChangeColor = color => {
    this.props.editor.setNodeProperty(this.props.node, "color", color);
  };

  onChangeIntensity = intensity => {
    this.props.editor.setNodeProperty(this.props.node, "intensity", intensity);
  };

  onChangeRange = range => {
    this.props.editor.setNodeProperty(this.props.node, "range", range);
  };

  render() {
    const { node, editor } = this.props;

    return (
      <NodeEditor {...this.props} description={PointLightNodeEditor.description}>
        <InputGroup name="Color">
          <ColorInput value={node.color} onChange={this.onChangeColor} />
        </InputGroup>
        <NumericInputGroup
          name="Intensity"
          min={0}
          value={node.intensity}
          onChange={this.onChangeIntensity}
          unit="cd"
        />
        <NumericInputGroup name="Range" min={0} value={node.range} onChange={this.onChangeRange} unit="m" />
        <LightShadowProperties node={node} editor={editor} />
      </NodeEditor>
    );
  }
}
