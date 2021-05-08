//import React libraries
import React, { Component } from 'react';
import ReactModal from 'react-modal';

//import styling
import modal_style from '../styles/Modal.module.scss'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ImageModalBox extends Component {
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

                <img src={this.props.children.props.src} className={this.props.children.props.className} onClick={this.handleOpenModal} />

                {console.log(this.props.children)}
                {console.log(this.props.children.props.src)}

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Modal Box"
                    overlayClassName={modal_style.overlay}
                    className={modal_style.content}>
                    <div className={modal_style.background}></div>

                    <FontAwesomeIcon icon={faTimes} className={modal_style.times} onClick={this.handleCloseModal} />

                    <main className={modal_style.inherit_box}>
                        <img src={this.props.children.props.src} className={modal_style.image} />
                    </main>

                </ReactModal>
            </div>
        );
    }
}

//export module as
export default ImageModalBox;