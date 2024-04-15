import { FunctionComponent } from "react";
import ImageRecognizer from "./ImageRecognizer";
import styles from "./UserAnalytics.module.css";

export const UserAnalytics: FunctionComponent = () => {
  return (
    <div className={styles.userAnalytics}>
      <div className={styles.more}>
        <div className={styles.dropdown}>
          <div className={styles.dropdownField}>
            <img className={styles.mdIcon} alt="" src="/main.png" />
          </div>
        </div>
      </div>
      <div className={styles.imageRecognizerWrapper}>
        <ImageRecognizer />
      </div>
      <section className={styles.userAnalyticsInner}>
        <div className={styles.errorHandlerParent}>
          <div className={styles.errorHandler}>
            <div className={styles.eventDispatcher}>
              <div className={styles.analyticsDashboard}>
                <b>
                  <span className={styles.analytics}>Analytics</span>
                  <span>{` `}</span>
                </b>
                <span>
                  <span className={styles.dashboard}>Dashboard</span>
                </span>
              </div>
            </div>
            <div className={styles.smallActivityParent}>
              <div className={styles.smallActivity}>
                <div className={styles.labelParent}>
                  <div className={styles.label}>GPoints</div>
                  <b className={styles.cash}>156,847</b>
                </div>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button}>
                    <div className={styles.background}>
                      <div className={styles.backgroundChild} />
                      <div className={styles.backgroundItem} />
                    </div>
                    <div className={styles.textWrapper}>
                      <div className={styles.text}>
                        <div className={styles.buy}>{`BUY `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wallet}>
                <div className={styles.dropdown1}>
                  <div className={styles.dropdownField1}>
                    <img
                      className={styles.mdImageIcon}
                      alt=""
                      src="/md_image.png"
                    />
                    <div className={styles.text1}>0xb98...3c5e</div>
                    <img
                      className={styles.mdRightIcon}
                      alt=""
                      src="/md_right_icon.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <nav className={styles.smallEarningsParent}>
                <div className={styles.smallEarnings}>
                  <img className={styles.icon} alt="" src="/Icon.png" />
                  <div className={styles.labelGroup}>
                    <div className={styles.label1}>Total Balance</div>
                    <b className={styles.cash1}>$350.40</b>
                  </div>
                </div>
                <div className={styles.smallEarningsWrapper}>
                  <div className={styles.smallEarnings1}>
                    <div className={styles.iconParent}>
                      <img className={styles.icon1} alt="" src="/Icon2.png" />
                      <img
                        className={styles.videoCardSvgrepocomIcon}
                        alt=""
                        src="/video-card_svgrepocom.png"
                      />
                    </div>
                    <div className={styles.labelContainer}>
                      <b className={styles.label2}>Avg Order Value</b>
                      <b className={styles.cash2}>8 GPU's</b>
                    </div>
                  </div>
                </div>
                <div className={styles.smallNewClients}>
                  <div className={styles.functionChain}>
                    <img
                      className={styles.functionChainChild}
                      alt=""
                      src="/group-41.png"
                    />
                    <img
                      className={styles.timeSvgrepocomIcon}
                      loading="lazy"
                      alt=""
                      src="/time_svgrepocom.png"
                    />
                  </div>
                  <div className={styles.logicalOperator}>
                    <div className={styles.shapeManager}>
                      <b className={styles.label3}>Avg Rent Duration</b>
                      <div className={styles.noClientsParent}>
                        <b className={styles.noClients}>3 Hours 38 Minutes</b>
                        <img
                          className={styles.graphIcon}
                          loading="lazy"
                          alt=""
                          src="/Graph.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className={styles.largeBalance}>
                <div className={styles.progressBar}>
                  <div className={styles.slider}>
                    <div className={styles.tabContainer}>
                      <b className={styles.title}>Daily GPoints Earning</b>
                    </div>
                    <div className={styles.savesContent}>
                      <div className={styles.tableManager}>
                        <div className={styles.today}>Today</div>
                        <b className={styles.gpoints}>590 GPoints</b>
                      </div>
                      <div className={styles.wrapper}>
                        <b className={styles.b}>+2.45%</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.toggleSwitch}>
                    <div className={styles.modalWindow}>
                      <b className={styles.daily}>Daily</b>
                      <img
                        className={styles.arrowDropUpIcon}
                        alt=""
                        src="/arrow_drop_up.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.dialogueBox} />
                <div className={styles.dropdownList}>
                  <div className={styles.dropdownTree}>
                    <div className={styles.k}>6k</div>
                    <div className={styles.k1}>5k</div>
                    <div className={styles.carousel}>
                      <div className={styles.k2}>4k</div>
                      <div className={styles.k3}>3k</div>
                      <div className={styles.navbar}>
                        <div className={styles.k4}>2k</div>
                      </div>
                      <div className={styles.footer}>
                        <div className={styles.header}>
                          <div className={styles.k5}>1k</div>
                        </div>
                        <div className={styles.gridContainer}>0</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.stackContainer}>
                    <div className={styles.boxContainer}>
                      <div className={styles.columnContainer}>
                        <div className={styles.rowContainer}>
                          <div className={styles.emptyChartParent}>
                            <div className={styles.emptyChart} />
                            <div className={styles.fillChart} />
                          </div>
                          <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <div className={styles.fillChart1} />
                          </div>
                          <div className={styles.emptyChartGroup}>
                            <div className={styles.emptyChart1} />
                            <div className={styles.fillChart2} />
                          </div>
                          <div className={styles.emptyChartContainer}>
                            <div className={styles.emptyChart2} />
                            <div className={styles.fillChart3} />
                          </div>
                          <div className={styles.lineParent}>
                            <div className={styles.frameItem} />
                            <div className={styles.frameInner} />
                            <div className={styles.lineDiv} />
                            <div className={styles.modalStack} />
                            <div className={styles.focusRing}>
                              <div className={styles.emptyChart3} />
                              <div className={styles.fillChart4} />
                            </div>
                          </div>
                          <div className={styles.frameDiv}>
                            <div className={styles.emptyChart4} />
                            <div className={styles.fillChart5} />
                          </div>
                          <div className={styles.emptyChartParent1}>
                            <div className={styles.emptyChart5} />
                            <div className={styles.fillChart6} />
                          </div>
                          <div className={styles.emptyChartParent2}>
                            <div className={styles.emptyChart6} />
                            <div className={styles.fillChart7} />
                          </div>
                          <div className={styles.emptyChartParent3}>
                            <div className={styles.emptyChart7} />
                            <div className={styles.fillChart8} />
                          </div>
                          <div className={styles.emptyChartParent4}>
                            <div className={styles.emptyChart8} />
                            <div className={styles.fillChart9} />
                          </div>
                          <div className={styles.emptyChartParent5}>
                            <div className={styles.emptyChart9} />
                            <div className={styles.fillChart10} />
                          </div>
                          <div className={styles.emptyChartParent6}>
                            <div className={styles.emptyChart10} />
                            <div className={styles.fillChart11} />
                          </div>
                        </div>
                        <div className={styles.tooltipTracker} />
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.janWrapper}>
                        <div className={styles.jan}>JAN</div>
                      </div>
                      <div className={styles.febWrapper}>
                        <div className={styles.feb}>FEB</div>
                      </div>
                      <div className={styles.marWrapper}>
                        <div className={styles.mar}>MAR</div>
                      </div>
                      <div className={styles.aprWrapper}>
                        <div className={styles.apr}>APR</div>
                      </div>
                      <div className={styles.mayWrapper}>
                        <div className={styles.may}>MAY</div>
                      </div>
                      <div className={styles.junWrapper}>
                        <div className={styles.jun}>JUN</div>
                      </div>
                      <div className={styles.julWrapper}>
                        <div className={styles.jul}>JUL</div>
                      </div>
                      <div className={styles.augWrapper}>
                        <div className={styles.aug}>AUG</div>
                      </div>
                      <div className={styles.sepWrapper}>
                        <div className={styles.sep}>SEP</div>
                      </div>
                      <div className={styles.octWrapper}>
                        <div className={styles.oct}>OCT</div>
                      </div>
                      <div className={styles.nov}>NOV</div>
                      <div className={styles.dec}>DEC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.smallChartParent}>
                <div className={styles.smallChart}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.labelParent1}>
                        <div className={styles.label4}>
                          Rented / Listed Percentage
                        </div>
                        <div className={styles.cashWrapper}>
                          <b className={styles.cash3}>40%</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameWrapper2}>
                      <div className={styles.frameParent2}>
                        <div className={styles.labelParent2}>
                          <b className={styles.label5}>Listed GPU</b>
                          <b className={styles.label6}>Rented GPU</b>
                        </div>
                        <div className={styles.frameWrapper3}>
                          <div className={styles.noClientsGroup}>
                            <b className={styles.noClients1}>65</b>
                            <b className={styles.noClients2}>26</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.smallChartChild} />
                </div>
                <div className={styles.top} />
                <div className={styles.keycontainer}>
                  <div className={styles.frameParent3}>
                    <div className={styles.rectangleWrapper}>
                      <div className={styles.rectangleDiv} />
                    </div>
                    <div className={styles.listed}>Listed</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild2} />
                    </div>
                    <div className={styles.rented}>Rented</div>
                  </div>
                </div>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-2.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
)}