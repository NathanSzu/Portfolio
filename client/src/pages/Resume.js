// import React, { useState } from 'react'
// import { Document, Page } from 'react-pdf';

// import resume from '../assets/FSR.pdf'

// export default function Resume(props) {
//     const [numPages, setNumPages] = useState(null);

//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }

//     const { pdf } = props;

//     return (
//         <Document
//         file={resume}
//         options={{ workerSrc: "/pdf.worker.js" }}
//         onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page pageNumber={1} />
//         </Document>
//       );
// }
