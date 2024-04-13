import React, { useEffect, useRef } from 'react';

function Controls () {


    const imgRefs = useRef([]);
    const containerRefs = useRef(null);
    const controlsRefs = useRef(null);
    const cardsControls = ['previous', 'next'];

    useEffect((e) => {
        const getContainer = () => {
            const imgElements = Array.from(document.querySelectorAll('.card-item'));
            imgRefs.current = imgElements;

            const cardsContainer = document.querySelector('.cards-container');
            containerRefs.current = cardsContainer;

            const cardsControlsContainer = document.querySelector('.cards-controls');
            controlsRefs.current = cardsControlsContainer;
        }

        getContainer();

        const updateGallery = () => {
            imgRefs.current.forEach(item => {
                item.classList.remove('card-item-1');
                item.classList.remove('card-item-2');
                item.classList.remove('card-item-3');
                item.classList.remove('card-item-4');
                item.classList.remove('card-item-5');
            })

            imgRefs.current.slice(0, 5).forEach((item, i) => {
                item.classList.add(`card-item-${i + 1}`)
            });
        };

        const setCurrentState = (direction) => {
            if (direction.className === 'cards-controls-previous') {
                imgRefs.current.unshift(imgRefs.current.pop());
            } else {
                imgRefs.current.push(imgRefs.current.shift());
            }
            updateGallery();
        }

        const setControls = () => {
            
            console.log(!window.location.href.includes('/adoption'))
            if (!window.location.href.includes('/adoption')) {
                return;
            }

            cardsControls.forEach(control => {
                controlsRefs.current.appendChild(document.createElement('button')).className = `cards-controls-${control}`
                document.querySelector(`.cards-controls-${control}`).innerHTML = control;
            });

            const triggers = [...controlsRefs.current.childNodes];
            triggers.forEach(control => {
                control.addEventListener('click', e => {
                    e.preventDefault();
                    setCurrentState(control); 
                });
            });
        }

        return () => {
            imgRefs.current = [];
            setControls();
        };
    }, []);

    return (
        <></>
    );
};

export default Controls;
