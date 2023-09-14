import { Grid, Typography,Container,Hidden } from '@mui/material'
import stylesheet from '../styles/certificate.module.css'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import myPdf from '../../.next/static/pdf/mycertificate.pdf'; // Adjust the path as needed
import React,{useEffect} from 'react'
import {app} from '../firebase'

export default function Certificate() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      async function createPdf() {
        try {
          // Load the PDF file using a relative path
          const pdfBytes = await fetch(myPdf).then((res) => res.arrayBuffer());
      
          // Load the PDF document
          const pdfDoc = await PDFDocument.load(pdfBytes);
      
          // Embed fonts
          const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      
          // Create a new page
           // Get the first page of the document
   const pages = pdfDoc.getPages();
   const firstPage = pages[0];

   firstPage.drawText('Subhan Akram', {
    x: 290,
    y: 300,
    size: 40,
    color: rgb(0, 0, 0),
  });
      
          // Draw text on the page
          // const { width, height } = page.getSize();
          // const fontSize = 30;
          // page.drawText('This is Syed Hasnain Askari', {
          //   x: 50,
          //   y: height - 4 * fontSize,
          //   size: fontSize,
          //   font: timesRomanFont,
          //   color: rgb(0, 0.53, 0.71),
          // });
      
          // Save the modified PDF
          const pdfBytesModified = await pdfDoc.save();
      
          // Convert the PDF bytes to a blob
          const pdfBlob = new Blob([pdfBytesModified], { type: 'application/pdf' });
      
          // Create a URL for the modified PDF blob
          const pdfUrl = URL.createObjectURL(pdfBlob);
      
          // Open the PDF in a new tab (you can also trigger a download)
          window.open(pdfUrl, '_blank');
      
          // Clean up the URL object to release resources
          URL.revokeObjectURL(pdfUrl);
      
          console.log('PDF manipulation complete.');
        } catch (error) {
          console.error('Error:', error);
        }
      }
      

      async function loadPdf() {
        try {
          // Import the PDF file using a relative path
          // Adjust the path as needed
  
          // Load the PDF document
          const pdfDoc = await PDFDocument.load(pdfBytes);
          const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
          const page = pdfDoc.getPages()[0]; // Get the first page
          const { width, height } = page.getSize();
          const fontSize = 30;
  
          // Add text to the PDF
          page.drawText('This is added text.', {
            x: 50,
            y: height - 4 * fontSize,
            size: fontSize,
            font: helveticaFont,
            color: rgb(0, 0.53, 0.71),
          });
  
          // Save the modified PDF
          const modifiedPdfBytes = await pdfDoc.save();
  
          // Create a blob from the modified PDF bytes
          const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
  
          // Create a URL for the modified PDF blob
          const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);
  
          // Open the modified PDF in a new tab
          window.open(modifiedPdfUrl, '_blank');
  
          console.log('PDF manipulation complete.');
        } catch (error) {
          console.error('Error:', error);
        }
  
      }
     
  
  return (
    <div style={{background: "linear-gradient(20deg, rgba(9,42,245,0.711922268907563) 36%, rgba(176,6,158,0.8603816526610644) 59%)"}}>
    <Container maxWidth={'lg'}>
    <Grid  container sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:"80px"}}>
      <Grid item xs={12} md={5}>
        <h2 style={{textAlign:"left", fontSize:"2rem"}}>EF SET Certificate</h2>
        <div style={{paddingTop:"30px",paddingBottom:"24px"}}>
            <p style={{textAlign:"left",fontSize:"1rem",alignSelf:"auto"}}>
            Receive a free personalized online English certificate when you take the 50-minute English test. You can easily add it to your CV or LinkedIn profile.
            </p>
        </div>
        <div style={{paddingBottom:"50px"}}>
        <button onClick={createPdf} className={stylesheet.certificate__button}>Certify your English level</button>
        </div>
      </Grid>
         <Grid item xs={12} md={7}>
        <img style={{width:"100%",opacity:"0.5"}} src='https://a.storyblok.com/f/79503/468x467/2531d03856/certificate-image-desktop.svg'></img>
      </Grid>
    </Grid>
    </Container>
    </div>
  )
}
