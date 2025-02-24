import { useContext } from 'react';
import { CardContext } from '../context/context';

export default function Destination() {
    const { destinations } = useContext(CardContext)
    return (
        <section className="destination">
            <div className="navigation">
            <button className="nav-button"></button>
            <button className="nav-right"></button>
            </div>
            <div className="destinations-card">
                <div className="destinations">
                    <img src="https://ethiopia-e-visa.com/images/kigali-rwanda-the-city-centre-with-pension-plaza.webp" alt="" />
                   <h2>Kigali</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
                </div>
                <div className="destinations">
                    <img src="https://s3-alpha-sig.figma.com/img/80dd/5d9d/fbecb6b4f26bc944de8a49c1f1fe7022?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J5r7umCyOIUTIE4qSKHOb0RjJ1hlRKqRnpHWfXL37IguCWMr-BHo4qFrJ0qIlfeHtMJYJuSx7kD5RCs~1YzB3OYWYQ1fW2O7wvc3jpwj5jAKz1ioMsEWHzr2B5kVGjDEMcy43YDwofaq4L7IFc7OZ~Wf1DRqSn63Zg1MmlcoxdG7T-EZmy8L0D9rsigrncKa52zweY~8YsA8~grsp6Nr0fvgwVBiaL-~r5ZeApSGvTsUJAdUjMCqoQ0U8EqFbB4rKdRcxgj8TioZLPtmXKvgR~OrFj5ZAgiPkxdtU3a4TQTgwxCH6wGY4FZpflWYktenn7LH6nfkFoAtyrf03~lVBQ__" alt="" />
                   <h2>Huye</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
                </div>
                <div className="destinations">
                    <img src="https://s3-alpha-sig.figma.com/img/8617/a5ae/25ee4aa2ad522926670eec6990d4dfd8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UP29Azac3cX8pWZxMn2xUHolZi6N3GcG4cu2dJzjHMA36e1oJGBdYOPPsvpgMSD~nVBDU6SpWxC597ijxOEPzauC5qnWTNqXN6hHiRIv~Qgcgbt05LQI7URKsGlrXtQ~5Q0HWVhqocn-gDZj~dNfJrOs6nY6TGD1Bn2bPgcqK~QOKu57UBRKDo4Z5iu4KSc3kBgV13vvqUTyHb4AdLKPfh9vRzbpQU1uryoucsyFMgmhe9jLlM0Hu5TqlNgWVcwbbgr0~aUNcxyz4508Jc~PEatjUvMDoH8u5d3m69Jj~moQZ6ajBQLaNM099IIx3jWOpM1iZ3b19LDiEneog6KHyw__" alt="" />
                   <h2>Rubavu</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
                </div>
                <div className="destinations">
                    <img src="https://s3-alpha-sig.figma.com/img/fea2/604b/aee50bbe92ffcd58172c7b9db8afdd94?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AL8COtp~wV-lrXIaC0pYUY0RQu8s3uZ3Wz-X1oFTAwOsPV2ueruxdL8wkLL9jcV2TLf7nA22zB56Ah5NMxAczSi21jiocu8juQMYOOn0vmgD~6t1iM~kgbZALuDiu0~euC5~N9ltk7D3MfgY5n-owEaimkLrlxhw~EWSRW1RVHVRcwKWxonEsk3Ua2U2bbz1ko3sCk9AmxHj5InTMjGwZHrYTUVcLxsaDlRYdhwGVpRKwJVm11-WsHXJPD5o~E2P-29-Pdm8KDozG1FSF-2BH~Mx5gECqiL-BfDYqRhYZF8HoKeK9syYYKnDKBOBUqBuKFy6uqGxnARPUlHATGSOPA__" alt="" />
                   <h2>Musanze</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
                </div>
            </div>
        </section>
    );
}