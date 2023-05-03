import React, { useRef, useEffect } from "react";
import grapesjs from "grapesjs";

var editor =''; // global variable
export default function Grapes() {
  const grapesRef = useRef(null);

  useEffect(() => {
     editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: grapesRef.current,
      height: "100%",
      fromElement: true,
      storageManager: { autoload: 0 },
      styleManager: {
        sectors: [
          {
            name: "General",
            open: false,
            buildProps: [
              "float",
              "display",
              "position",
              "top",
              "right",
              "left",
              "bottom",
            ],
          },
          {
            name: "Flex",
            open: false,
            buildProps: [
              "flex-direction",
              "flex-wrap",
              "justify-content",
              "align-items",
              "align-content",
              "order",
              "flex-basis",
              "flex-grow",
              "flex-shrink",
              "align-self",
            ],
          },
          {
            name: "Dimension",
            open: false,
            buildProps: [
              "width",
              "height",
              "max-width",
              "min-height",
              "margin",
              "padding",
            ],
          },
          {
            name: "Typography",
            open: false,
            buildProps: [
              "font-family",
              "font-size",
              "font-weight",
              "letter-spacing",
              "color",
              "line-height",
              "text-shadow",
            ],
          },
          {
            name: "Decorations",
            open: false,
            buildProps: [
              "border-radius-c",
              "background-color",
              "border-radius",
              "border",
              "box-shadow",
              "background",
            ],
          },
          {
            name: "Extra",
            open: false,
            buildProps: ["transition", "perspective", "transform"],
          },
        ],
      },
    });

    // editor.BlockManager.add("testBlock", {
    //   label: "Block",
    //   attributes: { class: "gjs-fonts gjs-f-b1" },
    //   content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`,
    // });
    return () => {};
  }, []);
const onExportBtnClick =()=>{
  console.log('exporting')
  // console.log(grapesjs.getHtml())
  // console.log(grapesjs.getCss())
  // console.log(grapesjs.getJson())
  console.log(editor.getComponents())
}
  return <>
  <button onClick={onExportBtnClick}>Export</button>
  <div id="gjs" ref={grapesRef}></div>;
  </>
}
