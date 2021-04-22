//import React libraries
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//import styling
import modal_style from '../styles/Modal.module.scss'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModalBox extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
        //prevent body from scrolling on modalOpen
        document.body.style.overflow = 'hidden';
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        //remove scroll-lock when modalClose
        document.body.style.overflow = 'unset';

    }

    render() {
        return (
            <div className={modal_style.container}>
                <span
                    onClick={this.handleOpenModal}
                    className={modal_style.OpenButton}>
                    {(this.props.children[0].type == 'button') ? this.props.children[0].props.children : 'Open Modal'}
                </span>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Modal Box"
                    overlayClassName={modal_style.overlay}
                    className={modal_style.content}>
                    <div className={modal_style.background}></div>

                    <FontAwesomeIcon icon={faTimes} className={modal_style.times} onClick={this.handleCloseModal} />

                    <main className={modal_style.inherit_box}>
                        {this.props.children.map((item, i) => (
                            (i == 0) ? null : item
                        ))}
                    </main>

                </ReactModal>
            </div>
        );
    }
}

//export module as
export default ModalBox;