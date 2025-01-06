import React from 'react';
import Container from '../../container/Container';
import './ContainerHome.css'

class ContainerHome extends React.Component {
    render() {
        return (
            <>
                <Container
                    leftContent={[
                        <h2 key="1">WE BUILD BREAK-</h2>,
                        <h2 key="2">THROUGH BRANDS</h2>
                    ]}
                    rightContent={[
                        <details key="1">
                            <summary>Branding</summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </details>,
                        <details key="2">
                            <summary>Packaging</summary>
                            <Container
                                leftContent={[
                                    <img src='/homeContainer.jpg' alt='' />
                                ]}
                                rightContent={[
                                    <p>We are a dynamic creative design agency dedicated to delivering innovative solutions.</p>
                                ]}

                            />
                        </details>,
                        <details key="3">
                            <summary>Editorial Design and Print Production</summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                        </details>,
                        <details key="4">
                            <summary>Digital Experiences</summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                        </details>,
                    ]}
                    ContainerClasname="container-home"
                />
            </>
        );
    }
}

export default ContainerHome;