import React, {Component} from 'react';

// returns a FUNCtional H.o.C
// const WithClassV2 = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             {/* need to just pass props...do not ever change the wrapped component */}
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// returns a H.O.C STATEFUL component 
const WithClassV2 = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    {/* need to just pass props...do not ever change the wrapped component */}
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />;
    });
};

export default WithClassV2;