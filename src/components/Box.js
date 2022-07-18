import React from "react";

class Box extends React.Component {


    render(){

        const isWater = this.props.icon === "local_drink";

        return(
            <div className="box col-sm-3 col-6">
                <span className={this.props.icon === "favorite" ? "material-icons scale" : "material-icons"} style={{fontSize: 100, color:this.props.color}}>
                {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {this.props.icon !== "local_drink"  && <input id="typeinp" type="range" step={this.props.icon === "directions_walk" ? 1000 : 1} min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}/>}
            </div>  
        )
    }
}

export default Box;