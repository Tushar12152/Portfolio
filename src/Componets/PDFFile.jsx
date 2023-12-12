import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import  { useState, useEffect } from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const ResumePDF = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    // Fetch the PDF data asynchronously
    fetch('https://drive.google.com/file/d/1cMVMp0FhiG_szAgILNAOy553-R5YMmzk/view?usp=sharing')
      .then(response => response.blob())
      .then(blob => setResumeData(URL.createObjectURL(blob)))
      .catch(error => console.error('Error fetching PDF:', error));
  }, []);

  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Your Resume:</Text>
            {resumeData && <iframe title="resume" src={resumeData} style={{ width: '100%', height: '100%' }} />}
            {!resumeData && <Text>Loading...</Text>}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumePDF;
