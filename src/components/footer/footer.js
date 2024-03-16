import React from 'react'

const Footer = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center   box-border  text-left text-lg-5 text-white font-jost">
      <div className="flex-1 flex flex-row items-start justify-start  max-w-full mq450:gap-[156.9000000000001px_20px] mq825:gap-[156.9000000000001px_39px] mq1275:gap-[156.9000000000001px_78px]">
        <div className="flex flex-col items-start justify-start pr-6 gap-[31.90000000000009px] mq1275:hidden">
          <div className="w-[160.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[7.700000000000045px] box-border gap-[13.799999999999956px] text-base-2">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0  gap-[4.599999999999909px] text-xl-8 text-white">
              <div className="relative font-medium z-[1] mq450:text-mid">
                More About Quill
              </div>
              <div className="self-stretch h-[2.3px] relative rounded-[18.48px] bg-blue-500 z-[1]" />
            </div>
            <div className="relative font-medium z-[1]">About Us</div>
            <div className="relative font-medium z-[1]">FAQs</div>
            <div className="relative font-medium z-[1]">
              Blockchains We Audit
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8.799999999999727px]">
            <div className="relative font-medium z-[1]">Contact Us:</div>
            <div className="flex flex-col items-start justify-start gap-[13.400000000000093px]">
              <div className="flex flex-row items-start justify-start gap-[9.6px]">
                <div className="flex flex-col items-start justify-start pt-[6.900000000000091px] px-0 pb-0">
                  <img
                    className="w-[23.1px] h-[16.2px] relative z-[1]"
                    alt=""
                    src="/email.svg"
                  />
                </div>
                <i className="relative [text-decoration:underline] tracking-[0.05em] whitespace-nowrap z-[1]">
                  audits@quillhash.com
                </i>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10.6px]">
                <div className="flex flex-col items-start justify-start pt-[4.599999999999909px] px-0 pb-0 box-border w-[23.09999999999991px] h-[23.09999999999991px]">
                  <img
                    className="w-[23.1px] h-[18.5px] relative z-[1]"
                    alt=""
                    src="/telegram.svg"
                  />
                </div>
                <i className="relative [text-decoration:underline] tracking-[0.05em] z-[1]">
                  t.me/quillaudits
                </i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8.800000000000182px]">
            <div className="flex flex-row items-start justify-start gap-[9.200000000000044px]">
              <div className="flex flex-col items-start justify-start pt-[2.300000000000182px] px-0 pb-0">
                <img
                  className="w-[16.2px] h-[20.8px] relative z-[1]"
                  alt=""
                  src="/location.svg"
                />
              </div>
              <div className="relative font-medium z-[1]">Our Location:</div>
            </div>
            <div className="relative z-[1]">
              <p className="m-0">Office 104/105 Level 1,</p>
              <p className="m-0">Emaar Square, Building 4</p>
              <p className="m-0">Sheikh Mohammed Bin Rashid</p>
              <p className="m-0">Boulevard Downtown Dubai,</p>
              <p className="m-0">United Arab Emirates</p>
              <p className="m-0">P.O box: 416654</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row   text-xl-8 text-white gap-3 mq825:gap-[90.19999999999982px_23px] mq1275:gap-[90.19999999999982px_45px] mq1275:max-w-full">
          <div className="flex flex-col items-start pt-1 justify-start gap-[4] mq825:hidden">
            <div className="relative font-medium z-[1] mq450:text-mid">
              Audit Services
            </div>
            <div className="flex flex-col items-start justify-start gap-[18.5px] text-base-2 text-white">
              <div className="w-[132.8px] h-[2.3px] relative rounded-[18.48px] bg-blue-500 z-[1]" />
              <div className="flex flex-col items-start justify-start gap-[13.866666666666674px]">
                <div className="relative font-medium z-[1]">Ethereum Audit</div>
                <div className="relative font-medium z-[1]">Polygon Audit</div>
                <div className="relative font-medium z-[1]">BSC Audit</div>
                <div className="relative font-medium z-[1]">Solana Audit</div>
                <div className="relative font-medium z-[1]">NEAR Audit</div>
                <div className="relative font-medium z-[1]">Algorand Audit</div>
                <div className="relative font-medium z-[1]">Tezos Audit</div>
                <div className="relative font-medium z-[1]">
                  Hyperledger Fabric Audit
                </div>
                <div className="relative font-medium z-[1]">L1 Audit</div>
                <div className="relative font-medium z-[1]">Polkadot Audit</div>
                <div className="relative font-medium z-[1]">Wallet Audit</div>
                <div className="relative font-medium z-[1]">ZkSync Audit</div>
                <div className="relative font-medium z-[1]">Starknet Audit</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row    mq825:max-w-full">
            <div className="flex-1 flex flex-col  gap-[86.79999999999973px]  mq450:gap-[22px_86.79999999999973px] mq825:gap-[43px_86.79999999999973px] mq825:max-w-full">
              <div className="w-[629.1px] flex flex-row items-start justify-start py-0 pr-[58px] pl-[75px] box-border max-w-full mq825:pl-[33px] mq825:pr-[33px] mq825:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[18.5px] max-w-full">
                  <div className="w-[437.8px] flex flex-col items-start justify-start gap-[4.600000000000136px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="relative font-medium z-[1] mq450:text-mid">
                        Quill Ecosystem
                      </div>
                      <div className="relative font-medium pr-6 z-[1] mq450:text-mid">
                        Other Services
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px]">
                      <div className="h-[2.3px] w-[145.5px] relative rounded-[18.48px] bg-blue-500 z-[1]" />
                      <div className="h-[2.3px] w-[136.3px] relative rounded-[18.48px] bg-blue-500 z-[1]" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-base-2 text-white mq825:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[13.866666666666712px]">
                      <div className="relative font-medium z-[1]">QuillAI</div>
                      <div className="relative font-medium z-[1]">
                        QuillCheck
                      </div>
                      <div className="relative font-medium z-[1]">
                        QuillShield
                      </div>
                      <div className="relative font-medium z-[1]">
                        QuillAcademy
                      </div>
                      <div className="relative font-medium z-[1]">
                        QuillMonitor
                      </div>
                      <div className="relative font-medium z-[1]">
                        Web3Suggest
                      </div>
                      <div className="relative font-medium z-[1]">
                        Explore All Tools
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[13.871428571428623px]">
                      <div className="relative font-medium z-[1]">
                        Red Teaming
                      </div>
                      <div className="relative font-medium z-[1]">
                        dApp Pentesting
                      </div>
                      <div className="relative font-medium z-[1]">
                        DeFi Diligence
                      </div>
                      <div className="relative font-medium z-[1]">
                        NFT Due Diligence
                      </div>
                      <div className="relative font-medium z-[1]">
                        Rug Pull Due Diligence
                      </div>
                      <div className="relative font-medium z-[1]">
                        Security Consultation
                      </div>
                      <div className="relative font-medium z-[1]">
                        Blockchain Forensics
                      </div>
                      <div className="relative font-medium z-[1]">
                        KYC (Know Your Customer)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start ">
                <div className="w-[157.1px] flex flex-col items-start justify-start gap-[4.700000000000273px]">
                  <div className="relative font-medium z-[1] mq450:text-mid">
                    Our Programmes
                  </div>
                  <div className="self-stretch h-[2.3px] relative rounded-[18.48px] bg-blue-500 z-[1]" />
                </div>
                <div className="self-stretch pt-2 flex flex-row items-start justify-start gap-[18.549999999999955px] mq825:flex-wrap">
                 
                  <button className="cursor-pointer [border:none] pt-[9.200000000000273px] pb-[9.399999999999636px] pr-[52px] pl-[51px] bg-[transparent] flex-[0.6812] rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] whitespace-nowrap z-[1] mq450:flex-1">
                    <div className="h-[23px] flex-1 relative text-base-2 font-medium font-jost text-white text-center flex items-center justify-center">
                     Refer-earn-secure
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] pt-[9.200000000000273px] pb-[9.399999999999636px] pr-[52px] pl-[51px] bg-[transparent] flex-[0.6812] rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] whitespace-nowrap z-[1] mq450:flex-1">
                    <div className="h-[23px] flex-1 relative text-base-2 font-medium font-jost text-white text-center flex items-center justify-center">
                      WAGSI Grants
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] pt-[9.199999999999818px] pb-[9.400000000000093px] pr-[26.200000000000273px] pl-[27.699999999999815px] bg-[transparent] flex-1 rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start box-border min-w-[154px] whitespace-nowrap z-[1]">
                    <div className="flex-1 relative text-base-2 font-medium font-jost text-white text-center">
                      Ambassador Program
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[200px] flex flex-col   text-base-2 text-white mq825:hidden">
              <div className="flex flex-row items-start justify-start py-0 pr-10 ">
                <div className="flex flex-col items-start justify-start gap-[4.600000000000136px]">
                  <div className="relative text-xl-8 font-medium text-white z-[1] mq450:text-mid">
                    Quick Links
                  </div>
                  <div className="w-[107.4px] flex flex-row items-start justify-start pt-0 px-0 pb-[13.899999999999864px] box-border">
                    <div className="h-[2.3px] flex-1 relative rounded-[18.48px] bg-blue-500 z-[1]" />
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.299999999999727px]">
                    <div className="relative font-medium z-[1]">Pricing</div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.299999999999956px]">
                    <div className="relative font-medium z-[1]">
                      Audit Process
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.199999999999818px]">
                    <div className="relative font-medium z-[1]">Our Audits</div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.299999999999956px]">
                    <div className="relative font-medium z-[1]">
                      Testimonials
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.199999999999818px]">
                    <div className="relative font-medium z-[1]">
                      Security Synopsis
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.300000000000182px]">
                    <div className="relative font-medium z-[1]">Blog</div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.299999999999727px]">
                    <div className="relative font-medium z-[1]">Clients</div>
                  </div>
                  <div className="w-[120.1px] flex flex-row items-start justify-start gap-[8.700000000000273px]">
                    <div className="relative font-medium z-[1]">Careers</div>
                    <div className="flex-1 rounded-[4.62px] bg-blue-500 flex flex-row items-start justify-start pt-[1.099999999999909px] px-[8.099999999999909px] pb-0.5 z-[1] text-center text-sm-9 text-white">
                      <div className="h-[23.1px] w-[55.4px] relative rounded-[4.62px] bg-blue-500 hidden" />
                      <div className="flex-1 relative font-medium z-[1]">
                        Hiring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className="cursor-pointer [border:none]  pt-[9.199999999999818px] pb-[9.400000000000093px] pr-[30.700000000000273px] pl-[31.199999999999815px] bg-[transparent] self-stretch rounded-[4.62px] [background:linear-gradient(267.25deg,_#7184fd_20%,_#3f7af0_50%,_#4f37ee)] shadow-[0px_11.5px_17.32px_-3.47px_rgba(0,_0,_0,_0.1),_0px_4.6px_6.93px_-4.62px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1]">
                <div className="flex-1 relative text-base-2 font-medium font-jost text-white text-center">
                  Partnership Program
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className='flex justify-center gap-3'>
    //      <div className="flex flex-col items-start justify-start gap-[31.90000000000009px] mq1275:hidden">
    //       <div className="w-[160.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[7.700000000000045px] box-border gap-[13.799999999999956px] text-base-2">
    //         <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[4.7000000000000455px] gap-[4.599999999999909px] text-xl-8 text-white">
    //           <div className="relative font-medium z-[1] mq450:text-mid">
    //             More About Quill
    //           </div>
    //           <div className="self-stretch h-[2.3px] relative rounded-[18.48px] bg-blue-500 z-[1]" />
    //         </div>
    //         <div className="relative font-medium text-white z-[1]">About Us</div>
    //         <div className="relative font-medium text-white z-[1]">FAQs</div>
    //         <div className="relative font-medium text-white z-[1]">
    //           Blockchains We Audit
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start justify-start gap-[8.799999999999727px]">
    //         <div className="relative font-medium z-[1] text-white">Contact Us:</div>
    //         <div className="flex flex-col items-start justify-start gap-[13.400000000000093px]">
    //           <div className="flex flex-row items-start justify-start gap-[9.6px]">
    //             <div className="flex flex-col items-start justify-start pt-[6.900000000000091px] px-0 pb-0">
    //               <img
    //                 className="w-[23.1px] h-[16.2px] relative z-[1]"
    //                 alt=""
    //                 src="/email.svg"
    //               />
    //             </div>
    //             <i className="relative [text-decoration:underline] text-white tracking-[0.05em] whitespace-nowrap z-[1]">
    //               audits@quillhash.com
    //             </i>
    //           </div>
    //           <div className="flex flex-row items-start justify-start gap-[10.6px]">
    //             <div className="flex flex-col items-start justify-start pt-[4.599999999999909px] px-0 pb-0 box-border w-[23.09999999999991px] h-[23.09999999999991px]">
    //               <img
    //                 className="w-[23.1px] h-[18.5px] relative z-[1]"
    //                 alt=""
    //                 src="/telegram.svg"
    //               />
    //             </div>
    //             <i className="relative [text-decoration:underline] tracking-[0.05em] text-white z-[1]">
    //               t.me/quillaudits
    //             </i>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start justify-start gap-[8.800000000000182px]">
    //         <div className="flex flex-row items-start justify-start gap-[9.200000000000044px]">
    //           <div className="flex flex-col items-start justify-start pt-[2.300000000000182px] px-0 pb-0">
    //             <img
    //               className="w-[16.2px] h-[20.8px] relative z-[1]"
    //               alt=""
    //               src="/location.svg"
    //             />
    //           </div>
    //           <div className="relative font-medium z-[1] text-white">Our Location:</div>
    //         </div>
    //         <div className="relative z-[1] text-white">
    //           <p className="m-0">Office 104/105 Level 1,</p>
    //           <p className="m-0">Emaar Square, Building 4</p>
    //           <p className="m-0">Sheikh Mohammed Bin Rashid</p>
    //           <p className="m-0">Boulevard Downtown Dubai,</p>
    //           <p className="m-0">United Arab Emirates</p>
    //           <p className="m-0">P.O box: 416654</p>
    //         </div>
    //       </div>
    //     </div>
        
    // </div>
  )
}

export default Footer