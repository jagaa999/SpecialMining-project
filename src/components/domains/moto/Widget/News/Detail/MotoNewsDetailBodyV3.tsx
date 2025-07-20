import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import PanelMain from "atomv2/components/Panel/PanelMain";

export default function MotoNewsDetailBodyV3({
  item,
  ...props
}: {
  item: any;
}) {
  return (
    <PanelMain className="pt-0">
      <RenderAtom
        value={item?.body}
        type="clob"
        className="block {newcarDetailText} motoNewsBodyWrapper"
        thumbTitle={item?.title}
        {...props}
      />

      <style>
        {`
                .motoNewsBodyWrapper .atomClobBody h3,
                .motoNewsBodyWrapper .atomClobBody h3 span { 
                 
                }

                .motoNewsBodyWrapper .atomClobBody span,
                .motoNewsBodyWrapper .atomClobBody div,
                .motoNewsBodyWrapper .atomClobBody p,
                .motoNewsBodyWrapper .atomClobBody blockquote,
                .motoNewsBodyWrapper .atomClobBody figcaption {
                  font-size:17px !important; 
                  line-height: 28px !important; 
                  color: #404040 !important;
                  font-family: Roboto !important;
                  margin: 30px 0 !important; 
                  overflow-wrap: break-word !important;
                  text-align: justify;
                }

                .motoNewsBodyWrapper .atomClobBody .moto-half-block,
                .motoNewsBodyWrapper .atomClobBody .moto-third-block {
                  margin: 0 !important; 
                }

                 {
                  font-size:17px !important; 
                  line-height: 28px !important; 
                  color: #404040 !important;
                  font-family: Roboto !important;
                  margin: 30px 0 !important; 
                  overflow-wrap: break-word !important;
                }

                .motoNewsBodyWrapper .atomClobBody .img-wrapper-span {
                  margin: auto !important;
                  max-width: 500px !important;
                  display: block !important;
                  position: relative !important;
                }

                .motoNewsBodyWrapper .atomClobBody img {
                  margin: 2px auto !important; 
                  display: flow;
                  max-width: 100% !important; 
                  height: auto !important;
                  border-radius: 10px !important;
                }

                .motoNewsBodyWrapper .atomClobBody ul {
                  list-style-type: disc;
                  padding-left: 25px;
                }
                
              `}
      </style>
    </PanelMain>
  );
}
