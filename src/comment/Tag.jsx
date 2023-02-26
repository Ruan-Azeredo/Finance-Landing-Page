import React from 'react'

export const Tag = () => {
    return (
        <div className='md:fixed hidden top-[85vh] rounded-md right-5 p-3 bg-blue-300 tag w-fit'>
            <div className='mb-2 font-medium mx-auto w-fit'>Projeto desenvolvido para Portifolio.</div>
            <div>Inspecione a página para visualizar a <span className='font-medium'>Responsividade</span>.</div>
            <style>{`
                .tag{
                    animation: 2s ease-in 5s forwards animation;
                    
                }

                @keyframes animation {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(120%);
                    }
                }
            `}</style>
        </div>
    )
}
