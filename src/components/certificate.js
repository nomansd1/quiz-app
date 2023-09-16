import { Grid, Typography,Container,Hidden } from '@mui/material'
import stylesheet from '../styles/certificate.module.css'
import Paper from '@mui/material/Paper';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, collection, addDoc,getFirestore } from 'firebase/firestore';
import { styled } from '@mui/material/styles';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import myPdf from '../../public/pdf/mycertificate.pdf'; // Adjust the path as needed
import React,{useEffect} from 'react'
import {app} from '../firebase'

export default function Certificate() {
  // Get a reference to the storage service
const storage = getStorage();
const db = getFirestore(app);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
// Function to add data to a collection
async function addLink(collectionName, data) {
  try {
    // Add the data to the collection
    const docRef = await addDoc(collection(db, collectionName), data);
    
    // Return the auto-generated ID
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error };
  }
}
 async function createPdf() {
  try {
    // Generate the PDF as you were doing
    // Load the PDF file using a relative path
    const pdfBytes = await fetch(myPdf).then((res) => res.arrayBuffer());
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText('Subhan Akram', {
      x: 290,
      y: 300,
      size: 40,
      color: rgb(0, 0, 0),
    });

    const pdfBytesModified = await pdfDoc.save();

    // Specify the desired filename with .pdf extension
    const customFilename = 'certificate.pdf';

    // Create a reference to the PDF file in Firebase Cloud Storage with the custom filename
    const pdfFileRef = ref(storage, `pdfs/${customFilename}`);

    // Upload the PDF file
    await uploadBytes(pdfFileRef, pdfBytesModified);

    console.log('PDF uploaded successfully');

    // Get the download URL for the uploaded PDF
    const pdfUrl = await getDownloadURL(pdfFileRef) + "?inline=true";

    // Save the custom link in Firestore
    const data = {
      link: pdfUrl,
    };
    const { id, error } = await addLink('pdfs', data);
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data added with ID:', id);
    }

    // Open the PDF in a new tab (you can also trigger a download)
    window.open(pdfUrl, '_blank');

    console.log('PDF manipulation complete.');
  } catch (error) {
    console.error('Error:', error);
  }
}

      

async function loadPdf() {
  try {
    const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/quiz-app-2710b.appspot.com/o/pdfs%2F%5Bobject%20Object%5D?alt=media&token=3d50f0c1-170c-4c66-84fc-39565707eea5'; // Replace with the actual URL of your PDF

    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfUrl);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

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