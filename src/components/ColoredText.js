import React from "react";
class ColoredText extends React.Component{
    
      render() {
        return (
          <>
           <div style={{color:this.props.color}} >{this.props.label}</div>
          </>
        );
      }
}
export default ColoredText;