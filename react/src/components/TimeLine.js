import React from "react";

class TimeLine extends React.Component {
    render() {

        return (
            <section className="relative min-h-screen h-[1400px] flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">


                        <div className="w-full max-w-4xl mx-auto">

                            <div
                                className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 h-[130px] rounded content-center border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_1")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">01.07-30.11</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white h-[130px] p-4 content-center rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900  md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_2")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">07.07-31.07</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 h-[130px] content-center rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_3")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">19.07-31.07</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 h-[130px] rounded content-center border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_4")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">05.08 12:00</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-[#FF3A3A] group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path className="bg-[#FF3A3A]" fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 h-[130px] rounded content-center border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_5")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg"> 08.08 18:00</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 h-[130px] content-center rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px] ">{this.props.t("timeline_info_6")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">05.08 12:00</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-[#FF3A3A] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="10">
                                            <path fill-rule="nonzero"
                                                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded content-center h-[130px] border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_7")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">19.07-31.07</time>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-slate-300 group-[.is-active]:bg-slate-300 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12"
                                             height="12">
                                            <path
                                                d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z"/>
                                        </svg>
                                    </div>
                                    <div
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded content-center h-[130px] border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="text-slate-900 md:w-[200px] lg:w-[250px]">{this.props.t("timeline_info_8")}</div>
                                            <time className="md:text-[13px] lg:text-[16px] font-medium text-white bg-[#1D1D1D] p-1 rounded-lg">05.08 12:00</time>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </section>


        );
    }
}

export default TimeLine;
