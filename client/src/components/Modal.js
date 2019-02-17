import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Mega from "../images/mega.png";

const SummaryDiv = styled.div`
  color: lightblack;
`;
const ButtDiv = styled.div`
  float: right;
`;

const MegaImg = styled.img`
  height: 25px;
  float: right;
  margin-top: -27px;
`;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')

class Modals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: props.modalIsOpen
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <MegaImg src={Mega} onClick={this.openModal} />

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{
            overlay: { zIndex: "100000" },
            content: {
              background: "#ffde59",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              display: "flex"
            }
          }}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Fresh Tacos BOGO!
          </h2>
          <SummaryDiv>
            <div>
              Hot and Fresh, Chicken or Beef; supplies limited so come and git
              it!
            </div>
          </SummaryDiv>
          <ButtDiv>
            <br />
            <button onClick={this.closeModal}>close</button>
          </ButtDiv>
        </Modal>
      </div>
    );
  }
}

export default Modals;
