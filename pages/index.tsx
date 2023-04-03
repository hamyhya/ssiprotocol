import React from 'react'
import type { NextPage } from 'next'
import { Header, Footer } from '../src/components'
import Image from 'next/image'
import xWall from '../src/images/H_xWallets.svg'
import NFT from '../src/images/H_NFT.svg'
import RecSoc from '../src/images/H_RecSoc.svg'
import SocTree from '../src/images/H_SocTree.svg'
import Commun from '../src/images/H_Commun.svg'
import DIDx from '../src/images/H_DIDx.svg'
import ZILx from '../src/images/H_ZILx.svg'
import SBT from '../src/images/H_SBT.svg'
import DomName from '../src/images/H_DomName.svg'
import Tydra from '../src/images/H_Tydra.svg'
import Lssi from '../src/images/H_Lssi.svg'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Component: NextPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="h_header">
                <Header />
            </div>
            <div className="h_headWrapper">
                <div>
                    <Image className="h_headIco" src={xWall} alt="menu-ico" />
                </div>
                <div>
                    <Image className="h_headIco" src={NFT} alt="menu-ico" />
                </div>
                <div>
                    <Image className="h_headIco" src={RecSoc} alt="menu-ico" />
                </div>
                <div>
                    <Image className="h_headIco" src={SocTree} alt="menu-ico" />
                </div>
                <div>
                    <Image className="h_headIco" src={Commun} alt="menu-ico" />
                </div>
            </div>
            <div
                id="#xwallets"
                className="aboutTxt"
                style={{ marginTop: '10rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={DIDx}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">DIDxWALLET</div>
                        <div className="h_txtContent">
                            {t(
                                'index1'
                            )}
                            <br />
                            {t(
                                'index2'
                            )}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={ZILx}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">
                            ZIL STAKING xWALLET
                        </div>
                        <div className="h_txtContent">
                            {t(
                                'index3'
                            )}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={SBT}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">SBTxWALLET</div>
                        <div className="h_txtContent">
                            {t(
                                'index4'
                            )}
                            <br />
                            {t(
                                'index5'
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div
                id="#socrec"
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">
                            {t('SOCIAL RECOVERY')}
                        </div>
                        <div className="h_txtContent">
                            {t(
                                'index6'
                            )}
                        </div>
                    </div>
                    <Image
                        className="h_imgContentRight"
                        src={RecSoc}
                        alt="content-ico"
                    />
                </div>
                <br />
            </div>
            <br />
            <br />
            <br />
            <div id="#nft" className="aboutTxt" style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={DomName}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">
                            {t('NFT DOMAIN NAME')}
                        </div>
                        <div className="h_txtContent">
                            {t(
                                'index7_nft'
                            )}
                            <br />
                            {t(
                                'index8_nft'
                            )}
                            <br />
                            {t(
                                'index8b_nft'
                            )}
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={Tydra}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">TYDRAS</div>
                        <div className="h_txtContent">
                            {t(
                                "index9_tot"
                            )}{' '}
                            {t(
                                'index10_tot'
                            )}
                            <br />
                            <strong>{t(
                                'index11_tot'
                            )}</strong>
                            
                            <br />
                            <strong>{t(
                                'index12_tot'
                            )}</strong> 
                            <br />
                            {t(
                                'index13_tot'
                            )}
                            <a href="https://www.tyron.io/origin/">
                                {t('index14_tot')}
                            </a>
                            ,{' '}
                            {t(
                                'index15_tot'
                            )}
                            
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={Lssi}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">LEXICA.SSI</div>
                        <div className="h_txtContent">
                            {t('index_lexica1')}
                        <a href="http://lexica.art/">
                                lexica.art</a>
                            {t('index_lexica2')}
                            <br />
                            {t('index_lexica3')}
                            <br />
                            {t('index_lexica4')}
                               
                            </div>
                    </div>
                </div>
    
                <br />
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">.gZil</div>
                        <div className="h_txtContent">
                            {t('index_gzil1')}
                            {t('index_gzil2')}
                            <br />
                            {t('index_gzil3')}
                                 
                            </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div
                id="#socialtree"
                className="aboutTxt"
                style={{ marginTop: '2rem' }}
            >
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '80%' }}>
                        <div className="h_titleContent">{t('SOCIAL TREE')}</div>
                        <div className="h_txtContent">
                            {t(
                                'index13'
                            )}
                            <br />
                            {t(
                                'index14'
                            )}
                            <br />
                            {t("index15")}{' '}
                            <a href="www.tyron.network/ssiprotocol">
                                www.tyron.network/ssiprotocol
                            </a>
                        </div>
                    </div>
                    <Image
                        className="h_imgContentRight"
                        src={SocTree}
                        alt="content-ico"
                    />
                </div>
                <br />
            </div>
            <br />
            <br />
            <br />
            <div
                id="#community"
                className="aboutTxt"
                style={{ marginTop: '2rem', marginBottom: '100px' }}
            >
                <div style={{ display: 'flex' }}>
                    <Image
                        className="h_imgContent"
                        src={Commun}
                        alt="content-ico"
                    />
                    <div style={{ width: '80%' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            COMMUNITY.SSI
                        </div>
                        {t(
                            'COMMUNITY_1'
                        )}
                        <br />
                        <br />
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('TYRON Token')}
                        </div>
                        {t(
                            'TYRON_1'
                        )}
                        <br />
                        <br />
                        <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            {t('Self-Sovereign Identity Dollar')}
                        </div>
                        {t(
                            '$SI_1'
                        )}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default Component
