
import { PDFViewer } from '@react-pdf/renderer';
import PDfFile from  './PDFFile'

const RenderPDF = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <PDfFile />
    </PDFViewer>
  );
};

export default RenderPDF;
