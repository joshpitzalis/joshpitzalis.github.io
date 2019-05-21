// import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import React from "react";
// export default class TypeFormForm extends React.Component {
//   static propTypes = {
//     height: PropTypes.number
//   };

//   static defaultProps = {
//     height: 450
//   };

//   constructor(props) {
//     super(props);
//     this.state = { Form: null };
//   }

//   componentDidMount() {
//     const Form = require("react-typeform-embed").ReactTypeformEmbed;
//     this.setState({ Form });
//   }

//   render() {
//     const { height, ...formProps } = this.props;
//     const { Form } = this.state;
//     return (
//       <div style={{ height, position: "relative" }}>
//         {Form && <Form {...formProps} />}
//       </div>
//     );
//   }
// }

const ReactTypeformEmbed = dynamic(
  () => import("react-typeform-embed/lib/ReactTypeformEmbed"),
  {
    ssr: false
  }
);

export default () => (
  <div>
    <ReactTypeformEmbed
      url="https://josh407.typeform.com/to/hxjToF"
      style={{ width: "100%", height: "500px", position: "relative" }}
      hideHeaders
      hideFooter
      opacity={50}
    />
  </div>
);
