import React, { useEffect, useRef } from "react";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// import { Container } from './styles';

const pdfEditor: React.FC = () => {
  const frame = useRef<HTMLIFrameElement | null>(null);

  const createPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const form = pdfDoc.getForm();
    const { width, height } = page.getSize();
    const sideTextField = form.createTextField("sideText");
    sideTextField.setText(
      "Creating PDFs in JavaScript is awesome! auhauhsidhaiuhsdiaushdiaushdiaushdui"
    );

    sideTextField.addToPage(page, {
      x: width - 150,
      y: 0,
      width: 150,
      height: height,
      textColor: rgb(0, 0, 0),
      backgroundColor: rgb(0.6, 0.01, 0.01),
      font: timesRomanFont,
    });

    sideTextField.setFontSize(18);

    // const fontSize = 30;
    // page.drawText("Creating PDFs in JavaScript is awesome!", {
    //   x: 50,
    //   y: height - 4 * fontSize,
    //   size: fontSize,
    //   font: timesRomanFont,
    //   color: rgb(0, 0.53, 0.71),
    // });

    //   const pdfBytes = await pdfDoc.save()
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

    if (frame.current) {
      frame.current.src = pdfDataUri;
    }
  };

  useEffect(() => {
    createPdf();
  }, []);

  return (
    <div>
      <iframe ref={frame} style={{ width: "100vw", height: "100vh" }}></iframe>
    </div>
  );
};

export default pdfEditor;
