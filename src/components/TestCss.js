import React from 'react';

const TestCss = () => {
    return (
        <div className=''>
            <section className="relative overflow-hidden">
                <div style={{ opacity: 1, transform: "none" }}>
                    <span className=" bg-gradient-to-tr from-[#e32c6b] to-[#288cf9] w-full absolute white h-[1px] top-0 opacity-25"></span>
                    <span className="bg-gradient-180  from-[#58a5ff] to-[#a67af4] left-[-99px] absolute w-[28rem] h-96 top-[-227px]  rounded-full mix-blend-normal blur-2xl   dark:opacity-35 opacity-[0.15]"></span>
                    <span className=" dark:opacity-35 opacity-[0.15]"></span>
                </div>
                <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
                    <div style={{ opacity: 1, transform: "none" }}>
                        <h2 className="font-extrabold tracking-[-0.04em] leading-none text-[40px] md:text-5xl lg:text-[80px] max-w-lg md:max-w-xl lg:max-w-4xl text-center">
                            Let's move the web forward
                        </h2>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default TestCss;