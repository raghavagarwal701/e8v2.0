import React, { useState, useMemo, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from "./Questionnere.module.css";
import Question from "../Questions/Question";
import jsPDF from "jspdf";
import "jspdf-autotable";
import questionnaire from './QuestionsContent';
import essentialData from './EssentialData';


const Questionnere = (props) => {
const [updatedData, setUpdatedData] = useState({});

  const essentialNames = {
    essential1: "Application Control",
    essential2: "Patch Applications",
    essential3: "Configure Microsoft Office Macro Settings",
    essential4: "User Application Hardening",
    essential5: "Restrict Administrative Privileges",
    essential6: "Patch Operating Systems",
    essential7: "Multi-Factor Authentication",
    essential8: "Regular Backups",
  };

  const [userResponses, setUserResponses] = useState({});
  const [currentEssential, setcurrentEssential] = useState('essential1');
  const [currentLevel, setCurrentLevel] = useState(0);
  
  const handleOptionChange = (selectedOption) => {
    // Find the current essential questions based on the current essential and level
    const currentEssentialQuestions = questionnaire[currentEssential];
    // Calculate the selected percentage
    const totalOptions = currentEssentialQuestions[currentLevel].options.length;
    const selectedPercentage = (selectedOption.length / totalOptions) * 100;
    // console.log(selectedPercentage)
  
    // Update the user's answer for the current question
    const updatedQuestions = currentEssentialQuestions.map((question, index) =>
      index === currentLevel
        ? { ...question, choosedOption: selectedOption, selectedPercentage }
        : question
    );
  
    // Find the question text for the current question
    const currentQuestionKey = updatedQuestions[currentLevel].question;
  
    // Update the userResponses state with the percentage value categorized by essential and level
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [currentEssential]: {
        ...prevResponses[currentEssential],
        [currentLevel]: {
          selectedAnswers: {
            ...prevResponses[currentEssential]?.[currentLevel]?.selectedAnswers,
            [currentQuestionKey]: selectedOption,
          },
          percentages: {
            ...prevResponses[currentEssential]?.[currentLevel]?.percentages,
            [currentQuestionKey]: selectedPercentage,
          },
        },
      },
    }));
    // console.log(selectedOption)
    
// Check if it's the last question of the current level
// Check if it's the last question of the current level
if (currentLevel === currentEssentialQuestions.length - 1) {
  if (currentEssential === 'essential8' && currentLevel === 2) {
    setCurrentLevel(3);
  } else {
    // If it's the last question of the current level but not the last essential,
    // move to the next level within the same essential
    setCurrentLevel(0);
    setcurrentEssential((prevEssential) => {
      const currentEssentialNumber = parseInt(prevEssential.replace('essential', ''));
      return `essential${currentEssentialNumber + 1}`;
    });
  }
} else {
  // Otherwise, move to the next question in the current level
  setCurrentLevel((prevLevel) => prevLevel + 1);
}

};
  
  const currentEssentialQuestions = useMemo(
    () => questionnaire[currentEssential], // Access the current essential directly
    [currentEssential]
  );
  
  const isQuestionnaireCompleted = !currentEssentialQuestions || (currentEssential === 'essential8' && currentLevel === 3); // All essentials and levels are completed
  


  const generatePDFReport = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [210, 297],
      compress: true,
      lineHeight: 1.2,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    });
    let pageNumber = 3;
    const a4Width = 210; // Width of A4 in mm
    const a4Height = 297; // Height of A4 in mm
    const imagePath1 = "1-min.png";
    const imagePath2 = "2-min.png";
    const imagePath3 = "3-min.png";
    const logo = "Cyber Ethos Logo.png";
    const bg = "bg.png";
    // Calculate image dimensions to cover the full page
    const imageWidth = a4Width;
    const imageHeight = (a4Width * a4Height) / a4Width; // Maintain aspect ratio
    // Calculate the Y position to center the image vertically
    const imageY = (a4Height - imageHeight) / 2;
    const logoWidth = 53.17; // Adjust as needed
    const logoHeight = 23.82; // Adjust as needed
    const logoX = 10; // X-coordinate (in mm) for the left side margin
    const logoY = 10; // Y-coordinate (in mm) for the top margin
    const addPageNumber = () => {
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255); // Set text color to black
      doc.text(190, doc.internal.pageSize.height - 10, `Page ${pageNumber}`);
      pageNumber++; // Increment page number for the next page
    };
    // Add the image to the PDF
    doc.addImage(imagePath1, "PNG", 0, imageY, imageWidth, imageHeight);
    doc.addPage();
    doc.addImage(imagePath3, "PNG", 0, imageY, imageWidth, imageHeight);
    doc.addPage();
    doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
    doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
    addPageNumber();
    //printing title
    const titleFont = "bold Arial";
    const titleFontSize = 30;
    // const titleText = 'User Assessment Report';
    doc.setFont(titleFont);
    doc.setFontSize(titleFontSize);
    // Set the font color to yellow (RGB: 255, 255, 0)
    doc.setTextColor(251, 205, 50);
    // const titleTextWidth = doc.getTextWidth(titleText);
    // const centerX = (doc.internal.pageSize.width - titleTextWidth) / 2;
    // doc.text(centerX, 20, titleText);

    //printing article
    let y = 20 + logoHeight;
    const maxWidth = doc.internal.pageSize.width - 35;
    const articleContent = `Our Unique Proposition (USP):
Cyber Ethos stands out with its practitioner-led approach and commitment to customers. Our USP revolves around three key pillars:
1) Holistic Cybersecurity Strategies, providing comprehensive programs aligned with business objectives;
2) Translating Complexity into Actionable Insights, making cybersecurity understandable and enabling informed risk decisions; and
3) Empowering Cybersecurity Awareness and Education, bridging the knowledge gap within organizations.

Services Offered:
Our range of cybersecurity services includes managed services for proactive monitoring and incident response, advisory and consulting for tailored guidance, board-level expertise to align cybersecurity with business objectives, audits to identify gaps and compliance requirements, and vulnerability scanning with penetration testing to assess and improve your Cyber posture.

Introduction:
In today's rapidly evolving digital landscape, the security of your organisation's sensitive information and critical assets is paramount. As we embark on this journey of cybersecurity exploration, we are excited to present to you an assessment of your Essential 8 maturity based on your responses to our questionnaire. Our analysis examines the key aspects that directly impact your cybersecurity posture based on your responses. It offers a clear and non-technical understanding of your organisation's current state of cybersecurity preparedness from an Essential 8 perspective. This report aims to empower your decision-making by providing you what Cyber Ethos believes is your current state, from your responses. We hope this will assist you in an informed decision making in fortifying your defences and ensuring a robust cybersecurity foundation.
Thank you for entrusting us with this critical endeavour. We will reach out to you in the coming period to discuss your report and assisting you in safeguarding your digital future.

Understanding the ACSC and Essential 8:
The ACSC, a unit under the Australian Signals Directorate (ASD), plays a pivotal role in bolstering Australia's cybersecurity resilience. The E8 strategies are designed to provide essential guidance to businesses across various sectors. Contrary to common misconceptions, these strategies are not just for large corporations or government entities; they apply to businesses of all sizes, safeguarding their digital assets and sensitive data.

Conclusion:
With Cyber Ethos, businesses gain unparalleled cybersecurity expertise, customized strategies, and holistic solutions. Safeguard your data, secure your future, and gain a competitive edge. Contact us today by visiting our website www.cyberethos.com.au and/or by calling 1800 CETHOS (1800-238-467) and embark on a journey towards fortified cybersecurity and lasting success.
The following is an assessment of your current maturity level
based on your provided responses:
    `;
    let normalFontSize = 13;
    const largerFontSize = 18;
    const fontType = "helvetica";
    const articleLines = doc.splitTextToSize(articleContent, 390);
    let lineHeight = doc.getTextDimensions("M").h; // Use 'M' as a dummy character
    for (let i = 0; i < articleLines.length; i++) {
      const remainingPageSpace = doc.internal.pageSize.height - y;
      if (remainingPageSpace < lineHeight) {
        // Add a new page if remaining space is not enough for the next line
        doc.addPage();
        doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
        doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
        addPageNumber();
        y = 20 + logoHeight; // Reset y position for new page
      }
      if (
        articleLines[i].includes(
          "The following is an assessment of your current maturity level"
        )
      ) {
        doc.addPage();
        doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
        doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
        addPageNumber();
        y = 20 + logoHeight;
      }
      if (
        articleLines[i].includes("Introduction:") ||
        articleLines[i].includes("Understanding the ACSC and Essential 8:") ||
        articleLines[i].includes("Our Unique Proposition (USP):") ||
        articleLines[i].includes("Services Offered:") ||
        articleLines[i].includes("Conclusion:") ||
        articleLines[i].includes("Seeking Assistance:") ||
        articleLines[i].includes(
          "The following is an assessment of your current maturity level"
        ) ||
        articleLines[i].includes("based on your provided responses:")
      ) {
        doc.setFont(fontType);
        doc.setFontSize(largerFontSize);
        doc.setTextColor(251, 205, 50);
      } else {
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(normalFontSize);
      }
      doc.text(14, y, articleLines[i]);
      y += lineHeight;
    }

    doc.setFont(fontType);
    doc.setFontSize(largerFontSize);
    doc.setTextColor(251, 205, 50);
    // Define the positions for user data
    const userDataX = 17;
    let userDataY = y + lineHeight - 5; // Adjust the vertical position as needed

    // Add user data to the PDF
    doc.setTextColor(251, 205, 50);
    doc.text("Name:", userDataX, userDataY);
    doc.setTextColor(255, 255, 255); 
    // doc.setFontSize(normalFontSize);
    doc.text(updatedData.name, userDataX + doc.getTextWidth("Name:") + 5, userDataY);
    
    userDataY += lineHeight + 3;
    
    doc.setFontSize(largerFontSize);
    doc.setTextColor(251, 205, 50); 
    doc.text("Company Name:", userDataX, userDataY);
    
    doc.setTextColor(255, 255, 255); // Set color for the user data (e.g., updatedData.companyName)
    // doc.setFontSize(normalFontSize);
    doc.text(updatedData.companyName, userDataX + doc.getTextWidth("Company Name:") + 5, userDataY);
    
    userDataY += lineHeight+ 3;
    
    doc.setFontSize(largerFontSize);
    doc.setTextColor(251, 205, 50);
    doc.text("Phone:", userDataX, userDataY);
    
    doc.setTextColor(255, 255, 255);
    // doc.setFontSize(normalFontSize);
    doc.text(updatedData.phoneNumber, userDataX + doc.getTextWidth("Phone:") + 5, userDataY);
    
    userDataY += lineHeight+ 3;
    
    doc.setFontSize(largerFontSize);
    doc.setTextColor(251, 205, 50);
    doc.text("Email: ", userDataX, userDataY);
    doc.setTextColor(255, 255, 255);
    // doc.setFontSize(normalFontSize);
    doc.text(updatedData.email, userDataX + doc.getTextWidth("Email:")+ 5, userDataY);
    
    //adding table
    const tableMarginTop = 10;
    const tableStartPosition = userDataY + 35 - tableMarginTop;
    const tableElement = document.querySelector("table");
    // const tableHeight = doc.autoTable.previous.finalY + tableMarginTop;
    const tableStyles = {
      theme: "grid", // Use the grid theme for better visibility
      headStyles: {
        fillColor: [33, 31, 31], // Column headers background color (blue)
        textColor: [255, 255, 255], // Column headers text color (white)
        lineColor: [255, 255, 255], // Border color (white)
      },
      styles: {
        fontSize: 13,
        cellPadding: 2,
        valign: "middle",
        halign: "center",
        fillColor: [33, 31, 31], // Table background color (black)
        textColor: [255, 255, 255], // Text color (white)
        lineColor: [255, 255, 255], // Border color (white)
      },
    };
    // Add the table to the PDF with formatting
    doc.autoTable({
      html: tableElement,
      startY: tableStartPosition,
      ...tableStyles,
    });

    // Object.entries(minMaturityLevels).forEach(([essentialKey, response]) => {
    //   let maturityLevel = minMaturityLevels[essentialKey] || 0; 
    //   //let essentialName = essentialNames[essentialKey] || "";
    //   let essentialDescription = essentialData[essentialKey]?.description || "";
    //   let essentialRisks = essentialData[essentialKey][`maturity${maturityLevel}`]?.risks || "";
    //   let improvementSteps = essentialData[essentialKey][`maturity${maturityLevel}`]?.steps || "";
    //   doc.setTextColor(255, 255, 255);
    //   doc.setFontSize(normalFontSize);
    //   lineHeight = doc.getTextDimensions("M").h;
    //   console.log(maxWidth)
    //   console.log(lineHeight)
    //   let essentialDescriptionbr = doc.splitTextToSize(essentialDescription,maxWidth + 15);
    //   let essentialRisksbr = doc.splitTextToSize(essentialRisks, maxWidth + 15);
    //   let improvementStepsbr = doc.splitTextToSize(improvementSteps,maxWidth + 15);

    //   let essentialDescriptionLines = essentialDescriptionbr.length * lineHeight;
    //   let essentialRisksLines = essentialRisksbr.length * lineHeight;
    //   let improvementStepsLines = improvementStepsbr.length * lineHeight;

    //   doc.addPage();
    //   doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
    //   doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
    //   addPageNumber();
    //   y = 20 + logoHeight;

    //   doc.setFont(fontType);
    //   doc.setFontSize(largerFontSize);
    //   doc.setTextColor(251, 205, 50);
    //   doc.text(`About ${essentialNames[essentialKey]}:`, 12, y);
    //   y += lineHeight + 5;
    //   doc.setTextColor(255, 255, 255);
    //   doc.setFontSize(normalFontSize);
    //   doc.text(12, y, essentialDescriptionbr);
    //   y += essentialDescriptionLines + 15;

    //   doc.setFont(fontType);
    //   doc.setFontSize(largerFontSize);
    //   doc.setTextColor(251, 205, 50);
    //   doc.text("Current Maturity Level and Risks:", 12, y);
    //   y += lineHeight + 5;
    //   doc.setTextColor(255, 255, 255);
    //   doc.setFontSize(normalFontSize);
    //   doc.text(12, y, essentialRisksbr);
    //   y += essentialRisksLines + 15;

    //   doc.setFont(fontType);
    //   doc.setFontSize(largerFontSize);
    //   doc.setTextColor(251, 205, 50);
    //   doc.text("Next Steps to Improve Maturity Level:", 12, y);
    //   y += lineHeight + 5;
    //   doc.setTextColor(255, 255, 255);
    //   doc.setFontSize(normalFontSize);
    //   doc.text(12, y, improvementStepsbr);
    //   y += improvementStepsLines;
    // });





    Object.entries(essentialData).forEach(([essentialKey, essential]) => {
      const response = userResponses[essentialKey];
      const essentialDescription = essential.description || "";
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(normalFontSize);
      lineHeight = doc.getTextDimensions("M").h;
      let essentialDescriptionbr = doc.splitTextToSize(essentialDescription,maxWidth + 15);
      let essentialDescriptionLines = essentialDescriptionbr.length * lineHeight;
      doc.addPage();
      doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
      doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
      addPageNumber();
      y = 20 + logoHeight;
      doc.setFont(fontType);
      doc.setFontSize(largerFontSize);
      doc.setTextColor(251, 205, 50);
      doc.text(`About ${essentialNames[essentialKey]}:`, 12, y);
      y += lineHeight + 5;
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(normalFontSize);
      doc.text(12, y, essentialDescriptionbr);
      y += essentialDescriptionLines + 15;
      
      //maturity 1 print included and not included
        let includedindex = response[0].selectedAnswers[essential.maturity1.question];
        doc.setFont(fontType);
        doc.setFontSize(14);
        doc.setTextColor(251, 205, 50);
        let score = 0;
        if(response[0].percentages[essential.maturity1.question])score = response[0].percentages[essential.maturity1.question].toFixed(2);
        doc.text(`Your Score For ${essentialNames[essentialKey]} Maturity Level ${1} is :-  ${score}%`, 12, y);
        y += lineHeight + 5;
        if(includedindex && includedindex.length > 0){
          doc.setFont(fontType);
          doc.setFontSize(16);
          doc.setTextColor(251, 205, 50);
          doc.text(`Implemented Measures:`, 12, y);
          y += lineHeight + 5;
          for(let j = 0; j<includedindex.length; ++j){
            doc.setFont(fontType);
            doc.setFontSize(13);
            doc.setTextColor(255, 255, 255);
            let toprint = essential.maturity1.content[includedindex[j]][1];
            toprint = (j+1).toString() + ". " + toprint;
            let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
            let toprintLines = toprintbr.length * lineHeight;
            let remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLines) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(13);
            doc.text(12, y, toprintbr);
            y += toprintLines + 3;
            doc.setFontSize(11);
            const toprintdis = essential.maturity1.content[includedindex[j]][2];
            let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
            let toprintLinesdis = toprintbrdis.length * lineHeight;
            remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLinesdis) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(11);
            doc.text(12, y, toprintbrdis);
            y += toprintLinesdis + 5;
          }
          if(includedindex.length !== essential.maturity1.content.length){
            doc.setFont(fontType);
            doc.setFontSize(16);
            doc.setTextColor(251, 205, 50);
            doc.text(`Not Implemented Measures:`, 12, y);
            y += lineHeight + 5;
          }
          for (let i = 0; i < essential.maturity1.content.length; i++) {
            if (!includedindex.includes(i)) {
              doc.setFont(fontType);
              doc.setFontSize(13);
              doc.setTextColor(255, 255, 255);
              let toprint = essential.maturity1.content[i][1];
              toprint = (i+1).toString() + ". " + toprint;
              let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
              let toprintLines = toprintbr.length * lineHeight;
              let remainingPageSpace = doc.internal.pageSize.height - y - 15;
              if (remainingPageSpace < toprintLines) {
                doc.addPage();
                doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
                doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
                addPageNumber();
                y = 20 + logoHeight;
              }
              doc.setFontSize(13);
              doc.text(12, y, toprintbr);
              y += toprintLines + 3;
              doc.setFontSize(11);
              const toprintdis = essential.maturity1.content[i][2];
              let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
              let toprintLinesdis = toprintbrdis.length * lineHeight;
              remainingPageSpace = doc.internal.pageSize.height - y - 15;
              if (remainingPageSpace < toprintLinesdis) {
                doc.addPage();
                doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
                doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
                addPageNumber();
                y = 20 + logoHeight;
              }
              doc.setFontSize(11);
              doc.text(12, y, toprintbrdis);
              y += toprintLinesdis + 5;
            }
          }
        }
        else {
          doc.setFont(fontType);
          doc.setFontSize(16);
          doc.setTextColor(251, 205, 50);
          doc.text(`Not Implemented Measures:`, 12, y);
          y += lineHeight + 5;
          for (let i = 0; i < essential.maturity1.content.length; i++) {
            doc.setFont(fontType);
            doc.setFontSize(13);
            doc.setTextColor(255, 255, 255);
            let toprint = essential.maturity1.content[i][1];
            toprint = (i+1).toString() + ". " + toprint;
            let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
            let toprintLines = toprintbr.length * lineHeight;
            let remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLines) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(13);
            doc.text(12, y, toprintbr);
            y += toprintLines + 3;
            doc.setFontSize(11);
            const toprintdis = essential.maturity1.content[i][2];
            let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
            let toprintLinesdis = toprintbrdis.length * lineHeight;
            remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLinesdis) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(11);
            doc.text(12, y, toprintbrdis);
            y += toprintLinesdis + 5;
          }
        }

        //maturity 2
        includedindex = response[1].selectedAnswers[essential.maturity2.question];
        console.log(includedindex)
        doc.setFont(fontType);
        doc.setFontSize(14);
        doc.setTextColor(251, 205, 50);
        score = 0;
        if(response[1].percentages[essential.maturity2.question])score = response[1].percentages[essential.maturity2.question].toFixed(2);
        doc.text(`Your Score For ${essentialNames[essentialKey]} Maturity Level ${2} is :-  ${score}%`, 12, y);
        y += lineHeight + 5;
        if(includedindex && includedindex.length > 0){
          doc.setFont(fontType);
          doc.setFontSize(16);
          doc.setTextColor(251, 205, 50);
          doc.text(`Implemented Measures:`, 12, y);
          y += lineHeight + 5;
          for(let j = 0; j<includedindex.length; ++j){
            doc.setFont(fontType);
            doc.setFontSize(13);
            doc.setTextColor(255, 255, 255);
            let toprint = essential.maturity2.content[includedindex[j]][1];
            toprint = (j+1).toString() + ". " + toprint;
            let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
            let toprintLines = toprintbr.length * lineHeight;
            let remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLines) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(13);
            doc.text(12, y, toprintbr);
            y += toprintLines + 3;
            doc.setFontSize(11);
            const toprintdis = essential.maturity2.content[includedindex[j]][2];
            let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
            let toprintLinesdis = toprintbrdis.length * lineHeight;
            remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLinesdis) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(11);
            doc.text(12, y, toprintbrdis);
            y += toprintLinesdis + 5;
          }
          if(includedindex.length !== essential.maturity2.content.length){
            doc.setFont(fontType);
            doc.setFontSize(16);
            doc.setTextColor(251, 205, 50);
            doc.text(`Not Implemented Measures:`, 12, y);
            y += lineHeight + 5;
          }
          for (let i = 0; i < essential.maturity2.content.length; i++) {
            if (!includedindex.includes(i)) {
              doc.setFont(fontType);
              doc.setFontSize(13);
              doc.setTextColor(255, 255, 255);
              let toprint = essential.maturity2.content[i][1];
              toprint = (i+1).toString() + ". " + toprint;
              let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
              let toprintLines = toprintbr.length * lineHeight;
              let remainingPageSpace = doc.internal.pageSize.height - y - 15;
              if (remainingPageSpace < toprintLines) {
                doc.addPage();
                doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
                doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
                addPageNumber();
                y = 20 + logoHeight;
              }
              doc.setFontSize(13);
              doc.text(12, y, toprintbr);
              y += toprintLines + 3;
              doc.setFontSize(11);
              const toprintdis = essential.maturity2.content[i][2];
              let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
              let toprintLinesdis = toprintbrdis.length * lineHeight;
              remainingPageSpace = doc.internal.pageSize.height - y - 15;
              if (remainingPageSpace < toprintLinesdis) {
                doc.addPage();
                doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
                doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
                addPageNumber();
                y = 20 + logoHeight;
              }
              doc.setFontSize(11);
              doc.text(12, y, toprintbrdis);
              y += toprintLinesdis + 5;
            }
          }
        }
        else {
          doc.setFont(fontType);
          doc.setFontSize(16);
          doc.setTextColor(251, 205, 50);
          doc.text(`Not Implemented Measures:`, 12, y);
          y += lineHeight + 5;
          for (let i = 0; i < essential.maturity2.content.length; i++) {
            doc.setFont(fontType);
            doc.setFontSize(13);
            doc.setTextColor(255, 255, 255);
            let toprint = essential.maturity2.content[i][1];
            toprint = (i+1).toString() + ". " + toprint;
            let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
            let toprintLines = toprintbr.length * lineHeight;
            let remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLines) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(13);
            doc.text(12, y, toprintbr);
            y += toprintLines + 3;
            doc.setFontSize(11);
            const toprintdis = essential.maturity2.content[i][2];
            let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
            let toprintLinesdis = toprintbrdis.length * lineHeight;
            remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLinesdis) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(11);
            doc.text(12, y, toprintbrdis);
            y += toprintLinesdis + 5;
          }
        }



        //maturity 3
        includedindex = response[2].selectedAnswers[essential.maturity3.question];
        doc.setFont(fontType);
        doc.setFontSize(14);
        doc.setTextColor(251, 205, 50);
        score = 0;
        if(response[2].percentages[essential.maturity3.question])score = response[2].percentages[essential.maturity3.question].toFixed(2);
        doc.text(`Your Score For ${essentialNames[essentialKey]} Maturity Level ${3} is :-  ${score}%`, 12, y);
        y += lineHeight + 5;
        if(includedindex && includedindex.length > 0){
          doc.setFont(fontType);
          doc.setFontSize(16);
          doc.setTextColor(251, 205, 50);
          doc.text(`Implemented Measures:`, 12, y);
          y += lineHeight + 5;
          for(let j = 0; j<includedindex.length; ++j){
            doc.setFont(fontType);
            doc.setFontSize(13);
            doc.setTextColor(255, 255, 255);
            let toprint = essential.maturity3.content[includedindex[j]][1];
            toprint = (j+1).toString() + ". " + toprint;
            let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
            let toprintLines = toprintbr.length * lineHeight;
            let remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLines) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(13);
            doc.text(12, y, toprintbr);
            y += toprintLines + 3;
            doc.setFontSize(11);
            const toprintdis = essential.maturity3.content[includedindex[j]][2];
            let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
            let toprintLinesdis = toprintbrdis.length * lineHeight;
            remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLinesdis) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(11);
            doc.text(12, y, toprintbrdis);
            y += toprintLinesdis + 5;
          }
          if(includedindex.length !== essential.maturity3.content.length){
            doc.setFont(fontType);
            doc.setFontSize(16);
            doc.setTextColor(251, 205, 50);
            doc.text(`Not Implemented Measures:`, 12, y);
            y += lineHeight + 5;
          }
          for (let i = 0; i < essential.maturity3.content.length; i++) {
            if (!includedindex.includes(i)) {
              doc.setFont(fontType);
              doc.setFontSize(13);
              doc.setTextColor(255, 255, 255);
              let toprint = essential.maturity3.content[i][1];
              toprint = (i+1).toString() + ". " + toprint;
              let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
              let toprintLines = toprintbr.length * lineHeight;
              let remainingPageSpace = doc.internal.pageSize.height - y - 15;
              if (remainingPageSpace < toprintLines) {
                doc.addPage();
                doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
                doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
                addPageNumber();
                y = 20 + logoHeight;
              }
              doc.setFontSize(13);
              doc.text(12, y, toprintbr);
              y += toprintLines + 3;
              doc.setFontSize(11);
              const toprintdis = essential.maturity3.content[i][2];
              let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
              let toprintLinesdis = toprintbrdis.length * lineHeight;
              remainingPageSpace = doc.internal.pageSize.height - y - 15;
              if (remainingPageSpace < toprintLinesdis) {
                doc.addPage();
                doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
                doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
                addPageNumber();
                y = 20 + logoHeight;
              }
              doc.setFontSize(11);
              doc.text(12, y, toprintbrdis);
              y += toprintLinesdis + 5;
            }
          }
        }
        else {
          doc.setFont(fontType);
          doc.setFontSize(16);
          doc.setTextColor(251, 205, 50);
          doc.text(`Not Implemented Measures:`, 12, y);
          y += lineHeight + 5;
          for (let i = 0; i < essential.maturity3.content.length; i++) {
            doc.setFont(fontType);
            doc.setFontSize(13);
            doc.setTextColor(255, 255, 255);
            let toprint = essential.maturity3.content[i][1];
            toprint = (i+1).toString() + ". " + toprint;
            let toprintbr = doc.splitTextToSize(toprint,maxWidth + 15);
            let toprintLines = toprintbr.length * lineHeight;
            let remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLines) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(13);
            doc.text(12, y, toprintbr);
            y += toprintLines + 3;
            doc.setFontSize(11);
            const toprintdis = essential.maturity3.content[i][2];
            let toprintbrdis = doc.splitTextToSize(toprintdis,maxWidth + 15);
            let toprintLinesdis = toprintbrdis.length * lineHeight;
            remainingPageSpace = doc.internal.pageSize.height - y - 15;
            if (remainingPageSpace < toprintLinesdis) {
              doc.addPage();
              doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
              doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
              addPageNumber();
              y = 20 + logoHeight;
            }
            doc.setFontSize(11);
            doc.text(12, y, toprintbrdis);
            y += toprintLinesdis + 5;
          }
        }


    });



















    

        doc.addPage();
        doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
        doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
        addPageNumber();
        y = 20 + logoHeight;


    normalFontSize = 9;
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(normalFontSize);
    lineHeight = doc.getTextDimensions("M").h;
    const disclaimerContent = `


Disclaimer: The Essential 8 maturity report provided herewith by Cyber Ethos is based solely on the responses provided by the end user. While our utmost diligence and expertise have been exercised in the creation of this report, it is important to acknowledge that the accuracy and completeness of the findings are contingent upon the accuracy and completeness of the user's responses. As such, Cyber Ethos cannot be held liable for any actions, decisions, or outcomes that may arise from the reliance on this report until a comprehensive and further assessment, conducted by our team, has been undertaken to align the findings with the specific needs and nuances of your organisation's cybersecurity requirements. We strongly recommend engaging us in a more detailed evaluation by our experts to ensure an accurate and tailored cybersecurity maturity assessment.`;
    const disclaimerLines = doc.splitTextToSize(disclaimerContent,maxWidth + 10);
    for (let i = 0; i < disclaimerLines.length; i++) {
      const remainingPageSpace = doc.internal.pageSize.height - y;
      if (remainingPageSpace < lineHeight) {
        doc.addPage();
        doc.addImage(bg, "PNG", 0, imageY, imageWidth, imageHeight);
        doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
        addPageNumber();
        y = 20 + logoHeight; // Reset y position for new page
      }
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(normalFontSize);
      doc.text(14, y, disclaimerLines[i]);
      y += lineHeight;
    }

    doc.addPage();
    doc.addImage(imagePath2, "PNG", 0, imageY, imageWidth, imageHeight);
    return doc.output("blob"); // Return the PDF content as a Blob
  };

  const handleDownloadPDF = () => {
    const pdfBlob = generatePDFReport();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "user_report.pdf";
    link.click();
  };
  
  const navigate = useNavigate();
  useEffect(() => {
    if (isQuestionnaireCompleted) {
      eslint-disable-next-line
      axios
        .post("https://formbackend-as4m.onrender.com", updatedData)
        .then((res) => {
          const addedData = res.data;
          console.log(`POST: user is added`, addedData);
        })
        .catch((err) => {
          console.error(err);
        });
      generatePDFReport();
    }
  });

  useEffect(() => {
    const newUpdatedData = props.userData;
    newUpdatedData["userResponses"] = userResponses;
    setUpdatedData(newUpdatedData);
    if(!(props.userData.name)){
      navigate('/');
    }
    // eslint-disable-next-line
  }, [props.userData, userResponses]);

  return (
    <div className={classes.App}>
      {isQuestionnaireCompleted ? (
        <div style={{ backgroundColor: "#211F1F" }}>
          <header className={classes.header}>
                <div className={classes['logo-container']}>
                    <img
                        src="/Cyber Ethos Logo.png"
                        alt="Cyber Ethos Logo"
                        width={319.02}
                        height={142.92}
                        className={classes.logo}
                    />
                </div>
            </header>
                    <p className={classes['logo-text']}>Essential 8 Assessment</p>
          <h1 style={{ color: "rgb(251, 205, 50)" }}>
            Congratulations! You have completed the assessment.
          </h1>
<table style={{ border: "1px solid grey" }}>
  <thead>
    <tr>
      <th
        style={{
          backgroundColor: "#211F1F",
          color: "rgb(251, 205, 50)",
          border: "1px solid grey",
        }}
      >
        #
      </th>
      <th
        style={{
          backgroundColor: "#211F1F",
          color: "rgb(251, 205, 50)",
          border: "1px solid grey",
        }}
      >
        Mitigation Strategy
      </th>
      <th
        style={{
          backgroundColor: "#211F1F",
          color: "rgb(251, 205, 50)",
          border: "1px solid grey",
        }}
      >
        Maturity Level 1
      </th>
      <th
        style={{
          backgroundColor: "#211F1F",
          color: "rgb(251, 205, 50)",
          border: "1px solid grey",
        }}
      >
        Maturity Level 2
      </th>
      <th
        style={{
          backgroundColor: "#211F1F",
          color: "rgb(251, 205, 50)",
          border: "1px solid grey",
        }}
      >
        Maturity Level 3
      </th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(userResponses).map((essentialKey, index) => (
      <tr key={essentialKey}>
        <td
          style={{
            color: "rgb(251, 205, 50)",
            border: "1px solid grey",
          }}
        >
          {index + 1}
        </td>
        <td
          style={{
            color: "rgb(255, 255, 255)",
            border: "1px solid grey",
          }}
        >
          {essentialNames[essentialKey]}
        </td>
        <td
  style={{
    border: "1px solid grey",
  }}
>
  {userResponses[essentialKey] && userResponses[essentialKey][0] && 
    Object.keys(userResponses[essentialKey][0].percentages).map((questionKey) => {
      const percentage = userResponses[essentialKey][0].percentages[questionKey].toFixed(2);
      let color;

      if (percentage < 40) {
        color = "red";
      } else if (percentage >= 40 && percentage <= 80) {
        color = "yellow";
      } else {
        color = "green";
      }

      return (
        <div key={questionKey} style={{ color }}>
          {percentage}%
        </div>
      );
    })}
</td>

<td
  style={{
    border: "1px solid grey",
  }}
>
  {userResponses[essentialKey] && userResponses[essentialKey][1] && 
    Object.keys(userResponses[essentialKey][1].percentages).map((questionKey) => {
      const percentage = userResponses[essentialKey][1].percentages[questionKey].toFixed(2);
      let color;

      if (percentage < 40) {
        color = "red";
      } else if (percentage >= 40 && percentage <= 80) {
        color = "yellow";
      } else {
        color = "green";
      }

      return (
        <div key={questionKey} style={{ color }}>
          {percentage}%
        </div>
      );
    })}
</td>

<td
  style={{
    border: "1px solid grey",
  }}
>
  {userResponses[essentialKey] && userResponses[essentialKey][2] && 
    Object.keys(userResponses[essentialKey][2].percentages).map((questionKey) => {
      const percentage = userResponses[essentialKey][2].percentages[questionKey].toFixed(2);
      let color;

      if (percentage < 40) {
        color = "red";
      } else if (percentage >= 40 && percentage <= 80) {
        color = "yellow";
      } else {
        color = "green";
      }

      return (
        <div key={questionKey} style={{ color }}>
          {percentage}%
        </div>
      );
    })}
</td>

      </tr>
    ))}
  </tbody>
</table>

          <div>
            <h4 style={{ color: "rgb(251, 205, 50)" }}>
              For complet assessment download the report:
            </h4>
            <button onClick={handleDownloadPDF}>Download PDF</button>
          </div>
          <div style={{ color: "rgb(251, 205, 50)", marginTop: "20px" }}>
          </div>
          <div style={{color: "rgb(251, 205, 50)"}} >
            <p>
              Phone: 1800 CEthos (1800 238 467) <br />
              Email: <a href="mailto:info@cyberethos.com.au" style={{ color: "rgb(255, 255, 255)" }}>info@cyberethos.com.au</a> <br />
              Facebook: <a href="https://www.fb.com/CyberEthos" style={{ color: "rgb(255, 255, 255)" }}>fb.com/CyberEthos</a> <br />
              LinkedIn: <a href="https://www.linkedin.com/company/CyberEthos" style={{ color: "rgb(255, 255, 255)" }}>linkedin.com/company/CyberEthos</a>
            </p>
            <p style={{ margin: "0", fontSize: "1.2em" }}>
              THANK YOU! WE LOOK FORWARD TO SERVING YOU.
            </p>
            <p className={classes['disclaimer-text']}>
              Disclaimer: The Essential 8 maturity report provided herewith by Cyber Ethos is based solely on the responses provided by the end user. While our utmost diligence and expertise have been exercised in the creation of this report, it is important to acknowledge that the accuracy and completeness of the findings are contingent upon the accuracy and completeness of the user's responses. As such, Cyber Ethos cannot be held liable for any actions, decisions, or outcomes that may arise from the reliance on this report until a comprehensive and further assessment, conducted by our team, has been undertaken to align the findings with the specific needs and nuances of your organization's cybersecurity requirements. We strongly recommend engaging us in a more detailed evaluation by our experts to ensure an accurate and tailored cybersecurity maturity assessment.
            </p>
          </div>
        </div>
      ) : (
        <>
          {currentEssentialQuestions &&
            currentEssentialQuestions.length > 0 && (
              <Question
                question={
                  questionnaire[currentEssential][currentLevel]
                }
                onOptionChange={(selectedOption) =>
                  handleOptionChange(selectedOption)
                }
              />
            )}
        </>
      )}
    </div>
  );
};

export default Questionnere;
