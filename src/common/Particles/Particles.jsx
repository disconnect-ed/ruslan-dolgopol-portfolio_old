import React from "react";
import Particles from 'react-particles-js';
import './Particles.sass';

const ContainerForParticles = (props) => {
    return (
        <div className={'particles ' + props.color} >
            <Particles
                canvasClassName={'particles '}
                height="100vh"
                width="100%"
                params={{
                    particles: {
                        number: {
                            value: 300,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                    },
                }}/>

        </div>
    )
}

export default ContainerForParticles;